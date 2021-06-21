import * as React from "react";
const SvgFilesFolderDot = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="files-folder-dot_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M19 6.94h-6.471a1 1 0 01-.827-.438l-1.405-2.065A1 1 0 009.471 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8.94a2 2 0 00-2-2z" />
        <path d="M15.005 13.485c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M14.995 16.995c-.003 0-.005.002-.005.005s.002.005.005.005S15 17.003 15 17s-.002-.005-.005-.005M14.995 9.995c-.003 0-.005.002-.005.005s.002.005.005.005S15 10.003 15 10s-.002-.005-.005-.005" />
      </g>
      <path d="M0 0h24v24H0V0z" />
    </g>
  </svg>
));
export default SvgFilesFolderDot;
