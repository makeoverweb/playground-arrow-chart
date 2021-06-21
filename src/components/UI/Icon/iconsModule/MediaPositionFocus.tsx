import * as React from "react";
const SvgMediaPositionFocus = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="media-position-focus_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M7.5 3H5.25A2.25 2.25 0 003 5.25V7.5M3 16.5v2.25A2.25 2.25 0 005.25 21H7.5M16.5 21h2.25A2.25 2.25 0 0021 18.75V16.5M21 7.5V5.25A2.25 2.25 0 0018.75 3H16.5" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgMediaPositionFocus;
