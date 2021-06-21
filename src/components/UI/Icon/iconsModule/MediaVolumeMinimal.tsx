import * as React from "react";
const SvgMediaVolumeMinimal = React.memo(
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
          d="M15 10v4M5.875 8.625H3.5a1 1 0 00-1 1v4.75a1 1 0 001 1h2.375l3.979 3.371a1 1 0 001.646-.763V6.017c0-.852-.997-1.314-1.646-.763L5.875 8.625z"
        />
      </g>
    </svg>
  )
);
export default SvgMediaVolumeMinimal;
