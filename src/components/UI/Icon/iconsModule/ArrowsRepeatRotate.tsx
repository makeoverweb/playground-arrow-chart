import * as React from "react";
const SvgArrowsRepeatRotate = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="arrows-repeat-rotate_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M15 6H9a6 6 0 00-6 6c0 1.912.897 3.611 2.29 4.71M9 18h6a6 6 0 006-6 5.985 5.985 0 00-2.29-4.71" />
          <path d="M11.5 15.5L9 18l2.5 2.5M12.5 8.5L15 6l-2.5-2.5" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgArrowsRepeatRotate;
