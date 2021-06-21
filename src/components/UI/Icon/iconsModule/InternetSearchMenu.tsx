import * as React from "react";
const SvgInternetSearchMenu = React.memo(
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
          d="M19.183 7.575a5.379 5.379 0 11-7.608 7.608 5.379 5.379 0 017.607-7.608M22 18l-2.82-2.82M3 7h5M3 12h3M3 17h5"
        />
      </g>
    </svg>
  )
);
export default SvgInternetSearchMenu;
