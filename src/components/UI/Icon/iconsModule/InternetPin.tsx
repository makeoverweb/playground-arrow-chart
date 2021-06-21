import * as React from "react";
const SvgInternetPin = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="internet-pin_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M3.5 20l4.37-4.37M4.956 11.294a.999.999 0 000 1.414l2.918 2.918 2.918 2.918a.999.999 0 001.414 0l1.175-1.175a1 1 0 00.293-.707v-3.936l2.9-2.9 2.309.123c.283.015.56-.091.76-.291l.574-.574a.999.999 0 000-1.414l-4.386-4.386a.999.999 0 00-1.414 0l-.574.574a.995.995 0 00-.291.76l.123 2.309-2.9 2.9H6.838a.997.997 0 00-.707.293l-1.175 1.174zM16.57 9.83l-2.9-2.9" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgInternetPin;
