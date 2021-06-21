import * as React from "react";
const SvgSignsDivide = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636M8.5 12h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.625 8.501a.376.376 0 00.75-.001.375.375 0 10-.75.001M11.625 15.501a.376.376 0 00.75-.001.375.375 0 10-.75.001"
      />
    </g>
  </svg>
));
export default SvgSignsDivide;
