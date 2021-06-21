import * as React from "react";
const SvgShapesBasicShapesCircleB = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
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
          d="M14 14H3V3h11v11z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.013 8.165a6.515 6.515 0 017.822 7.822c-.53 2.39-2.458 4.318-4.848 4.848a6.515 6.515 0 01-7.822-7.822c.53-2.39 2.458-4.318 4.848-4.848z"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesCircleB;
