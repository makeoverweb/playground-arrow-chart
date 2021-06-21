import * as React from "react";
const SvgMapPinFlag = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M6 3h14l-2 4.5 2 4.5H6M8 20H4M6 20V3"
      />
    </g>
  </svg>
));
export default SvgMapPinFlag;
