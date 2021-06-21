import * as React from "react";
const SvgSignsTree = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="signs-tree_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M16 5h-4M20 7h-3a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1zM16 12h-4M20 14h-3a1 1 0 01-1-1v-2a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1zM8 5h4M4 2h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zM20 21h-3a1 1 0 01-1-1v-2a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1z" />
        <path d="M16 19h-3a1 1 0 01-1-1V5" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgSignsTree;
