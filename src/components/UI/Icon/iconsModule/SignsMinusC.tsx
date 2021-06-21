import * as React from "react";
const SvgSignsMinusC = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <path
      d="M20 12H4"
      strokeLinecap="round"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
));
export default SvgSignsMinusC;
