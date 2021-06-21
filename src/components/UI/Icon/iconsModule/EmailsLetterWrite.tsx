import * as React from "react";
const SvgEmailsLetterWrite = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="emails-letter-write_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M20.707 4.707l-1.414-1.414a.999.999 0 00-1.414 0L7.293 13.879a.997.997 0 00-.293.707V17h2.414c.265 0 .52-.105.707-.293L20.707 6.121a.999.999 0 000-1.414zM18.91 7.91l-2.82-2.82" />
          <path d="M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterWrite;
