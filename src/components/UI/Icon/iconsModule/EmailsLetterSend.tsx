import * as React from "react";
const SvgEmailsLetterSend = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="emails-letter-send_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M20 6.039v6.989M21 19.028h-6M19 17.028l2 2-2 2M11 17.028H5a2 2 0 01-2-2V6.039" />
          <path d="M5.011 4.028H17.99a2.01 2.01 0 111.128 3.675l-5.357 3.631a4.031 4.031 0 01-4.522 0l-5.356-3.63A2.011 2.011 0 013 6.04v-.001c0-1.111.9-2.011 2.011-2.011z" />
        </g>
        <path d="M24 .028H0v24h24v-24z" />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterSend;
