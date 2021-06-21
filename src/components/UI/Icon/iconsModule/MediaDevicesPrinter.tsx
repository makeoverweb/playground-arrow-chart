import * as React from "react";
const SvgMediaDevicesPrinter = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="media-devices-printer_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M16.814 8V4a1 1 0 00-1-1H8.186a1 1 0 00-1 1v4M17 11h1" />
          <path d="M7 17H4a1 1 0 01-1-1V9a1 1 0 011-1h16a1 1 0 011 1v7a1 1 0 01-1 1h-3" />
          <path d="M16 21H8a1 1 0 01-1-1v-6h10v6a1 1 0 01-1 1z" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgMediaDevicesPrinter;
