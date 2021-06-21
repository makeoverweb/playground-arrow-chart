import * as React from "react";
const SvgShapesBasicShapesHeart = React.memo(
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
          d="M15.696 4C18.871 4 21 6.98 21 9.755 21 15.388 12.161 20 12 20c-.161 0-9-4.612-9-10.245C3 6.98 5.129 4 8.304 4c1.815 0 3.007.905 3.696 1.711C12.689 4.905 13.881 4 15.696 4z"
        />
      </g>
    </svg>
  )
);
export default SvgShapesBasicShapesHeart;
