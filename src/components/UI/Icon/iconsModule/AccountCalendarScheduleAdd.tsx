import * as React from "react";
const SvgAccountCalendarScheduleAdd = React.memo(
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
          d="M15 3v2M7 3v2M3 8h16M19 12.417V6a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h7.417"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.999 10.75a.25.25 0 10.251.25.25.25 0 00-.251-.25M6.999 14.75a.25.25 0 10.251.25.25.25 0 00-.251-.25M10.75 11.001a.25.25 0 10.25-.251.25.25 0 00-.25.251"
        />
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M17 22a5 5 0 01-5-5c0-2.704 2.3-5.003 5.004-5A5 5 0 0117 22"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 15v4M19 17h-4"
        />
      </g>
    </svg>
  )
);
export default SvgAccountCalendarScheduleAdd;
