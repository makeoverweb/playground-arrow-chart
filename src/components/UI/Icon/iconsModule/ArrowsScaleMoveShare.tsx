import * as React from "react";
const SvgArrowsScaleMoveShare = React.memo(
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
          d="M9 15l7-7M16 8v4-4h-4"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20.001H5a2 2 0 01-2-2v-12a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
        />
      </g>
    </svg>
  )
);
export default SvgArrowsScaleMoveShare;
