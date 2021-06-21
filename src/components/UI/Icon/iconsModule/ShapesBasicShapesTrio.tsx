import * as React from "react";
const SvgShapesBasicShapesTrio = React.memo(
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
          d="M4 14.5h6v6H4zM17.5 21a3.5 3.5 0 110-7 3.5 3.5 0 110 7zM12 3l-4.5 7h9z"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesTrio;
