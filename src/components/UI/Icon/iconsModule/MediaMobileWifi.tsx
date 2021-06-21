import * as React from "react";
const SvgMediaMobileWifi = React.memo(
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
          d="M9.88 18.5h2.24M14 5a2 2 0 012 2M16 11v8a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3M15 2a4 4 0 014 4"
        />
      </g>
    </svg>
  )
);
export default SvgMediaMobileWifi;
