import * as React from "react";
const SvgEditPenLine = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="edit-pen-line_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M17.652 4.751l-1.403-1.403a.999.999 0 00-1.414 0L4 14.182V17h2.818L17.652 6.166a1 1 0 000-1.415zM3 21h18M15.87 7.95l-2.82-2.82" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgEditPenLine;
