import * as React from "react";
const SvgEditPathfinderIntersect = React.memo(
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
          d="M3 19a2 2 0 002 2M3 16v-3M5 8a2 2 0 00-2 2M14 21a2 2 0 002-2M11 21H8M14 8a2 2 0 012 2v6h-6a2 2 0 01-2-2V8h6z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 8V5a2 2 0 012-2h9a2 2 0 012 2v9a2 2 0 01-2 2h-3"
        />
      </g>
    </svg>
  )
);
export default SvgEditPathfinderIntersect;
