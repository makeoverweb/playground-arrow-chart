import * as React from "react";
const SvgMapPaper = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="map-paper_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M8.368 4.211l-4 1.333A2 2 0 003 7.442v10.94a1 1 0 001.447.894l3.658-1.829a1.997 1.997 0 011.789 0l4.211 2.106a1.997 1.997 0 001.789 0l4-2A2 2 0 0021 15.764V5.387a1 1 0 00-1.316-.949l-4.051 1.35a1.998 1.998 0 01-1.265 0L9.632 4.211a1.995 1.995 0 00-1.264 0zM15 9.53v5.94M9 7.53v5.94" />
      </g>
      <path d="M24 24H0V0h24z" />
    </g>
  </svg>
));
export default SvgMapPaper;
