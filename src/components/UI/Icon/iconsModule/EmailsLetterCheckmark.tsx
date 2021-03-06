import * as React from "react";
const SvgEmailsLetterCheckmark = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="emails-letter-checkmark_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19 13.028V6.039M14 17.028H4a2 2 0 01-2-2v-9" />
          <path d="M16.989 4.028H4.011a2.01 2.01 0 10-1.128 3.675l5.357 3.631a4.031 4.031 0 004.522 0l5.356-3.63c.551-.374.882-.998.882-1.664v-.001a2.01 2.01 0 00-2.011-2.011zM20.828 14.2a4 4 0 11-5.658 5.657 4 4 0 015.658-5.657" />
          <path d="M19.555 16.25l-1.945 1.945-1.166-1.167" />
        </g>
        <path d="M0 .028h24v24H0v-24z" />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterCheckmark;
