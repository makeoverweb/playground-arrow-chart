import * as React from "react";
const SvgArrowsBackwardRearward = React.memo(
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
          d="M5 13a7 7 0 107-7H5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 3L5 6l3 3M13.77 11.23l-3.54 3.54M13.77 14.77l-3.54-3.54"
        />
      </g>
    </svg>
  )
);
export default SvgArrowsBackwardRearward;
