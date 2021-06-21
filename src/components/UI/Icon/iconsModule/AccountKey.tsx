import * as React from "react";
const SvgAccountKey = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="account-key_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M14.4 8.9c-.2 0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4-.2-.4-.4-.4" />
        <path d="M9.5 11.3l-.9-2c-.3-.8-.1-1.7.5-2.3L12 4.1c.6-.6 1.4-.7 2.2-.4l3.5 1.5c.5.2.9.6 1.1 1.1l1.5 3.5c.3.8.1 1.6-.4 2.2L17 14.9c-.6.6-1.4.7-2.2.4l-2.1-.9-6 6H3.5v-3.2l6-5.9z" />
      </g>
      <path d="M0 0h24v24H0V0z" />
    </g>
  </svg>
));
export default SvgAccountKey;
