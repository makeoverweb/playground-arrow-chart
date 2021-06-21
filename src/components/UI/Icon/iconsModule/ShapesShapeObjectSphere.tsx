import * as React from "react";
const SvgShapesShapeObjectSphere = React.memo(
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
          d="M19.071 9.172c3.905 1.562 3.905 4.094 0 5.656-3.905 1.563-10.237 1.563-14.142 0-3.905-1.562-3.905-4.094 0-5.656 3.905-1.563 10.237-1.563 14.142 0"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0"
        />
      </g>
    </svg>
  )
);
export default SvgShapesShapeObjectSphere;
