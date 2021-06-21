import * as React from "react";
const SvgArrowsRight = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none" className="arrows-right_svg__nc-icon-wrapper">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 16l4-4-4-4"
      />
    </g>
  </svg>
));
export default SvgArrowsRight;
