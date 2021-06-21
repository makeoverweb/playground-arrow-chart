import * as React from "react";
const SvgFilesFolderLock = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-folder-lock_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19 6.94h-6.471a1 1 0 01-.827-.438l-1.405-2.065A1 1 0 009.471 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8.94a2 2 0 00-2-2z" />
          <path d="M13.71 13.25v-1.29c0-1.081-1.111-2.039-2.307-1.601-.688.252-1.112.952-1.112 1.684v1.208" />
          <path d="M14 16.75h-4a1 1 0 01-1-1v-1.5a1 1 0 011-1h4a1 1 0 011 1v1.5a1 1 0 01-1 1z" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgFilesFolderLock;
