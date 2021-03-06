import * as React from "react";
const SvgSocialTwitter = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 24V0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 3h9.004A4.496 4.496 0 0121 7.496v9.009A4.496 4.496 0 0116.504 21H7.496A4.496 4.496 0 013 16.504V7.5A4.5 4.5 0 017.5 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.05 10.55c0 4.2-2.4 7.2-6.6 7.2-2.4 0-3.362-1.253-4.2-2.4m0 0c.019-.003 1.8-.6 1.8-.6-2.004-2.026-2.156-5.027-.6-7.2.738 1.373 2.116 2.639 3.6 3 .057-1.733 1.233-3 3-3 1.203 0 1.911.459 2.4 1.2h1.8l-1.2 1.8"
      />
    </g>
  </svg>
));
export default SvgSocialTwitter;
