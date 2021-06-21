import * as React from "react";
const SvgFilesDocImagePicture = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-doc-image-picture_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M18.414 6.414l-2.828-2.828A2 2 0 0014.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.828a2 2 0 00-.586-1.414z" />
          <path d="M19 8h-4a1 1 0 01-1-1V3M16 15.524l-2.543-2.069-2.133 2.228-1.174-.788L8 16.713" />
          <path d="M15 18H9a1 1 0 01-1-1v-5a1 1 0 011-1h6a1 1 0 011 1v5a1 1 0 01-1 1z" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgFilesDocImagePicture;
