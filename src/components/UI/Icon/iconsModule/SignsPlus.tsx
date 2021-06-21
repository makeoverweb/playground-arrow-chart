import * as React from "react";
const SvgSignsPlus = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g
      fill="none"
      className="signs-plus_svg__nc-icon-wrapper"
      clipRule="evenodd"
    >
      <path d="M12 3.25a.75.75 0 01.75.75v16a.75.75 0 01-1.5 0V4a.75.75 0 01.75-.75z" />
      <path d="M3.25 12a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75z" />
    </g>
  </svg>
));
export default SvgSignsPlus;
