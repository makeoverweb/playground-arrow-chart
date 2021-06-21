import * as React from "react";
const SvgEditAnchorSquare = React.memo(
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
          d="M5 7v10M19 17V7M20 21h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM6 21H4a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM20 7h-2a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM6 7H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM7 19h10M17 5H7M9 15l6-6M11.5 15H9v-2.5M12.5 9H15v2.5"
        />
      </g>
    </svg>
  )
);
export default SvgEditAnchorSquare;
