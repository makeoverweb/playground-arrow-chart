import * as React from "react";
const SvgArrowsDownnloading = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="arrows-downnloading_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M5.16 6.16a8.955 8.955 0 011.562-1.438M17 19.482a8.992 8.992 0 01-7.62 1.128M12 16V8M15 13l-3 3-3-3M6.349 19a9.011 9.011 0 01-2.826-4M3.523 9A8.956 8.956 0 003 12M19.463 17A8.913 8.913 0 0021 12a9 9 0 00-9-9" />
        </g>
        <path d="M0 0h24v24H0V0z" />
        <path d="M0 24V0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgArrowsDownnloading;
