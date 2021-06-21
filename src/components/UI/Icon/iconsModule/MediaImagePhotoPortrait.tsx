import * as React from "react";
const SvgMediaImagePhotoPortrait = React.memo(
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
        className="media-image-photo-portrait_svg__nc-icon-wrapper"
        fill="none"
      >
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
          <path d="M14.121 7.879A3 3 0 119.88 12.12a3 3 0 014.24-4.24M6 21l.357-1.784A4 4 0 0110.279 16h3.442a4 4 0 013.922 3.216L18 21" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgMediaImagePhotoPortrait;
