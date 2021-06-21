import * as React from "react";
const SvgShapesSquareDouble = React.memo(
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
          d="M3 3h12v12H3V3z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 9h10a1 1 0 011 1v10a1 1 0 01-1 1H10a1 1 0 01-1-1V10a1 1 0 011-1z"
        />
      </g>
    </svg>
  )
);
export default SvgShapesSquareDouble;
