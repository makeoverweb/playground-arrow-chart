import * as React from "react";
const SvgEditResizeExpand = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="edit-resize-expand_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M3 13a1 1 0 011-1M3 16v1M4 21a1 1 0 01-1-1M7 21h1M7 12h1M12 20a1 1 0 01-1 1M12 17v-1M11 12a1 1 0 011 1" />
          <path d="M7 12V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-7M14 10l4-4" />
          <path d="M15 6h3v3" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgEditResizeExpand;
