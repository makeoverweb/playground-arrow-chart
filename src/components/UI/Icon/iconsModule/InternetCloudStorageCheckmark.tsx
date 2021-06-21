import * as React from "react";
const SvgInternetCloudStorageCheckmark = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g
        className="internet-cloud-storage-checkmark_svg__nc-icon-wrapper"
        fill="none"
      >
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M6.324 9.068C3.885 9.401 2 11.47 2 14a5 5 0 005 5h11a4 4 0 000-8A5.997 5.997 0 106.324 9.068z" />
          <path d="M14.667 11.667L11.333 15l-2-2" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetCloudStorageCheckmark;
