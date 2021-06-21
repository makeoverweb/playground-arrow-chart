import * as React from "react";
const SvgInternetCursorClock = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-cursor-clock_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M12.527 6.956a7.96 7.96 0 00-5.571 5.571c-.133.488-.801.527-.961.047l-2.973-8.92a.5.5 0 01.632-.632l8.92 2.973c.48.16.441.828-.047.961zM14.94 13.23v2.23M14.94 15.46h2.22M15.5 21a5.5 5.5 0 110-11 5.5 5.5 0 010 11" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetCursorClock;
