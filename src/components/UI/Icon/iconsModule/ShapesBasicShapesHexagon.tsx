import * as React from "react";
const SvgShapesBasicShapesHexagon = React.memo(
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
        fill="none"
        className="shapes-basic-shapes-hexagon_svg__nc-icon-wrapper"
      >
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8l8-5 8 5v8l-8 5-8-5V8l8 4.375V21v-8.625L20 8"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesHexagon;
