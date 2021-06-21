import * as React from "react";
const SvgEmailsLetterReply = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="emails-letter-reply_svg__nc-icon-wrapper" fill="none">
        <path
          d="M11 13.097v3.068c0 .867-1.029 1.323-1.672.741l-6.03-5.466a.999.999 0 01.025-1.503l6.03-5.118A1 1 0 0111 5.581v2.437c5.463 0 10 3.372 10 8.982v1.129c-1.847-3.684-5.687-5.032-10-5.032z"
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterReply;
