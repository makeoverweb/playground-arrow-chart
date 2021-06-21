import * as React from "react";
const SvgAccountUserProfile = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="account-user-profile_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M17.229 18.332l-.318-.798a2.915 2.915 0 00-.73-1.064l-.058-.054a2.721 2.721 0 00-1.849-.726h-4.55c-.686 0-1.347.26-1.85.725l-.058.054a2.94 2.94 0 00-.73 1.064l-.316.799M14.246 7.93a3.177 3.177 0 11-4.494 4.492 3.177 3.177 0 014.494-4.492" />
          <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgAccountUserProfile;
