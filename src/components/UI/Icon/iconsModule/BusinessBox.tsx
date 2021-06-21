import * as React from "react";
const SvgBusinessBox = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M21 7H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v2a1 1 0 01-1 1zM9 11h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.667 7v12a2 2 0 01-2 2H5.333a2 2 0 01-2-2V7"
      />
    </g>
  </svg>
));
export default SvgBusinessBox;
