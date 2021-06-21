import * as React from "react";
const SvgListsAdd = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M10 20H4M10 15H4M20 10H4M20 5H4M17.75 20v-5M15.25 17.5h5"
      />
    </g>
  </svg>
));
export default SvgListsAdd;
