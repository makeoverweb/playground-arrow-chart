import * as React from "react";
const SvgEditCopy = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M11.5 15.64h-6M8.5 18.64v-6M2.5 20.357v-9.715a1 1 0 011-1h10a1 1 0 011 1v9.715a1 1 0 01-1 1h-10a1 1 0 01-1-1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 9.643v-6a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1h-6"
      />
    </g>
  </svg>
));
export default SvgEditCopy;
