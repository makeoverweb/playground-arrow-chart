import * as React from "react";
const SvgBusinessChart = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="business-chart_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M7 17v-5M11 17V6M15 17v-6.1M19 17V7M3 3v16a2 2 0 002 2h16" />
      </g>
      <path d="M0 0h24v24H0V0z" />
    </g>
  </svg>
));
export default SvgBusinessChart;
