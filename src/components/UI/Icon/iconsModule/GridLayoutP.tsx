import * as React from "react";
const SvgGridLayoutP = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M6.5 10a3.5 3.5 0 110-7 3.5 3.5 0 110 7zM17.5 10a3.5 3.5 0 110-7 3.5 3.5 0 110 7zM6.5 21a3.5 3.5 0 110-7 3.5 3.5 0 110 7zM21 17.5a3.5 3.5 0 10-7 0 3.5 3.5 0 107 0z"
      />
    </g>
  </svg>
));
export default SvgGridLayoutP;
