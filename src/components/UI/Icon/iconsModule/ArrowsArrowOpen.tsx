import * as React from "react";
const SvgArrowsArrowOpen = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M21 12H7M3 4v16M16 7l5.001 5.001-5.001 5" />
      </g>
    </svg>
  )
);
export default SvgArrowsArrowOpen;
