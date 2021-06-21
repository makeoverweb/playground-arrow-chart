import * as React from "react";
const SvgMapDirectionsB = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M7 9.75l-2 2-2-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.5 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 5.5H7a2 2 0 00-2 2v4.25M17 14.25l2-2 2 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.5 21a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 18.5h9a2 2 0 002-2v-4.25"
      />
    </g>
  </svg>
));
export default SvgMapDirectionsB;
