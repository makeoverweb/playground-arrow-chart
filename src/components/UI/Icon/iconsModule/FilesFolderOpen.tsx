import * as React from "react";
const SvgFilesFolderOpen = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 10V9a2 2 0 00-2-2h-4.465a1 1 0 01-.832-.445l-1.406-2.109A1 1 0 009.465 4H5a2 2 0 00-2 2v12.853a1.146 1.146 0 102.245.33l2.327-7.757A2 2 0 019.488 10h9.841a2 2 0 011.919 2.563l-1.761 6A2 2 0 0117.568 20H4.147"
        />
      </g>
    </svg>
  )
);
export default SvgFilesFolderOpen;
