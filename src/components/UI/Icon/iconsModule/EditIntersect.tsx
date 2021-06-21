import * as React from "react";
const SvgEditIntersect = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M3 19a2 2 0 002 2M3 16v-3M5 8a2 2 0 00-2 2M14 21a2 2 0 002-2M11 21H8M21 5a2 2 0 00-2-2M21 8v3M19 16a2 2 0 002-2M10 3a2 2 0 00-2 2M13 3h3M10 8h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2z"
      />
    </g>
  </svg>
));
export default SvgEditIntersect;
