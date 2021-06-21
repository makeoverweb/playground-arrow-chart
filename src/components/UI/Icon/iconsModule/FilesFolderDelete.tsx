import * as React from "react";
const SvgFilesFolderDelete = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-folder-delete_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19 9h-6.465a1 1 0 01-.832-.445l-1.406-2.109A1 1 0 009.465 6H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2z" />
          <path d="M5 6V5a2 2 0 012-2h10a2 2 0 012 2v4M13.25 14.125l-2.5 2.5M13.25 16.625l-2.5-2.5" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgFilesFolderDelete;
