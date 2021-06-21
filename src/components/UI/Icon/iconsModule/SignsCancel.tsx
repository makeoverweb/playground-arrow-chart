import * as React from "react";
const SvgSignsCancel = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
      className="signs-cancel_svg__nc-icon-wrapper"
      clipRule="evenodd"
    >
      <path d="M3.47 3.47a.75.75 0 011.06 0l16 16a.75.75 0 11-1.06 1.06l-16-16a.75.75 0 010-1.06z" />
      <path d="M20.53 3.47a.75.75 0 010 1.06l-16 16a.75.75 0 01-1.06-1.06l16-16a.75.75 0 011.06 0z" />
    </g>
  </svg>
));
export default SvgSignsCancel;
