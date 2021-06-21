import * as React from "react";
const SvgAccountHomeSmall = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="account-home-small_svg__nc-icon-wrapper" fill="none">
        <path
          d="M9.5 20.5V16a2.5 2.5 0 115 0v4.5H20v-8.586a2 2 0 00-.586-1.414l-6.707-6.707a.999.999 0 00-1.414 0L4.586 10.5A2 2 0 004 11.914V20.5h5.5z"
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgAccountHomeSmall;
