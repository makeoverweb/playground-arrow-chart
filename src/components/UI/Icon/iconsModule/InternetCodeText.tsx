import * as React from "react";
const SvgInternetCodeText = React.memo(
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
          d="M13.78 4l-3.56 16M18 8l4 4-4 4M6 16l-4-4 4-4"
        />
      </g>
    </svg>
  )
);
export default SvgInternetCodeText;
