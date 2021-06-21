import * as React from "react";
const SvgGridLayoutN = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M19 21h-2.75a2 2 0 01-2-2V5a2 2 0 012-2H19a2 2 0 012 2v14a2 2 0 01-2 2zM7.75 21H5a2 2 0 01-2-2V5a2 2 0 012-2h2.75a2 2 0 012 2v14a2 2 0 01-2 2z"
      />
    </g>
  </svg>
));
export default SvgGridLayoutN;
