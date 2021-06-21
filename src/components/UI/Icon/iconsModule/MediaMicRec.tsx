import * as React from "react";
const SvgMediaMicRec = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M12 15a3 3 0 01-3-3V6a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 10v2a6 6 0 11-12 0v-2M12 18v3M7.82 21h8.36"
      />
    </g>
  </svg>
));
export default SvgMediaMicRec;
