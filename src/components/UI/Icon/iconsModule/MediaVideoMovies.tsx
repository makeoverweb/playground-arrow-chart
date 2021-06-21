import * as React from "react";
const SvgMediaVideoMovies = React.memo(
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
          d="M6 6h12M8 3h8M11.259 13.071l2.717 1.607a.525.525 0 010 .904l-2.717 1.607a.525.525 0 01-.792-.452v-3.213a.525.525 0 01.792-.453z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21H5a2 2 0 01-2-2v-8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z"
        />
      </g>
    </svg>
  )
);
export default SvgMediaVideoMovies;
