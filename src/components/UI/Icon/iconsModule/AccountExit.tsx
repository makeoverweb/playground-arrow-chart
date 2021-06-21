import * as React from "react";
const SvgAccountExit = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M15 12H3M3.947 16C5.42 18.961 8.468 21 12 21a9 9 0 009-9 9 9 0 00-9-9C8.468 3 5.42 5.039 3.947 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9l3 3-3 3"
      />
    </g>
  </svg>
));
export default SvgAccountExit;
