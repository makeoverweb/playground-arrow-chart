import * as React from "react";
const SvgListsTasklistText = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="lists-tasklist-text_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M20.625 5.149c0-.98-.794-1.774-1.774-1.774H5.149c-.98 0-1.774.794-1.774 1.774v13.702c0 .98.794 1.774 1.774 1.774h13.702c.98 0 1.774-.794 1.774-1.774V5.149zM16.89 12h-5.26" />
          <path d="M7.677 11.823a.25.25 0 11-.354.354.25.25 0 01.354-.354M16.89 7.5h-5.26M7.677 7.326a.25.25 0 11-.354.354.25.25 0 01.354-.354M16.98 16.5h-5.26M7.765 16.327a.25.25 0 11-.354.354.25.25 0 01.354-.354" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgListsTasklistText;
