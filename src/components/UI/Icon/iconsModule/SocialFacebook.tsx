import * as React from "react";
const SvgSocialFacebook = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="social-facebook_svg__nc-icon-wrapper" fill="none">
      <path
        d="M7.5 3h9.004A4.496 4.496 0 0121 7.496v9.009A4.496 4.496 0 0116.504 21H7.496A4.496 4.496 0 013 16.504V7.5A4.5 4.5 0 017.5 3zM11.1 12.9h5.4"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8.4h-.945a2.655 2.655 0 00-2.655 2.655V21"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M0 24V0h24v24z" />
    </g>
  </svg>
));
export default SvgSocialFacebook;
