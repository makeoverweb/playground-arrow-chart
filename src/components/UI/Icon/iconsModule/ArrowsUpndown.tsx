import * as React from "react";
const SvgArrowsUpndown = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="arrows-upndown_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M12 4v16M7.999 8L12 4l4.001 4M16.001 15.998L12 19.999l-4.001-4.001" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgArrowsUpndown;
