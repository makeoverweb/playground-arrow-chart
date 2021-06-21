import * as React from "react";
const SvgInternetSearchSelectLoupe = React.memo(
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
          d="M10.5 21h3M13.5 3h-3M13.828 8.172a4 4 0 11-5.656 5.656 4 4 0 015.656-5.656M3 10.5v3M21 13.5v-3M17 17l-3.17-3.17M18 3h1a2 2 0 012 2v1M6 21H5a2 2 0 01-2-2v-1M3 6V5a2 2 0 012-2h1M21 18v1a2 2 0 01-2 2h-1"
        />
      </g>
    </svg>
  )
);
export default SvgInternetSearchSelectLoupe;
