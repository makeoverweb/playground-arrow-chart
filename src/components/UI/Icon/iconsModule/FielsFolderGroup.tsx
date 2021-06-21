import * as React from "react";
const SvgFielsFolderGroup = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="fiels-folder-group_svg__nc-icon-wrapper" fill="none">
        <g strokeLinecap="round" stroke="currentColor" strokeLinejoin="round">
          <path d="M19 6.94h-6.471a1 1 0 01-.827-.438l-1.405-2.065A1 1 0 009.471 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8.94a2 2 0 00-2-2z" />
          <path d="M12 10v3.4l-2.475 2.575" />
          <path d="M14.475 11.025a3.5 3.5 0 11-4.95 4.95 3.5 3.5 0 014.95-4.95" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgFielsFolderGroup;
