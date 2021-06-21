import * as React from "react";
const SvgEmailsLetterReplyback = React.memo(
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
        <path d="M-.01 0h24v24h-24V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.99 11.028V6.039M15.99 17l-2 2 2 2M17.989 4.028H5.011a2.01 2.01 0 10-1.128 3.675l5.357 3.631a4.031 4.031 0 004.522 0l5.356-3.63c.551-.374.882-.998.882-1.664v-.001a2.01 2.01 0 00-2.011-2.011z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 17.028H5a2 2 0 01-2-2V6.039M18 15.028h1a2 2 0 110 4h-.49.49-5.01"
        />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterReplyback;
