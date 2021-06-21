import * as React from "react";
const SvgBusinessChartL = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21h-4V3h4zM14 21h-4V8.684h4zM7 21H3v-6.632h4z"
      />
    </g>
  </svg>
));
export default SvgBusinessChartL;
