import * as React from "react";
const SvgAccountCalendarEmpty = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M16 2v4M8 2v4M3 9h18M19 4H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
      </g>
    </svg>
  )
);
export default SvgAccountCalendarEmpty;
