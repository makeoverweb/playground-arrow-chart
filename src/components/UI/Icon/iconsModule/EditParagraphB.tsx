import * as React from "react";
const SvgEditParagraphB = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M8 9.5H5a1 1 0 01-1-1v-3a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1zM13 4.5h7M13 9.5h7M4 14.5h16M4 19.5h16"
      />
    </g>
  </svg>
));
export default SvgEditParagraphB;
