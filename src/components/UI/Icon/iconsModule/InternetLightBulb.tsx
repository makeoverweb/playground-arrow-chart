import * as React from "react";
const SvgInternetLightBulb = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-light-bulb_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M15 15.19H9M8.541 14.896a5.99 5.99 0 01-2.466-5.858c.406-2.607 2.579-4.688 5.2-4.995A6.001 6.001 0 0118 10a5.986 5.986 0 01-2.543 4.898 1.03 1.03 0 00-.457.835V18.5a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 019 18.5v-2.763c0-.341-.182-.645-.459-.841zM20 5l1.19-1.19M4 15l-1.19 1.19M5 4L3.81 2.81M20 15l1.19 1.19M21 10h1.69M1.31 10H3M9 18h5.87" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgInternetLightBulb;
