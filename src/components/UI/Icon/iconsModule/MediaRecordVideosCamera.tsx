import * as React from "react";
const SvgMediaRecordVideosCamera = React.memo(
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
        className="media-record-videos-camera_svg__nc-icon-wrapper"
        fill="none"
      >
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M13.125 17.75H5.25A2.25 2.25 0 013 15.5v-7a2.25 2.25 0 012.25-2.25h7.875a2.25 2.25 0 012.25 2.25v7a2.25 2.25 0 01-2.25 2.25zM15.375 13.097l3.795 3.054c.736.593 1.83.069 1.83-.876v-6.55c0-.945-1.094-1.469-1.83-.876l-3.795 3.054" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgMediaRecordVideosCamera;
