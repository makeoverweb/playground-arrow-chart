import * as React from "react";
const SvgShapesBasicShapesCircleD = React.memo(
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
          strokeWidth={1.5}
          d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21V3M12 12h9"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesCircleD;
