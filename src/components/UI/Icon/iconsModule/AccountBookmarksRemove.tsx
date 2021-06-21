import * as React from "react";
const SvgAccountBookmarksRemove = React.memo(
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
          d="M7.536 3h8.929c.986 0 1.786.806 1.786 1.8V21l-6.242-3.273L5.75 21V4.8c0-.994.8-1.8 1.786-1.8zM9.88 8.88l4.24 4.24M9.88 13.12l4.24-4.24"
        />
      </g>
    </svg>
  )
);
export default SvgAccountBookmarksRemove;
