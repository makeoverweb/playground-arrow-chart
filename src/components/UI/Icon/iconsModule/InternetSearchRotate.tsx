import * as React from "react";
const SvgInternetSearchRotate = React.memo(
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
          d="M18.223 10.169a6.844 6.844 0 01-11.52 6.212M16.38 6.703a6.844 6.844 0 00-11.56 6.248"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.334 12.189l1.958-2.095 1.958 2.095M4.73 13.05l-1.96-2.1M19.33 19.33l-2.98-2.98M6.69 10.95l-1.96 2.1"
        />
      </g>
    </svg>
  )
);
export default SvgInternetSearchRotate;
