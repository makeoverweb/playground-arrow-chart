import * as React from "react";
const SvgMapCompass = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.679 9.703L16 8l-1.679 6.297L8 16z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636M14.32 14.3L9.68 9.7"
      />
    </g>
  </svg>
));
export default SvgMapCompass;
