import * as React from "react";
const SvgSocialLinkedin = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="social-linkedin_svg__nc-icon-wrapper" fill="none">
      <path
        d="M7.5 3h9.004A4.496 4.496 0 0121 7.496v9.009A4.496 4.496 0 0116.504 21H7.496A4.496 4.496 0 013 16.504V7.5A4.5 4.5 0 017.5 3zM8.12 11.1v5.4"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M11.719 16.5v-3.15a2.25 2.25 0 114.5 0v3.15M8.118 7.838a.225.225 0 10.226.225.225.225 0 00-.226-.225" />
      </g>
      <path d="M0 24V0h24v24z" />
    </g>
  </svg>
));
export default SvgSocialLinkedin;
