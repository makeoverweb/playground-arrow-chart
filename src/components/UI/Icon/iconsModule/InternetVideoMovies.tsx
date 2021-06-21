import * as React from "react";
const SvgInternetVideoMovies = React.memo(
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
          d="M15.493 18.25A1.74 1.74 0 0013.75 20a1.75 1.75 0 101.743-1.75M19 15H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2zM3 20h10.75M17.25 20H21"
        />
      </g>
    </svg>
  )
);
export default SvgInternetVideoMovies;
