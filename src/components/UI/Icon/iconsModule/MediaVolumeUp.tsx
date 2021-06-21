import * as React from "react";
const SvgMediaVolumeUp = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M5.875 8.625l3.979-3.371a1 1 0 011.646.763v11.965c0 .852-.997 1.314-1.646.763l-3.979-3.371"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.875 15.375H3.5a1 1 0 01-1-1v-4.75a1 1 0 011-1h2.375M18.33 8.94v6M21.33 11.94h-6"
      />
    </g>
  </svg>
));
export default SvgMediaVolumeUp;
