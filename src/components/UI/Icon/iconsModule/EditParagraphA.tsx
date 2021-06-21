import * as React from "react";
const SvgEditParagraphA = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M13 4.5h7M13 9.5h7M4 14.5h16M4 19.5h16M9 9.5l-2.5-5-2.5 5M4.5 8.5h4"
      />
    </g>
  </svg>
));
export default SvgEditParagraphA;
