import * as React from "react";
const SvgMediaMobileNo = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M10.88 17.5h2.24M4.25 4.25l15.5 15.5M7 11v7a2 2 0 002 2h6a2 2 0 002-2v-1M7 7V6a2 2 0 012-2h6a2 2 0 012 2v7"
      />
    </g>
  </svg>
));
export default SvgMediaMobileNo;
