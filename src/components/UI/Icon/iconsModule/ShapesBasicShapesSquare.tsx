import * as React from "react";
const SvgShapesBasicShapesSquare = React.memo(
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
        className="shapes-basic-shapes-square_svg__nc-icon-wrapper"
        fill="none"
      >
        <path
          d="M18.417 20.25H5.583a1.833 1.833 0 01-1.833-1.833V5.583c0-1.013.821-1.833 1.833-1.833h12.833c1.013 0 1.833.821 1.833 1.833v12.833a1.832 1.832 0 01-1.832 1.834z"
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
export default SvgShapesBasicShapesSquare;
