import * as React from "react";
const SvgFilesDocLock = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="files-doc-lock_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M18.414 6.414l-2.828-2.828A2 2 0 0014.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.828a2 2 0 00-.586-1.414z" />
        <path d="M19 8h-4a1 1 0 01-1-1V3M13.71 14v-1.29c0-.897-.765-1.71-1.71-1.71a1.71 1.71 0 00-1.71 1.71V14M14.018 18H9.982A.982.982 0 019 17.018v-2.036c0-.542.44-.982.982-.982h4.036c.542 0 .982.44.982.982v2.036c0 .542-.44.982-.982.982z" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgFilesDocLock;
