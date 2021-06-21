import * as React from "react";
const SvgInternetLock = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="internet-lock_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M17 21H7a2 2 0 01-2-2v-7a2 2 0 012-2h10a2 2 0 012 2v7a2 2 0 01-2 2zM8 10V7a4 4 0 018 0v3" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgInternetLock;
