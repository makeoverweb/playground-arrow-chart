import * as React from "react";
const SvgEmailsDog = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="emails-dog_svg__nc-icon-wrapper" fill="none">
      <path
        d="M16 12a4 4 0 11-4-4 4 4 0 014 4v1.5a2.5 2.5 0 105 0V12a9 9 0 00-9-9 9 9 0 00-9 9 9 9 0 0012.444 8.315 8.974 8.974 0 001.689-.929"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgEmailsDog;
