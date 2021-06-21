import * as React from "react";
const SvgAccountEnter = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M3 12h12M5.344 18c1.643 1.83 4.002 3 6.656 3a9 9 0 000-18C9.346 3 6.987 4.17 5.344 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 9l-3 3 3 3"
      />
    </g>
  </svg>
));
export default SvgAccountEnter;
