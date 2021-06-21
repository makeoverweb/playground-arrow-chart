import * as React from "react";
const SvgFilesFolderBlank = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-folder-blank_svg__nc-icon-wrapper" fill="none">
        <path
          d="M19 6.94h-6.471a1 1 0 01-.827-.438l-1.405-2.065A1 1 0 009.471 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8.94a2 2 0 00-2-2z"
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgFilesFolderBlank;
