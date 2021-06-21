import * as React from "react";
const SvgBusinessDeliveryCheckList = React.memo(
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
        className="business-delivery-check-list_svg__nc-icon-wrapper"
        fill="none"
      >
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M8 4l1.3-1.625A1 1 0 0110.081 2h3.839a1 1 0 01.781.375L16 4v1a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM9.667 9.333L8 11l-1-1M13 18h3M13 10h3M9.667 13.333L8 15l-1-1M13 14h3" />
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgBusinessDeliveryCheckList;
