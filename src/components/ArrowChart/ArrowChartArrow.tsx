import React from 'react';

import { ArrowChartDurationLabel } from './ArrowChartDurationLabel';
import { ArrowChartEndPointLabel } from './ArrowChartEndPointLabel';
import { IArrowChartEventPoint, IArrowChartPoint } from './utils';

import classes from './styles.scss';


export interface IArrowChartArrowProps {
  y?: number;
  width: number;
  height?: number;
  points: IArrowChartEventPoint[];
  position: 'top' | 'bottom';
  endPoint: {
    point: IArrowChartPoint;
    label: string;
  },
  startDateLabel?: string;
}

const endLineWidth = 6;
const endLabelOffset = 12;
const startLabelOffset = 6;

export const ArrowChartArrow: React.FC<IArrowChartArrowProps> = (props) => {

  const {
    y = 0,
    width,
    height = 40,
    points,
    position,
    endPoint,
    startDateLabel,
  } = props;

  const halfArrowHeight = height / 2;
  const arrowPath = `M0 0 h${width + 10} v${-halfArrowHeight} l${height} ${height} l${-height} ${height} v${-halfArrowHeight} h${-width - 10} Z`;
  const dividersPath = points
    .map(({ offset }) => `M${offset} 0 v${height}`)
    .join('');

  const isTop = position === 'top';

  return (
    <g transform={`translate(0 ${y})`}>
      <path
        className={classes.arrow}
        d={arrowPath}
      />
      <rect
        className={classes.arrowEndLine}
        x={endPoint.point.offset - endLineWidth / 2}
        y={1}
        width={endLineWidth}
        height={height-2}
      />
      <ArrowChartEndPointLabel
        x={endPoint.point.offset}
        y={isTop ? 0 : height}
        vOffset={endLabelOffset}
        position={position}
        canvasWidth={width}
        dateLabel={endPoint.point.label}
        label={endPoint.label}
      />
      {
        !!startDateLabel && (
          <text
            className={classes.startDateLabel}
            x={0}
            y={isTop ? -startLabelOffset : height + startLabelOffset}
            textAnchor="start"
            alignmentBaseline={isTop ? 'after-edge' : 'before-edge'}
          >
            {startDateLabel}
          </text>
        )
      }
      <path
        className={classes.eventDivider}
        d={dividersPath}
      />
      {
        points.map(({ offset, duration }, i, points) => {
          const left = i > 0 ? points[i - 1].offset : 0;
          const width = offset - left;
          return (
            <g key={i}>
              <line x1={offset} x2={offset} y1={0} y2={height} />
              <ArrowChartDurationLabel
                duration={duration}
                left={left}
                width={width}
                top={0}
                height={height}
              />
            </g>
          );
        })
      }
    </g>
  );
};

