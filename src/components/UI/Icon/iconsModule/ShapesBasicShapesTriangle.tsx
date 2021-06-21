import * as React from "react";
const SvgShapesBasicShapesTriangle = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g
        className="shapes-basic-shapes-triangle_svg__nc-icon-wrapper"
        fill="none"
      >
        <path
          d="M10.293 4.793L2.86 16.957C2.045 18.29 3.004 20 4.566 20h14.868c1.562 0 2.521-1.71 1.707-3.043L13.707 4.793c-.78-1.277-2.634-1.277-3.414 0z"
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesTriangle;
