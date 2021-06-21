import * as React from "react";
const SvgArrowsTriangleUp = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="arrows-triangle-up_svg__nc-icon-wrapper">
        <path d="M7 14l5-5 5 5z" />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgArrowsTriangleUp;
