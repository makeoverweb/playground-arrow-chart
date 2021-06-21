import * as React from "react";
const SvgArrowsArrowR = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M4.48 11.98h14.99M13.483 5.988L19.52 12l-6.037 6.012"
      />
    </g>
  </svg>
));
export default SvgArrowsArrowR;
