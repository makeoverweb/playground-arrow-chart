import * as React from "react";
const SvgBusinessHotel = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="business-hotel_svg__nc-icon-wrapper" fill="none">
      <path
        d="M8.88 12.825l4.848-3.03A2.708 2.708 0 0015 7.5a2.5 2.5 0 10-5 0 1.5 1.5 0 01-3 0 5.5 5.5 0 1111 0V20a2 2 0 01-2 2H9a2 2 0 01-2-2v-3.783a4 4 0 011.88-3.392z"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgBusinessHotel;
