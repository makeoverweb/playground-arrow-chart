import * as React from "react";
const SvgListsRemove = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="lists-remove_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M8 4h12M3 4h1M3 8h1M3 12h1M8 8h12M8 12h2" />
      </g>
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 21a5 5 0 01-5-5c0-2.704 2.3-5.003 5.004-5A5 5 0 0117 21"
      />
      <path
        d="M19 16h-4"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgListsRemove;
