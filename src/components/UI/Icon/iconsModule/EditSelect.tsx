import * as React from "react";
const SvgEditSelect = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="edit-select_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M7.268 3.732a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536M20.268 16.732a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536M5 11v2M19 11v2M7.268 16.732a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536M20.268 3.732a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536M11 19h2M11 5h2" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgEditSelect;
