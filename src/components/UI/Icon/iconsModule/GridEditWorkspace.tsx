import * as React from "react";
const SvgGridEditWorkspace = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="grid-edit-workspace_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M20 21H4a1 1 0 01-1-1v-4a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1zM20 11h-6a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1zM9 3H3M9 7H3M9 11H3" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgGridEditWorkspace;
