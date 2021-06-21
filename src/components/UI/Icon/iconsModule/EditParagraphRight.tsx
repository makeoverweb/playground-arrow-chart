import * as React from "react";
const SvgEditParagraphRight = React.memo(
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
          d="M20 19.5H4M13 14.5H4M13 9.5H4M20 4.5H4M17 15l3-3-3-3"
        />
      </g>
    </svg>
  )
);
export default SvgEditParagraphRight;
