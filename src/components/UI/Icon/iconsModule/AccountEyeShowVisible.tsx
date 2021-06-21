import * as React from "react";
const SvgAccountEyeShowVisible = React.memo(
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
          d="M3.118 12.467a.987.987 0 010-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 010 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.429}
          d="M14.121 9.879A3 3 0 119.88 14.12a3 3 0 014.24-4.24"
        />
      </g>
    </svg>
  )
);
export default SvgAccountEyeShowVisible;
