import * as React from "react";
const SvgMapDirections = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M19.5 10v3M18 11.5h3M5.56 11.44a1.5 1.5 0 11-2.12 2.12 1.5 1.5 0 012.12-2.12M15.661 15.349l-2.405 2.405a2.478 2.478 0 01-3.503 0l-.002-.002a2.478 2.478 0 010-3.503l4.497-4.497a2.476 2.476 0 10-3.505-3.502L8 9"
      />
    </g>
  </svg>
));
export default SvgMapDirections;
