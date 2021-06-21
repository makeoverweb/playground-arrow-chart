import * as React from "react";
const SvgListsTasksCheckmark = React.memo(
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
        <path d="M24 24H0V0h24v24z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 19.5H4M16.25 12.75a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.903 16.174l-2.066 2.066-1.24-1.24M8 14.5H4M20 9.5H4M20 4.5H4"
        />
      </g>
    </svg>
  )
);
export default SvgListsTasksCheckmark;
