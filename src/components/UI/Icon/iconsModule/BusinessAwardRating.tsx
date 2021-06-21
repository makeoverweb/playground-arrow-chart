import * as React from "react";
const SvgBusinessAwardRating = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="business-award-rating_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M16.243 4.757a6 6 0 11-8.486 8.486 6 6 0 018.486-8.486" />
          <path d="M8 13.463V21l4-2 4 2v-7.537" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgBusinessAwardRating;
