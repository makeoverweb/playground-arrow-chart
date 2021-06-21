import * as React from "react";
const SvgAccountUnlink = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M16.95 12.707l2.828-2.828a4 4 0 00-5.657-5.657L11.293 7.05M7.05 11.293l-2.828 2.828a4 4 0 005.657 5.657l2.828-2.828M5.64 8.46l-2.12-.7M8.46 5.64l-.7-2.12M18.36 15.54l2.13.7M15.54 18.36l.7 2.13M9.17 14.83l5.66-5.66"
      />
    </g>
  </svg>
));
export default SvgAccountUnlink;
