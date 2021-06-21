import * as React from "react";
const SvgArrowsCircleUpdown = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g fill="none" className="arrows-circle-updown_svg__nc-icon-wrapper">
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636M8 9h8"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 13l-2 2 2 2M16 15H8M14 7l2 2-2 2"
        />
      </g>
    </svg>
  )
);
export default SvgArrowsCircleUpdown;
