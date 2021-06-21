import * as React from "react";
const SvgFilesClipboard = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 4l1.3-1.625A1 1 0 0110.081 2h3.839a1 1 0 01.781.375L16 4v1a1 1 0 01-1 1H9a1 1 0 01-1-1V4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 4H6a2 2 0 00-2 2v13a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2M8 11h8M8 16h8"
      />
    </g>
  </svg>
));
export default SvgFilesClipboard;
