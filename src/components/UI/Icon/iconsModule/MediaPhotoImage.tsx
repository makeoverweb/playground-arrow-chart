import * as React from "react";
const SvgMediaPhotoImage = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 17.486l4.612-4.612a.999.999 0 011.414 0l1.406 1.406 4.577-4.576a.999.999 0 011.414 0L21 14.281M8.515 7.407a.375.375 0 11-.53.53.375.375 0 01.53-.53"
        />
      </g>
    </svg>
  )
);
export default SvgMediaPhotoImage;
