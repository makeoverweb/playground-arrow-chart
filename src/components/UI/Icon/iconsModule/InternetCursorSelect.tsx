import * as React from "react";
const SvgInternetCursorSelect = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-cursor-select_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M13.482 13.482l-1.145 2.863a.591.591 0 01-1.105-.018L8.753 9.511a.591.591 0 01.758-.758l6.816 2.478c.51.186.522.903.018 1.105l-2.863 1.146z" />
          <circle cx={12} cy={12} r={9} />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetCursorSelect;
