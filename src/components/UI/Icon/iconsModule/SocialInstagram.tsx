import * as React from "react";
const SvgSocialInstagram = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="social-instagram_svg__nc-icon-wrapper" fill="none">
        <path
          d="M7.496 3h9.009A4.495 4.495 0 0121 7.496v9.009A4.495 4.495 0 0116.504 21H7.496A4.495 4.495 0 013 16.504V7.496A4.495 4.495 0 017.496 3z"
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.949 6.713a.338.338 0 10.002.674.338.338 0 00-.002-.674M14.546 9.454a3.6 3.6 0 11-5.092 5.092 3.6 3.6 0 015.092-5.092"
        />
        <path d="M0 24V0h24v24z" />
      </g>
    </svg>
  )
);
export default SvgSocialInstagram;
