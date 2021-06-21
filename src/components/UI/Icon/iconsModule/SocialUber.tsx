import * as React from "react";
const SvgSocialUber = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="social-uber_svg__nc-icon-wrapper" fill="none">
      <path
        d="M9.25 9.25h5.5v5.5h-5.5zM9.25 12H3"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 3h9.004A4.496 4.496 0 0121 7.496v9.009A4.496 4.496 0 0116.504 21H7.496A4.496 4.496 0 013 16.504V7.5A4.5 4.5 0 017.5 3z"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgSocialUber;
