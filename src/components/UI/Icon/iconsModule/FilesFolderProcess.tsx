import * as React from "react";
const SvgFilesFolderProcess = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-folder-process_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19 6.94h-6.471a1 1 0 01-.827-.438l-1.405-2.065A1 1 0 009.471 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8.94a2 2 0 00-2-2z" />
          <path d="M15.025 13a3.051 3.051 0 01-.848 2.677 3.08 3.08 0 01-3.378.657M13.201 10.666a3.078 3.078 0 00-3.378.657A3.051 3.051 0 008.975 14" />
          <path d="M12.673 9.819l.688.688-.688.687M11.327 15.806l-.688.687.688.688" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgFilesFolderProcess;
