import React, { useLayoutEffect, useRef } from 'react';

import { IArrowChartEventPoint, TArrowChartEventColor } from './utils';

import classes from './styles.scss';


const colorClass: Record<TArrowChartEventColor, string> = {
  darkBlue: classes.eventLabelDarkBlue,
  darkGreen: classes.eventLabelDarkGreen,
  lightBlue: classes.eventLabelLightBlue,
  green: classes.eventLabelGreen,
  grey: classes.eventLabelGrey,
  red: classes.eventLabelRed,
  yellow: classes.eventLabelYellow,
}

type TRequestWidthCallback = (width: number) => void;

export interface IArrowChartEventLabelsProps {
  position: 'top' | 'bottom';
  points: IArrowChartEventPoint[]
  y: number;
  width: number;
  height: number;
  offset: number;
  lineHeight?: number;
  onRequestWidth: TRequestWidthCallback;
}

const labelPadding = 2;
const labelHMinOffset = 16;

const findNearestSpace = (str: string, idx: number) => {
  for (let i = 0; idx - i > 0 && idx + i < str.length; ++i) {
    if (str[idx - i] === ' ') {
      return idx - i;
    }
    if (str[idx + i] === ' ') {
      return idx + i;
    }
  }
  return -1;
}

const splitLabel = ({ label, dateLabel }: IArrowChartEventPoint): string[] => {
  const ret: string[] = [];
  const halfLength = Math.floor(label.length / 2);
  const halfSpace = findNearestSpace(label, halfLength);
  if (halfSpace !== -1) {
    if (halfSpace < 20) {
      ret.push(label.slice(0, halfSpace), label.slice(halfSpace + 1));
    } else {
      const thirdLength = label.length / 3;
      const thirdSpace1 = findNearestSpace(label, Math.floor(thirdLength));
      const thirdSpace2 = findNearestSpace(label, Math.floor(thirdLength * 2));
      if (thirdSpace1 !== -1 && thirdSpace2 !== -1 && thirdSpace1 !== thirdSpace2) {
        ret.push(
          label.slice(0, thirdSpace1),
          label.slice(thirdSpace1 + 1, thirdSpace2),
          label.slice(thirdSpace2)
        );
      } else {
        ret.push(label.slice(0, halfSpace), label.slice(halfSpace + 1));
      }
    }
  } else {
    ret.push(label);
  }
  ret.push(`(${dateLabel})`);
  return ret;
}

const maxRows = 2;

const arrangeLabels = (
  root: SVGGElement,
  points: IArrowChartEventPoint[],
  width: number,
  height: number,
  isTop: boolean,
  onRequestWidth: TRequestWidthCallback
): void => {
  const count = points.length;
  const texts = root.getElementsByTagName('text');
  const widths = (new Array(count)).fill(0);
  const heights = (new Array(count)).fill(0);
  let totalWidth = 0;
  for (let i = 0; i < texts.length; ++i) {
    widths[i] = texts[i].getBBox().width + labelPadding * 2;
    heights[i]  = texts[i].getBBox().height + labelPadding * 2;
    totalWidth += widths[i] + labelHMinOffset;
  }

  const rows = Math.min(Math.ceil(totalWidth / width), maxRows);
  const rowWidth: number[] = new Array(rows).fill(0);
  const rowCount : number[] = new Array(rows).fill(0);

  const getLabelRow = (i: number) => rows - (i % rows) - 1;


  for (let i = 0; i < count; ++i) {
    const row = getLabelRow(i);
    rowWidth[row] += widths[i] + labelHMinOffset;
    rowCount[row]++;
  }

  const maxWidth = Math.max(...rowWidth);
  if (maxWidth > width) {
    onRequestWidth(maxWidth);
    return;
  }

  const rowOffset = new Array(rows).fill(0);
  for (let i = 0; i < rows; i++) {
    rowOffset[i] = (width - rowWidth[i]) / (rowCount[i] + 1) + labelHMinOffset / 2;
  }

  const rowHeight = height / rows;

  const lines = root.getElementsByTagName('line');
  rowWidth.fill(0);
  for (let i = 0; i < count; ++i) {
    const row =  getLabelRow(i);
    const g = texts[i].parentNode as SVGGElement;
    const rect = g.getElementsByTagName('rect')[0];
    const line = lines[i];
    const placeX = rowWidth[row] + rowOffset[row];
    const labelHeight = heights[i];
    const labelWidth = widths[i];
    const x = placeX + labelWidth / 2;
    const y = (isTop ? -row : (row + 1)) * rowHeight - (rowHeight + labelHeight) / 2;
    rowWidth[row] = placeX + labelWidth;
    g.setAttribute('transform', `translate(${x} ${y})`);
    line.setAttribute('x2', x.toString());
    line.setAttribute('y2', (y + (isTop ? labelHeight : 0)).toString());
    if (rect) {
      rect.setAttribute('x', (-labelWidth / 2).toString());
      rect.setAttribute('width', labelWidth.toString());
      rect.setAttribute('height', labelHeight.toString());
    }
  }

}

export const ArrowChartEventLabels: React.FC<IArrowChartEventLabelsProps> = (props) => {

  const {
    position,
    y,
    width,
    height,
    offset,
    points,
    lineHeight = 12,
    onRequestWidth,
  } = props;

  const rootRef = useRef<SVGGElement>(null);

  useLayoutEffect(
    () => {
      if (rootRef.current) {
        arrangeLabels(
          rootRef.current,
          points,
          width,
          height,
          isTop,
          onRequestWidth
        );
      }
    }
  );
  const isTop = position === 'top';

  return (
    <g
      ref={rootRef}
      transform={`translate(0 ${y + (isTop ? -offset : offset)})`}
    >
      {/*<rect x={0} y={-height} width={width} height={height} fill="rgba(255, 0, 0, 0.2)" />*/}
      {
        points.map((point, i) => (
          <line
            key={i}
            className={classes.eventLabelLine}
            x1={point.offset}
            y1={isTop ? offset : -offset}
            x2={point.offset}
            y2={0}
          />
        ))
      }
      {
        points.map((point, i) => (
          <g key={i} className={colorClass[point.color]}>
            <rect
              className={classes.eventLabelPlate}
              x={0}
              y={0}
              width={0}
              height={0}
            />
            <text
              y={0}
              className={classes.eventLabelText}
            >
              {
                splitLabel(point).map((str, j) => (
                  <tspan
                    key={j}
                    x={0}
                    dy={j > 0 ? lineHeight : 0}
                    textAnchor="middle"
                    alignmentBaseline="before-edge"
                  >
                    {str}
                  </tspan>
                ))
              }
            </text>
          </g>
        ))
      }
    </g>
  );
};
