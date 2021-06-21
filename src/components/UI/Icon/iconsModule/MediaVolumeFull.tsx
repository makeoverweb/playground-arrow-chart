import * as React from "react";
const SvgMediaVolumeFull = React.memo(
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
          d="M5.875 8.625H3.5a1 1 0 00-1 1v4.75a1 1 0 001 1h2.375l3.979 3.371a1 1 0 001.646-.763V6.017c0-.852-.997-1.314-1.646-.763L5.875 8.625zM15.537 15.978c1.162-.722 1.963-2.224 1.963-3.973 0-1.749-.801-3.252-1.963-3.983M18.505 19.065c1.808-1.555 2.995-4.135 2.995-7.062 0-2.931-1.189-5.513-3-7.067"
        />
      </g>
    </svg>
  )
);
export default SvgMediaVolumeFull;
