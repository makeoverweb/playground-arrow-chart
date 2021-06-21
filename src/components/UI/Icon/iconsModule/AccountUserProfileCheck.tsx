import * as React from "react";
const SvgAccountUserProfileCheck = React.memo(
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
          d="M6.9 11l-3 3-2-1.9M7 20c0-2.5 2-4.4 4.4-4.4h5.1c2.5 0 4.4 2 4.4 4.4M17 5.2c1.6 1.6 1.6 4.3 0 5.9-1.6 1.6-4.3 1.6-5.9 0-1.6-1.6-1.6-4.3 0-5.9 1.6-1.6 4.2-1.6 5.9 0"
        />
      </g>
    </svg>
  )
);
export default SvgAccountUserProfileCheck;
