import * as React from "react";
const SvgGridLayoutB = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M5 14a2 2 0 110-4 2 2 0 110 4zM12 14a2 2 0 110-4 2 2 0 110 4zM19 14a2 2 0 110-4 2 2 0 110 4zM5 21a2 2 0 110-4 2 2 0 110 4zM12 21a2 2 0 110-4 2 2 0 110 4zM19 21a2 2 0 110-4 2 2 0 110 4zM5 7a2 2 0 110-4 2 2 0 110 4zM12 7a2 2 0 110-4 2 2 0 110 4zM19 7a2 2 0 110-4 2 2 0 110 4z"
      />
    </g>
  </svg>
));
export default SvgGridLayoutB;
