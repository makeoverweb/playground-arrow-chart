import * as React from "react";
const SvgBusinessBriefcase = React.memo(
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
          d="M19 20.5H5a2 2 0 01-2-2v-9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2zM16.174 7.5v-2a2 2 0 00-2-2H9.826a2 2 0 00-2 2v2"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9.5l6.351 4.191c.327.216.71.331 1.102.331h3.094c.392 0 .775-.115 1.102-.331L21 9.5"
        />
      </g>
    </svg>
  )
);
export default SvgBusinessBriefcase;
