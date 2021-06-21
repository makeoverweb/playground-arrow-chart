import * as React from "react";
const SvgAccountTag = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M6.49 6.538l-3.071 4.3a2 2 0 000 2.325l3.071 4.3a2 2 0 001.627.837H19a2 2 0 002-2V7.7a2 2 0 00-2-2H8.117c-.646 0-1.252.312-1.627.838z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.573 10.727a1.8 1.8 0 11-2.546 2.546 1.8 1.8 0 012.546-2.546"
      />
    </g>
  </svg>
));
export default SvgAccountTag;
