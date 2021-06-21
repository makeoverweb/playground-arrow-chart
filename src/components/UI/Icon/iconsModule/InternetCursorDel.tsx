import * as React from "react";
const SvgInternetCursorDel = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-cursor-del_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M12.527 6.956a7.96 7.96 0 00-5.571 5.571c-.133.488-.801.527-.961.047l-2.973-8.92a.5.5 0 01.632-.632l8.92 2.973c.48.16.441.828-.047.961zM17.06 13.94l-3.12 3.12M17.06 17.06l-3.12-3.12M19.39 11.61a5.5 5.5 0 11-7.78 7.78 5.5 5.5 0 017.78-7.78" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetCursorDel;
