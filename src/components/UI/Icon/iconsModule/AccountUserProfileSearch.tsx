import * as React from "react";
const SvgAccountUserProfileSearch = React.memo(
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
        <path d="M0 0h24v24H0V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 20c0-2.5 2-4.5 4.5-4.5h2.6M15 5.2c1.7 1.7 1.7 4.4 0 6-1.7 1.6-4.4 1.7-6 0-1.6-1.7-1.7-4.4 0-6 1.7-1.6 4.3-1.6 6 0M18.4 15.8c1 1 1 2.6 0 3.6s-2.6 1-3.6 0-1-2.6 0-3.6 2.6-1 3.6 0M20 21l-1.6-1.6"
        />
      </g>
    </svg>
  )
);
export default SvgAccountUserProfileSearch;
