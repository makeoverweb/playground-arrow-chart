import * as React from "react";
const SvgShapesBasicShapesCube = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="shapes-basic-shapes-cube_svg__nc-icon-wrapper" fill="none">
        <path
          d="M20.25 15.705v-7.41c0-.655-.349-1.26-.917-1.588l-6.417-3.705a1.835 1.835 0 00-1.833 0L4.667 6.708a1.83 1.83 0 00-.917 1.587v7.409c0 .655.349 1.26.917 1.588l6.417 3.705a1.835 1.835 0 001.833 0l6.417-3.705c.567-.327.916-.932.916-1.587z"
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
export default SvgShapesBasicShapesCube;
