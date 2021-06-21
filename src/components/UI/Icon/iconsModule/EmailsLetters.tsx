import * as React from "react";
const SvgEmailsLetters = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 .028h24v24H0v-24z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6.028h12M19.211 9.028H4.789a1.79 1.79 0 10-1.004 3.27l5.957 4.037a4.027 4.027 0 004.517 0l5.955-4.036c.492-.333.786-.888.786-1.481v-.001c0-.988-.801-1.789-1.789-1.789zM8.47 15.56l-4.88 4.88M15.53 15.56l4.88 4.88"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10.833v8.195a2 2 0 002 2h14a2 2 0 002-2v-8.195M8 3.028h8"
      />
    </g>
  </svg>
));
export default SvgEmailsLetters;
