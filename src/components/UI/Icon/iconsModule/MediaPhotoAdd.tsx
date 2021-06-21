import * as React from "react";
const SvgMediaPhotoAdd = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="media-photo-add_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M20 3v4M18 5h4M14 5H5a2 2 0 00-2 2v12a2 2 0 002 2h13a2 2 0 002-2v-8" />
        <path d="M6.967 14.467l1.504-2.386a1 1 0 011.574-.152l1.075 1.142 1.127-2.395a1 1 0 011.78-.058l2.154 3.898A1 1 0 0115.305 16H7.813a1 1 0 01-.846-1.533z" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgMediaPhotoAdd;
