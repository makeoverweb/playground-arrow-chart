import * as React from "react";
const SvgShapesBasicShapesCircleA = React.memo(
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
          d="M13.666 10.33a6.25 6.25 0 11-8.838 8.84 6.25 6.25 0 018.838-8.84"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.17 4.83a6.25 6.25 0 11-8.84 8.84 6.25 6.25 0 018.84-8.84"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesCircleA;
