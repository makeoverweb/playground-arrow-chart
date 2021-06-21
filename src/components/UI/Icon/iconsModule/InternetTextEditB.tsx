import * as React from "react";
const SvgInternetTextEditB = React.memo(
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
          d="M9.95 5h10.17M15 17V5M7 17v-7M4 10h6"
        />
      </g>
    </svg>
  )
);
export default SvgInternetTextEditB;
