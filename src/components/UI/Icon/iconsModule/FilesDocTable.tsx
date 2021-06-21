import * as React from "react";
const SvgFilesDocTable = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="files-doc-table_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M18.414 6.414l-2.828-2.828A2 2 0 0014.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.828a2 2 0 00-.586-1.414z" />
        <path d="M9 12h6a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1zM16 15H8M13 12v6M19 8h-4a1 1 0 01-1-1V3" />
      </g>
      <path d="M0 0h24v24H0V0z" />
    </g>
  </svg>
));
export default SvgFilesDocTable;
