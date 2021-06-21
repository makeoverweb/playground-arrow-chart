import * as React from "react";
const SvgInternetCirclesPlusAdd = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-circles-plus-add_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <circle cx={14.368} cy={14.368} r={6.632} />
          <path d="M14.37 12.5v3.74M16.24 14.37H12.5M4.942 14.321a6.632 6.632 0 019.378-9.378" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetCirclesPlusAdd;
