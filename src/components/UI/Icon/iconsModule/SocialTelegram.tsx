import * as React from "react";
const SvgSocialTelegram = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="social-telegram_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M11.795 16.906L9.73 18.915a.666.666 0 01-1.102-.284l-1.376-4.53" />
        <path d="M14.104 10.927l-3.917 3.535a.843.843 0 00.066 1.305l5.378 3.973a.904.904 0 001.422-.54l2.641-12.447a.775.775 0 00-1.037-.884L3.142 11.853a.516.516 0 00.032.975L7.251 14.1" />
      </g>
      <path d="M0 24V0h24v24z" />
    </g>
  </svg>
));
export default SvgSocialTelegram;
