import * as React from "react";
const SvgArrowsArrowOpenB = React.memo(
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
          d="M12 17V3M20 21H4M17 12l-5.001 5.001-5-5.001"
        />
      </g>
    </svg>
  )
);
export default SvgArrowsArrowOpenB;
