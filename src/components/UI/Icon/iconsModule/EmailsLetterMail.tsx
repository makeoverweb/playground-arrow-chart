import * as React from "react";
const SvgEmailsLetterMail = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="emails-letter-mail_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19 18.981H5a2 2 0 01-2-2V7.019a2 2 0 012-2h14a2 2 0 012 2v9.963a2 2 0 01-2 1.999z" />
          <path d="M17 9l-5 3-5-3" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterMail;
