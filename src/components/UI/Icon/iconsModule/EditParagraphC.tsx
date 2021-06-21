import * as React from "react";
const SvgEditParagraphC = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M4 4.5h16M4 9.5h16M4 14.5h8M4 19.5h4M14 17.5l-2 2 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19.5h5.5a2.5 2.5 0 100-5H16"
      />
    </g>
  </svg>
));
export default SvgEditParagraphC;
