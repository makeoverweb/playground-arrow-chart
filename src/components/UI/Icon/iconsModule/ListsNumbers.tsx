import * as React from "react";
const SvgListsNumbers = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="lists-numbers_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M11 4h9M11.15 9H20M6.5 9H4h1.25V4L4 5.25M11 15h9M11.15 20H20M4 15h2.5v2L4 18.5V20h2.75" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgListsNumbers;
