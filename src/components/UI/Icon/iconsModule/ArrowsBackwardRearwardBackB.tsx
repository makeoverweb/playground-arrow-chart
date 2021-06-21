import * as React from "react";
const SvgArrowsBackwardRearwardBackB = React.memo(
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
          d="M6 7.5l3-3M6 7.5l3 3M6 7.5h6a6 6 0 11-6 6"
        />
      </g>
    </svg>
  )
);
export default SvgArrowsBackwardRearwardBackB;
