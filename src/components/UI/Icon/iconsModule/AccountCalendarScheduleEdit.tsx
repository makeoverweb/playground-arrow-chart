import * as React from "react";
const SvgAccountCalendarScheduleEdit = React.memo(
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
          d="M15 3v2M7 3v2M3 8h16M19 10V6a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h6"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.999 10.75a.25.25 0 10.251.25.25.25 0 00-.251-.25M6.999 14.75a.25.25 0 10.251.25.25.25 0 00-.251-.25M10.75 11.001a.25.25 0 10.25-.251.25.25 0 00-.25.251M17.293 20.707l4.414-4.414a.999.999 0 000-1.414l-1.586-1.586a.999.999 0 00-1.414 0l-4.414 4.414a1 1 0 00-.293.707V21h2.586a1 1 0 00.707-.293z"
        />
      </g>
    </svg>
  )
);
export default SvgAccountCalendarScheduleEdit;
