import * as React from "react";
const SvgSignsMinus = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M16 12H8M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z"
      />
    </g>
  </svg>
));
export default SvgSignsMinus;
