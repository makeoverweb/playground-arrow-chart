import * as React from "react";
const SvgBusinessChartMetrics = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 9V7h-2"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5.778 3h12.444C19.204 3 20 3.895 20 5v14c0 1.105-.796 2-1.778 2H5.778C4.796 21 4 20.105 4 19V5c0-1.105.796-2 1.778-2zM8 13.5h8M8 17h4"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7l-3 3-2.714-2L8 10"
        />
      </g>
    </svg>
  )
);
export default SvgBusinessChartMetrics;
