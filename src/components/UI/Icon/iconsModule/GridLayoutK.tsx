import * as React from "react";
const SvgGridLayoutK = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 24V0h24v24z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 5v2.75a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2zM21 16.25V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.75a2 2 0 012-2h14a2 2 0 012 2z"
      />
    </g>
  </svg>
));
export default SvgGridLayoutK;
