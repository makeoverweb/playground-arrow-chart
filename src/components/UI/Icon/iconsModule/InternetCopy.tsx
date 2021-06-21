import * as React from "react";
const SvgInternetCopy = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M14.006 12.003L17 15.001l-3 3.002M9 15H5a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21h-8a2 2 0 01-2-2v-8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2zM9 15h8"
      />
    </g>
  </svg>
));
export default SvgInternetCopy;
