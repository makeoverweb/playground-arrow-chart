import * as React from "react";
const SvgBusinessChartResearchH = React.memo(
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
          d="M5 15.889l5.071-5.071a.999.999 0 011.414 0l2.141 2.141a.999.999 0 001.414 0L21 7"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.333 7H21v2.667M21 20.929H1.925V3.221"
        />
      </g>
    </svg>
  )
);
export default SvgBusinessChartResearchH;
