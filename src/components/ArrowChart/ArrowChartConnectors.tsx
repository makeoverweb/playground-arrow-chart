import React from 'react';
import cx from 'classnames';

import { IArrowChartEventPoint, IArrowChartEventPointWithDelta, isRectIntersect } from './utils';

import classes from './styles.scss';


export interface IArrowChartConnectorsProps {
  y: number;
  width: number;
  height: number;
  topPoints: IArrowChartEventPoint[];
  bottomPoints: IArrowChartEventPointWithDelta[];
}

const labelLineHeight = 12;
const labelWidth = 76;
const labelHeight = labelLineHeight * 2 + 4;
const labelMinOffset = 16;

interface IConnector {
  delta: number;
  isBad: boolean;
  x1: number;
  x2: number;
  boxX: number;
  boxY: number;
  cPath: string;
}

const hasIntersections = (boxX: number, boxY: number, connectors: IConnector[], total: number): boolean => {
  for (let i = 0; i < total; ++i) {
    const { boxX: boxX2, boxY: boxY2 } = connectors[i];
    const left1 = boxX;
    const right1 = boxX + labelWidth;
    const bottom1 = boxY + labelHeight;
    const left2 = boxX2 - labelMinOffset;
    const right2 = boxX2 + labelWidth + labelMinOffset;
    const bottom2 = boxY2 + labelHeight
    if (isRectIntersect(left1, boxY, right1, bottom1, left2, boxY2, right2, bottom2)) {
      return true;
    }
  }
  return false;
}

const getNextSlots = (count: number, slots: number[], total: number, k: number): number[] => {
  const usage: number[] = (new Array(count)).fill(0);
  for (let i = 0; i < total; ++i) {
    if (slots[i] > -1) {
      usage[slots[i]]++;
    }
  }
  const ret: number[] = new Array(count);
  for (let i = 0; i < count; ++i) {
    let idx = -1;
    for (let j = 0; j < count; ++j) {
      if (usage[j] !== -1 && (idx === -1 || usage[j] < usage[idx] || (usage[j] === usage[idx] && k < 0))) {
        idx = j;
      }
    }
    usage[idx] = -1;
    ret[i] = idx;
  }
  return ret;
}

const prepare = (width: number, height: number, topPoints: IArrowChartEventPoint[], bottomPoints: IArrowChartEventPointWithDelta[]): IConnector[] => {
  const ret: IConnector[] = new Array(topPoints.length);
  const _slots: number[] = new Array(topPoints.length);

  const slotsCount = Math.floor((height - labelMinOffset) / (labelHeight + labelMinOffset));
  const slotOffsetY = (height - labelHeight * slotsCount) / (slotsCount + 1);
  const slotSize = slotOffsetY + labelHeight;

  for (let i = 0; i < topPoints.length; i++) {
    const { offset: x1 } = topPoints[i];
    const { offset: x2, delta } = bottomPoints[i];
    let boxX = 0, boxY = 0;
    let cPath = '';
    if (delta !== 0) {

      const kLine = (x2 - x1) / height;
      const slots = getNextSlots(slotsCount, _slots, i, kLine);

      let isBoxAbove = false, isBoxRight = false;
      let flag = false;
      const maxSteps = 100 / labelMinOffset;
      for (let j = 0; (j < maxSteps && !flag); ++j) {
        let qX = (Math.floor(j / 2) + 1) * (j % 2 === 0 ? -1 : 1);
        isBoxAbove = kLine > 0 ? qX > 0 : qX < 0;
        isBoxRight = qX > 0;
        let n = 0;
        do {
          boxY = slots[n] * slotSize + slotOffsetY;
          boxX = x1 + (isBoxAbove ? boxY + labelHeight : boxY) * kLine + qX * labelMinOffset - (isBoxRight ? 0 : labelWidth);
          if (boxX > 0 && boxX + labelWidth < width && !hasIntersections(boxX, boxY, ret, i)) {
            _slots[i] = slots[n];
            flag = true;
          }
          ++n;
        } while (n < slotsCount && !flag);
      }
      if (!flag && i > 0) {
        let minIdx = new Array(slotsCount).fill(-1);
        for (const slot of slots) {
          for (let j = 0; j < i; ++j) {
            if (_slots[j] === slot && (minIdx[slot] === -1 || ret[j].boxX > ret[minIdx[slot]].boxX)) {
              minIdx[slot] = j;
            }
          }
        }
        let slot = -1;
        for (const j of slots) {
          if (slot === -1 || ret[minIdx[slot]].boxX > ret[minIdx[j]].boxX) {
            slot = j;
          }
        }
        _slots[i] = slot;
        boxY = slot * slotSize + slotOffsetY;
        boxX = ret[minIdx[slot]].boxX + labelWidth + labelMinOffset;

      }

      let lineY = isBoxAbove ? boxY + labelHeight + labelMinOffset / 2 : boxY - labelMinOffset / 2
      let lineX = x1 + lineY * kLine;
      // cPath = `M${lineX} ${lineY} L${boxX > lineX ? boxX : boxX + labelWidth} ${boxY > lineY ? boxY : boxY + labelHeight}`;
      cPath = `M${lineX} ${lineY} L${Math.abs(lineX - boxX) < Math.abs(lineX - (boxX + labelWidth)) ? boxX : boxX + labelWidth} ${boxY > lineY ? boxY : boxY + labelHeight}`;
    } else {
      _slots[i] = -1;
    }

    ret[i] = {
      delta,
      isBad: delta > 0,
      x1,
      x2,
      boxX,
      boxY,
      cPath,
    }
  }

  return ret;
}

export const ArrowChartConnectors: React.FC<IArrowChartConnectorsProps> = (props) => {

  const {
    y,
    width,
    height,
    topPoints,
    bottomPoints,
  } = props;

  const connectors = prepare(width, height, topPoints, bottomPoints);

  return (
    <g
      transform={`translate(0 ${y})`}
    >
      {
        connectors.map(
          ({ isBad, x1, x2 }, i) => (
            <line
              key={`line${i}`}
              y1={0}
              y2={height}
              x1={x1}
              x2={x2}
              className={cx(
                classes.connectorLine,
                {
                  [classes.connectorBad]: isBad,
                },
              )}
            />
          ),
        )
      }
      {
        connectors.map(
          ({ delta, isBad, boxX, boxY, cPath }, i) => (
            delta !== 0 && (
              <g
                key={`box${i}`}
                className={cx(
                  classes.connectorBox,
                  {
                    [classes.connectorBad]: isBad,
                  },
                )}
              >
                <path d={cPath} className={classes.connectorLabelLine} />
                <g className={classes.connectorLabel} transform={`translate(${boxX} ${boxY})`}>
                  <rect
                    className={classes.connectorLabelPlate}
                    x={0}
                    y={0}
                    width={labelWidth}
                    height={labelHeight}
                  />
                  <text
                    y={(labelHeight - labelLineHeight) / 2}
                    className={classes.connectorLabelText}
                  >
                    <tspan
                      x={labelWidth / 2}
                      dy={0}
                      textAnchor="middle"
                      alignmentBaseline="middle"
                    >
                      {isBad ? 'Отставание' : 'Опережение'}
                    </tspan>
                    <tspan
                      x={labelWidth / 2}
                      dy={labelLineHeight}
                      textAnchor="middle"
                      alignmentBaseline="middle"
                    >
                      {Math.abs(delta)} сут.
                    </tspan>
                  </text>
                </g>
              </g>
            )
          ),
        )
      }
    </g>
  );
};
