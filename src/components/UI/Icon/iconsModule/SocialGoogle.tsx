import * as React from "react";
const SvgSocialGoogle = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="social-google_svg__nc-icon-wrapper">
      <defs>
        <path d="M0 0h24v24H0V0z" id="social-google_svg__a" />
      </defs>
      <g fill="none">
        <use xlinkHref="#social-google_svg__a" />
        <use xlinkHref="#social-google_svg__a" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.2 8.16A5 5 0 1017 12h-4.375"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 3h9.004A4.496 4.496 0 0121 7.496v9.009A4.496 4.496 0 0116.504 21H7.496A4.496 4.496 0 013 16.504V7.5A4.5 4.5 0 017.5 3z"
        />
      </g>
    </g>
  </svg>
));
export default SvgSocialGoogle;
