import * as React from "react";
const SvgInternetServer = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M18 14H6a3 3 0 100 6h12a3 3 0 100-6zM18 17h-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.035 16.965a.05.05 0 11-.07.07.05.05 0 01.07-.07M20.99 16.757l-.847-10.912A2 2 0 0018.149 4H5.851a2 2 0 00-1.994 1.845L3.01 16.757"
      />
    </g>
  </svg>
));
export default SvgInternetServer;
