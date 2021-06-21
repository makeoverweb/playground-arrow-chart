import * as React from "react";
const SvgInternetCopyGridPlus = React.memo(
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
          d="M21 5V4c0-.6-.4-1-1-1h-1M21 15v1c0 .6-.4 1-1 1h-1M7 5V4c0-.6.4-1 1-1h1M13 3h2M21 11V9v2zM14 21H5c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2zM9.5 12v5M12 14.5H7"
        />
      </g>
    </svg>
  )
);
export default SvgInternetCopyGridPlus;
