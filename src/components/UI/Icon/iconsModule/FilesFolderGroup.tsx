import * as React from "react";
const SvgFilesFolderGroup = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-folder-group_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19 6.94h-6.471a1 1 0 01-.827-.438l-1.405-2.065A1 1 0 009.471 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8.94a2 2 0 00-2-2z" />
          <path d="M10.833 10.583v1.168c0 .322.261.583.583.583h1.168a.583.583 0 00.583-.583v-1.168a.583.583 0 00-.583-.583h-1.168a.583.583 0 00-.583.583zM8.005 15.249v1.168c0 .322.261.583.583.583h1.168a.583.583 0 00.583-.583v-1.168a.583.583 0 00-.583-.583H8.588a.584.584 0 00-.583.583zM13.661 15.249v1.168c0 .322.261.583.583.583h1.168a.583.583 0 00.583-.583v-1.168a.583.583 0 00-.583-.583h-1.168a.584.584 0 00-.583.583zM13.66 15.55h-3.32M9.79 14.67l1.57-2.35M12.73 12.3l1.5 2.37" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgFilesFolderGroup;
