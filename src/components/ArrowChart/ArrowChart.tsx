import React, { useState } from 'react';
import cx from 'classnames';

import { ArrowChartAxis } from './ArrowChartAxis';
import { ArrowChartArrow } from './ArrowChartArrow';
import { ArrowChartConnectors } from './ArrowChartConnectors';
import { ArrowChartEventLabels } from './ArrowChartEventLabels';

import { prepareChart } from './utils';
import { IArrowChartData } from './data';

import classes from './styles.scss';


export interface IArrowChartProps {
  className?: string;
  width: number;
  data: IArrowChartData
  currentDate?: string | Date | number;
  topEndPointLabel?: string;
  bottomEndPointLabel?: string;
}

const paddingLeft = 10;
const paddingRight = 60;
const axisY = 40;
const axisHeight = 40;
const eventLabelsHeight = 180;
const arrowVPadding = 30;
const topArrowY = axisY + axisHeight / 2 + eventLabelsHeight + arrowVPadding;
const arrowHeight = 40;
const connectorsHeight = 200;
const bottomArrowY = topArrowY + arrowHeight + connectorsHeight;
const height = bottomArrowY + arrowHeight + arrowVPadding + eventLabelsHeight;

export const ArrowChart: React.FC<IArrowChartProps> = (props) => {
  const {
    className,
    width: containerWidth,
    data: dataProp,
    currentDate,
    topEndPointLabel = 'Завершение строительства по ГК',
    bottomEndPointLabel = 'Плановое завершение строительства объекта',
  } = props;

  const [requestedWidth, setRequestedWidth] = useState<number>(0);

  const {
    width,
    axisPoints,
    dayWidth,
    startAxisPointLabel,
    endAxisPointLabel,
    topPoints,
    bottomPoints,
    topEndPoint,
    bottomEndPoint,
    currentDatePoint,
  } = prepareChart(
    dataProp,
    currentDate || Date.now(),
    {
      width: requestedWidth || containerWidth - paddingLeft - paddingRight,
      dayMinWidth: 2,
      // intervalMinWidth
    });

  const canvasWidth = width + paddingLeft + paddingRight;
  const canvasHeight = height;

  const handleRequestWidth = (newWidth: number) => {
    if (newWidth > width) {
      setRequestedWidth(newWidth);
    }
  }

  return (
    <div
      className={cx(classes.root, className)}
      style={{ width: `${containerWidth}px`, height: `${height}px` }}
    >
      <svg
        width={`${canvasWidth}px`}
        height={`${canvasHeight}px`}
        viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
        className={classes.canvas}
      >
        <pattern id="arrow-chart-finish-checkers" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect className={classes.checker} x="0" y="0" width="2" height="2"  />
          <rect className={classes.checker} x="2" y="2" width="2" height="2" />
        </pattern>
        <g transform={`translate(${paddingLeft})`}>
          {
            currentDatePoint.offset >= 0 && currentDatePoint.offset <= width && (
              <g
                className={classes.currentDate}
                transform={`translate(${currentDatePoint.offset} 18)`}
              >
                <text
                  className={classes.currentDateLabel}
                  x={0}
                  y={0}
                  textAnchor="middle"
                  alignmentBaseline="after-edge"
                >
                  {currentDatePoint.label}
                </text>
                <line
                  className={classes.currentDateLine}
                  x1={0}
                  x2={0}
                  y1={0}
                  y2={height - 36}
                />
              </g>
            )
          }
          <ArrowChartAxis
            y={axisY}
            width={width}
            points={axisPoints}
            startLabel={startAxisPointLabel}
            endLabel={endAxisPointLabel}
            dayWidth={dayWidth}
          />
          <ArrowChartConnectors
            y={topArrowY + arrowHeight}
            width={width}
            height={connectorsHeight}
            topPoints={topPoints}
            bottomPoints={bottomPoints}
          />
          <ArrowChartEventLabels
            position="top"
            points={topPoints}
            y={topArrowY}
            width={width + paddingRight}
            height={eventLabelsHeight}
            offset={arrowVPadding}
            onRequestWidth={handleRequestWidth}
          />
          <ArrowChartEventLabels
            position="bottom"
            points={bottomPoints}
            y={bottomArrowY + arrowHeight}
            width={width + paddingRight}
            height={eventLabelsHeight}
            offset={arrowVPadding}
            onRequestWidth={handleRequestWidth}
          />
          <ArrowChartArrow
            position="top"
            points={topPoints}
            y={topArrowY}
            width={width}
            height={arrowHeight}
            endPoint={{
              point: topEndPoint,
              label: topEndPointLabel,
            }}
            startDateLabel={startAxisPointLabel}
          />
          <ArrowChartArrow
            position="bottom"
            points={bottomPoints}
            y={bottomArrowY}
            width={width}
            height={arrowHeight}
            endPoint={{
              point: bottomEndPoint,
              label: bottomEndPointLabel
            }}
            startDateLabel={startAxisPointLabel}
          />
        </g>
      </svg>
    </div>
  )
};
