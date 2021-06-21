import * as React from "react";
const SvgAccountSignOut = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="account-sign-out_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M16 12H4M10.999 7L16 12.001l-5.001 5M16 4h2a2 2 0 012 2v12a2 2 0 01-2 2h-2" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgAccountSignOut;
