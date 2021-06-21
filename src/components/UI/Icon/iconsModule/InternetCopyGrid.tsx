import * as React from "react";
const SvgInternetCopyGrid = React.memo(
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
          d="M15 21H4a1 1 0 01-1-1V9a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1zM21 5V4a1 1 0 00-1-1h-1M21 15v1a1 1 0 01-1 1h-1M7 5V4a1 1 0 011-1h1M13 3h2M21 11V9z"
        />
      </g>
    </svg>
  )
);
export default SvgInternetCopyGrid;
