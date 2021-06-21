import * as React from "react";
const SvgMediaPhoneCall = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="media-phone-call_svg__nc-icon-wrapper" fill="none">
      <path
        d="M10.856 13.144a12.634 12.634 0 01-2.638-3.809.749.749 0 01.166-.827l.819-.818c.671-.671.671-1.62.085-2.206L8.114 4.31a2 2 0 00-2.828 0l-.652.652c-.741.741-1.05 1.81-.85 2.87.494 2.613 2.012 5.474 4.461 7.923 2.449 2.449 5.31 3.967 7.923 4.461 1.06.2 2.129-.109 2.87-.85l.651-.651a2 2 0 000-2.828l-1.173-1.173a1.5 1.5 0 00-2.121 0l-.903.904a.749.749 0 01-.827.166 12.66 12.66 0 01-3.809-2.64z"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgMediaPhoneCall;
