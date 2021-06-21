import * as React from "react";
const SvgShapesShapeObjectW = React.memo(
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
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.364 3.872c3.515 1.393 3.515 3.651 0 5.044-3.515 1.393-9.213 1.393-12.728 0-3.515-1.393-3.515-3.651 0-5.044 3.515-1.393 9.213-1.393 12.728 0M18.364 15.084c3.515 1.393 3.515 3.651 0 5.044-3.515 1.393-9.213 1.393-12.728 0-3.515-1.393-3.515-3.651 0-5.044 3.515-1.393 9.213-1.393 12.728 0M21 6.39v11.22M3 6.39v11.22"
        />
      </g>
    </svg>
  )
);
export default SvgShapesShapeObjectW;
