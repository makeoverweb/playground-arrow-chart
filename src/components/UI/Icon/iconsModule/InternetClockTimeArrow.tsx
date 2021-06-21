import * as React from "react";
const SvgInternetClockTimeArrow = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-clock-time-arrow_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M6.375 12l-2.25 2.25L1.875 12M4.125 12c0 .694.086 1.366.235 2.015M22.125 12a9 9 0 00-9-9 9 9 0 00-9 9M13.125 21a9 9 0 009-9M5.754 17.155A8.982 8.982 0 0013.125 21" />
          <path d="M16.496 14.871l-3.652-2.173V7.985" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgInternetClockTimeArrow;
