import React, { useLayoutEffect, useRef, useState } from 'react';

import classes from './styles.scss';


export interface IArrowChartEndPointLabelProps {
  y: number;
  x: number;
  canvasWidth: number;
  label: string;
  dateLabel: string;
  position: 'top' | 'bottom';
  lineHeight?: number;
  vOffset: number;
}

const rectPadding = 2;

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const ArrowChartEndPointLabel: React.FC<IArrowChartEndPointLabelProps> = (props) => {

  const {
    y,
    x,
    canvasWidth,
    label,
    dateLabel,
    position,
    vOffset,
    // lineHeight = 12,
  } = props;

  const textRef = useRef<SVGTextElement>(null);
  const [rect, setRect] = useState<Rect>(null);

  const isTop = position === 'top';

  useLayoutEffect(() => {
    if (textRef.current) {
      const box = textRef.current.getBBox();
      const width = box.width + rectPadding * 2;
      const height = box.height + rectPadding * 2;
      setRect({
        x: canvasWidth - width,
        y: isTop ? -height : 0,
        width,
        height,
      });
    }
  }, [x, canvasWidth, label, dateLabel, isTop])


  return (
    <g transform={`translate(0 ${y + (isTop ? -vOffset : vOffset)})`}>
      {
        rect !== null && (
          <>
            <line
              className={classes.endPointLabelConnector}
              x1={rect.x + rect.width / 2}
              y1={0}
              x2={x}
              y2={isTop ? vOffset : -vOffset}
            />
            <rect
              className={classes.endPointLabelPlate}
              {...rect}
            />
          </>
        )
      }
      <text
        ref={textRef}
        className={classes.endPointLabelText}
        x={canvasWidth - rectPadding}
        y={isTop ? - rectPadding : rectPadding}
        textAnchor="end"
        alignmentBaseline={isTop ? 'after-edge' : 'before-edge'}
      >
        {label} ({dateLabel})
      </text>
    </g>
  );
}
