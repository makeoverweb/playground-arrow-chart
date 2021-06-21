import * as React from "react";
const SvgListsCheckToDo = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M11 5h10M11 12h10M11 19h10M6 7H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM6 14H4a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM6 21H4a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1z"
      />
    </g>
  </svg>
));
export default SvgListsCheckToDo;
