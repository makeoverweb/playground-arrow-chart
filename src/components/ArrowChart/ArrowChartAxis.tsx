import React from 'react';

import { IArrowChartPoint } from './utils';
import classes from './styles.scss';


export interface IArrowChartAxisProps {
  y?: number;
  width: number;
  points: IArrowChartPoint[];
  pointSize?: number;
  startLabel: string;
  endLabel: string;
  dayWidth: number;
}

export const ArrowChartAxis: React.FC<IArrowChartAxisProps> = (props) => {

  const {
    y = 0,
    width,
    points,
    pointSize = 6,
    startLabel,
    endLabel,
    dayWidth
  } = props;

  const path = `M0 -${pointSize} v${pointSize} h${width} v-${pointSize}`
    + points.map(({ offset }) => `M${offset} 0 v${pointSize}`);

  return (
    <g transform={`translate(0 ${y})`}>
      <path
        className={classes.axis}
        d={path}
      />
      <text
        x={-pointSize}
        y={-pointSize}
        alignmentBaseline="after-edge"
        textAnchor="start"
        className={classes.axisLabel}
      >
        {startLabel}
      </text>
      <text
        x={width + pointSize}
        y={-pointSize}
        alignmentBaseline="after-edge"
        textAnchor="end"
        className={classes.axisLabel}
      >
        {endLabel}
      </text>
      {
        points.map(({ offset, label }, i) => (
          (dayWidth >= 2 || (dayWidth >= 1 && i % 2 === 0) || (dayWidth < 1 && i % 3 === 0)) && (
            <text
              key={i}
              x={offset}
              y={pointSize}
              dominantBaseline="text-before-edge"
              textAnchor="middle"
              className={classes.axisLabel}
            >
              {label}
            </text>
          )
        ))
      }
    </g>
  );
};
