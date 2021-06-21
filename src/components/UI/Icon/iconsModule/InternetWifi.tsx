import * as React from "react";
const SvgInternetWifi = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M21 8.072c-5.249-4.097-12.751-4.097-18 0M6.751 13.314c3.062-2.388 7.437-2.388 10.499 0M11.999 18.25a.372.372 0 00-.373.375.374.374 0 10.749 0 .375.375 0 00-.376-.375"
      />
    </g>
  </svg>
));
export default SvgInternetWifi;
