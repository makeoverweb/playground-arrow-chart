import * as React from "react";
const SvgArrowsRotateArrowDots = React.memo(
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
          d="M3.125 4A.124.124 0 003 3.875.124.124 0 002.875 4c0 .07.055.125.125.125s.125-.055.125-.125M7.125 4A.124.124 0 007 3.875.124.124 0 006.875 4c0 .07.055.125.125.125s.125-.055.125-.125M5 9v3a8 8 0 108-8h-2"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 11l2-2 2 2"
        />
      </g>
    </svg>
  )
);
export default SvgArrowsRotateArrowDots;
