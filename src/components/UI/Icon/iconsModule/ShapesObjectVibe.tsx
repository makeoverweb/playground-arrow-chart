import * as React from "react";
const SvgShapesObjectVibe = React.memo(
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
          d="M20 3H8.828a2 2 0 00-1.414.586L3.586 7.414A2 2 0 003 8.828V20a1 1 0 001 1h11.172a2 2 0 001.414-.586l3.828-3.828A2 2 0 0021 15.172V4a1 1 0 00-1-1z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 3.186V9H3M21 15h-5v5.814M16 9l4.67-5.73M3.33 20.73L8 15M8 9h8v6H8z"
        />
      </g>
    </svg>
  )
);
export default SvgShapesObjectVibe;
