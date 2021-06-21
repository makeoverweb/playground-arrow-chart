import * as React from "react";
const SvgShapesBasicShapesStarA = React.memo(
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
          d="M12 17.235L6.179 20l1.209-6.12L3 9.392l6.179-.771L12 3l2.821 5.621L21 9.392l-4.388 4.488L17.821 20z"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesStarA;
