import * as React from "react";
const SvgEmailsMailbox = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 18v4h4v-4M6 12h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 8h-11A3.5 3.5 0 003 11.5V17a1 1 0 001 1h16a1 1 0 001-1v-5.5A3.5 3.5 0 0017.5 8zM14 5v7M14 2h5v3h-5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.999 11.625a.376.376 0 00.001.75.375.375 0 10-.001-.75M6.5 8a3.5 3.5 0 013.5 3.5V18"
      />
    </g>
  </svg>
));
export default SvgEmailsMailbox;
