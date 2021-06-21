import * as React from "react";
const SvgArrowsRotate = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M24 24H0V0h24z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.332 6.793A8.98 8.98 0 0012 3a9 9 0 00-9 9c0 .539.056 1.064.147 1.576M4.424 19.594v-2.387h2.389"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.668 17.207A8.98 8.98 0 0012 21a9 9 0 009-9c0-.539-.056-1.064-.147-1.576M19.576 4.406v2.387h-2.389"
      />
    </g>
  </svg>
));
export default SvgArrowsRotate;
