import * as React from "react";
const SvgInternetClipAttachment = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-clip-attachment_svg__nc-icon-wrapper" fill="none">
        <path
          d="M13.879 8.375l-5.486 5.486a2.116 2.116 0 002.992 2.992l7.232-7.232a3.879 3.879 0 10-5.486-5.486l-7.232 7.232a5.642 5.642 0 000 7.98 5.642 5.642 0 007.98 0l4.389-4.389"
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetClipAttachment;
