import * as React from "react";
const SvgMediaDevicesMouse = React.memo(
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
          d="M12 21c-3.3 0-6-2.7-6-6V9c0-3.3 2.7-6 6-6s6 2.7 6 6v6c0 3.3-2.7 6-6 6zM12 8v3"
        />
      </g>
    </svg>
  )
);
export default SvgMediaDevicesMouse;
