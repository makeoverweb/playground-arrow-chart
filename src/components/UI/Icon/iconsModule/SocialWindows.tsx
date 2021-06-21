import * as React from "react";
const SvgSocialWindows = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="social-windows_svg__nc-icon-wrapper" fill="none">
      <path
        d="M18.671 20.472l-14-2.333A2 2 0 013 16.166V7.834a2 2 0 011.671-1.973l14-2.333A2 2 0 0121 5.5v13a2 2 0 01-2.329 1.972zM10.5 4.89v14.22M3 11.86h18"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M0 24V0h24v24z" />
    </g>
  </svg>
));
export default SvgSocialWindows;
