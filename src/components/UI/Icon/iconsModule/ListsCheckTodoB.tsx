import * as React from "react";
const SvgListsCheckTodoB = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
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
          d="M11 5h10M11 12h10M11 19h10M6.414 10.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M6.414 17.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M3.5 3.5l3 3M3.5 6.5l3-3"
        />
      </g>
    </svg>
  )
);
export default SvgListsCheckTodoB;
