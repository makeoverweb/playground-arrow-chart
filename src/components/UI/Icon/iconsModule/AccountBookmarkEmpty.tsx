import * as React from "react";
const SvgAccountBookmarkEmpty = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="account-bookmark-empty_svg__nc-icon-wrapper" fill="none">
        <path
          d="M7.7 3h8.6a2 2 0 012 2v16l-6.292-3.273L5.7 21V5a2 2 0 012-2z"
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
export default SvgAccountBookmarkEmpty;
