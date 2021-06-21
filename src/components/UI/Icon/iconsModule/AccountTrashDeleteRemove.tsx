import * as React from "react";
const SvgAccountTrashDeleteRemove = React.memo(
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
        <path d="M0 0h24v24H0V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 7h14M18 7v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7M15 3.76H9M13.87 15.37l-3.74-3.74M10.13 15.37l3.74-3.74"
        />
      </g>
    </svg>
  )
);
export default SvgAccountTrashDeleteRemove;
