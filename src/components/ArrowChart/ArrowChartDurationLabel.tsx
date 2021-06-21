import React from 'react';

import classes from './styles.scss';


export interface IArrowChartDurationLabelProps {
  duration: number;
  left: number;
  top: number;
  width: number;
  height: number;
  lineHeight?: number;
  labelWidth?: number;
}

export const ArrowChartDurationLabel: React.FC<IArrowChartDurationLabelProps> = (props) => {

  const {
    duration,
    left,
    top,
    width,
    height,
    labelWidth = 22,
    lineHeight = 12
  } = props;

  const canDisplay = width > labelWidth;
  const labelHeight = lineHeight * 2 + 4

  return (
    <g
      className={!canDisplay ? classes.durationLabelHidden : ''}
      transform={`translate(${left} ${top})`}
    >
      {
        !canDisplay && (
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            stroke="none"
            fill="rgba(255, 255, 255, 0)"
          />
        )
      }
      <g
        className={classes.durationLabel}
        transform={`translate(${width / 2} ${canDisplay ? height / 2 : -labelHeight + lineHeight})`}
      >
        <rect
          className={classes.durationLabelPlate}
          x={-labelWidth / 2}
          width={labelWidth}
          y={-lineHeight - 2}
          height={labelHeight}
          rx={3}
          ry={3}
        />
        <text
          y={-lineHeight / 2}
          className={classes.durationLabelText}
        >
          <tspan alignmentBaseline="middle" textAnchor="middle" x={0} dy={0}>{duration}</tspan>
          <tspan alignmentBaseline="middle" textAnchor="middle" x={0} dy={lineHeight}>сут.</tspan>
        </text>
      </g>
    </g>
  );
};
