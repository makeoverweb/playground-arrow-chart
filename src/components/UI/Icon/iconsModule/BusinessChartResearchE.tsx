import * as React from "react";
const SvgBusinessChartResearchE = React.memo(
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
          d="M9 13v8M21 8v13M15 3v18M3 8v13"
        />
      </g>
    </svg>
  )
);
export default SvgBusinessChartResearchE;
