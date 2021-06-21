import * as React from "react";
const SvgShapesShapeObjectR = React.memo(
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
          d="M11.159 3.266L3.281 15.52a2 2 0 00.268 2.496l2.537 2.537a2 2 0 001.414.586h9a2 2 0 001.414-.586l2.537-2.537a2 2 0 00.268-2.496L12.841 3.266a1 1 0 00-1.682 0zM12 2.86L6.72 20.98M12 2.86l5.28 18.12"
        />
      </g>
    </svg>
  )
);
export default SvgShapesShapeObjectR;
