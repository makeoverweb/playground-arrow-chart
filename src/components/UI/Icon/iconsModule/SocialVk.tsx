import * as React from "react";
const SvgSocialVk = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M10.684 9.644h1.215v6.076h-.002c-1.251 0-2.626-.76-3.601-2.16-1.464-2.052-1.864-3.603-1.864-3.915M16.658 15.72s-.442-.932-1.339-1.957c-.598-.701-1.44-1.08-2.206-1.08.766 0 1.608-.38 2.206-1.08.897-1.026 1.339-1.958 1.339-1.958M13.113 12.684h-1.216"
      />
    </g>
  </svg>
));
export default SvgSocialVk;
