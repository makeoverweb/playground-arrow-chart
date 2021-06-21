import * as React from "react";
const SvgListsTasksDeliteRemove = React.memo(
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
          d="M11 19.5H4M11 14.5H4M20 9.5H4M20 4.5H4M15 14.5l5 5M20 14.5l-5 5"
        />
      </g>
    </svg>
  )
);
export default SvgListsTasksDeliteRemove;
