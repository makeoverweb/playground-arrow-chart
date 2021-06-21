import * as React from "react";
const SvgAccountHomeDoor = React.memo(
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
          d="M4 8.6V21h16V8.6"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2 10l10-7 10 7M15 21v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6"
        />
      </g>
    </svg>
  )
);
export default SvgAccountHomeDoor;
