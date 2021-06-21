import * as React from "react";
const SvgAccountSignOutRight = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="account-sign-out-right_svg__nc-icon-wrapper">
        <defs>
          <path d="M0 0h24v24H0z" id="account-sign-out-right_svg__a" />
        </defs>
        <g fill="none">
          <use xlinkHref="#account-sign-out-right_svg__a" />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.86 12H20M10.864 19.981L6.696 20a2.146 2.146 0 01-2.167-2.135V6.135C4.529 4.956 5.494 4 6.686 4H11M16 16l4-4-4-4"
          />
          <use xlinkHref="#account-sign-out-right_svg__a" />
        </g>
      </g>
    </svg>
  )
);
export default SvgAccountSignOutRight;
