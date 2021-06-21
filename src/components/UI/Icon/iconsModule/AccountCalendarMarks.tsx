import * as React from "react";
const SvgAccountCalendarMarks = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="account-calendar-marks_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M16 2v4M8 2v4M3 9h18M19 4H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
          <path d="M12.013 12.729a.25.25 0 10.251.25.25.25 0 00-.251-.25M17.013 12.729a.25.25 0 10.251.25.25.25 0 00-.251-.25M7.013 16.729a.25.25 0 10.251.25.25.25 0 00-.251-.25M12.013 16.729a.25.25 0 10.251.25.25.25 0 00-.251-.25" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgAccountCalendarMarks;
