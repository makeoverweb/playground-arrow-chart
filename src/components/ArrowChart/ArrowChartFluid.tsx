import React, { useEffect, useRef, useState } from 'react';
import { ArrowChart, IArrowChartProps } from './ArrowChart';

import classes from './styles.scss';


type VoidFn = () => void;

const debounce = (fn: VoidFn, interval): VoidFn => {
  let timerId = 0;
  return () => {
    if (timerId) {
      window.clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      fn();
    }, interval);
  }
}

export const ArrowChartFluid: React.FC<Omit<IArrowChartProps, 'width'>> = (props) => {

  const [width, setWidth] = useState(0);
  const containerRef: React.Ref<HTMLDivElement> = useRef(null);

  useEffect(
    () => {
      if (containerRef.current) {
        let w = containerRef.current.clientWidth;
        setWidth(w);
        const resize = debounce(
          () => {
            setWidth(w);
          },
          664,
        );
        const timerId = window.setInterval(
          () => {
            if (w !== containerRef.current.clientWidth) {
              w = containerRef.current.clientWidth;
              resize();
            }
          },
          332,
        );
        return () => {
          window.clearInterval(timerId);
        };
      }
      return null;
    },
    [],
  )

  return (
    <div
      ref={containerRef}
      className={classes.fluidContainer}
    >
      {
        width > 0 &&
        <ArrowChart
          width={width}
          {...props}
        />
      }
    </div>
  )
}
