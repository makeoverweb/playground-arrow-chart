import * as React from "react";
const SvgEditMove = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="edit-move_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M7 21H3v-4M3 7V3h4M21 17v4h-4M21 21L3 3M21 3L3 21M17 3h4v4" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgEditMove;
