import * as React from "react";
const SvgAccountUserProfileOne = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="account-user-profile-one_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.482}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M5 20c0-2.5 2-4.4 4.4-4.4h5.1c2.5 0 4.4 2 4.4 4.4" />
          <path
            strokeWidth={1.5}
            d="M15 5.2c1.7 1.7 1.7 4.4 0 6-1.7 1.6-4.4 1.7-6 0-1.6-1.7-1.7-4.4 0-6 1.7-1.6 4.3-1.6 6 0"
          />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgAccountUserProfileOne;
