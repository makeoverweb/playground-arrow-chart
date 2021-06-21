import * as React from "react";
const SvgAccountUserCircle = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="account-user-circle_svg__nc-icon-wrapper" fill="none">
        <g strokeLinecap="round" stroke="currentColor" strokeLinejoin="round">
          <path d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636" />
          <path d="M17.307 19.257C16.923 17.417 14.705 16 12 16c-2.705 0-4.923 1.417-5.307 3.257M14.121 7.879A3 3 0 119.88 12.12a3 3 0 014.24-4.24" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgAccountUserCircle;
