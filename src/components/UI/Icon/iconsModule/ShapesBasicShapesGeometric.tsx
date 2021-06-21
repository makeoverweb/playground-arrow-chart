import * as React from "react";
const SvgShapesBasicShapesGeometric = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 16.041V7.959c0-.715-.381-1.375-1-1.732l-7-4.041a2.001 2.001 0 00-2 0l-7 4.04c-.619.358-1 1.018-1 1.733v8.083c0 .715.381 1.375 1 1.732l7 4.041a2.001 2.001 0 002 0l7-4.041c.619-.358 1-1.018 1-1.733zM12 22.08V12M12 12l8.73-5.04M3.27 6.96L12 12"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesGeometric;
