import * as React from "react";
const SvgMapPinPlus = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M4.5 10c0 4.411 5.014 9.166 6.843 10.754a1 1 0 001.315 0C14.486 19.166 19.5 14.411 19.5 10c0-3.866-3.358-7-7.5-7-4.142 0-7.5 3.134-7.5 7zM12 7.5v6M15 10.5H9"
      />
    </g>
  </svg>
));
export default SvgMapPinPlus;
