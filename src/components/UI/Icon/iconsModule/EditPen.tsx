import * as React from "react";
const SvgEditPen = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M17.54 10.12l-3.66-3.66M6.251 21H3v-3.251c0-.265.105-.52.293-.707L16.627 3.707a.999.999 0 011.414 0l2.251 2.251a.999.999 0 010 1.414L6.958 20.707a.997.997 0 01-.707.293z"
      />
    </g>
  </svg>
));
export default SvgEditPen;
