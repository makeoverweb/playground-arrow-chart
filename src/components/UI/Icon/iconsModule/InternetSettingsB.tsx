import * as React from "react";
const SvgInternetSettingsB = React.memo(
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
        <path d="M0 0h24v24H0V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.5 13.7l-6.8 6.8c-.9.9-2.3.9-3.2 0-.9-.9-.9-2.3 0-3.2l6.8-6.8c-.8-2-.3-4.3 1.3-5.9 1.7-1.7 4.2-2 6.2-1.2.1 0 .1.1 0 .2l-3.6 3.6 1.3 1.3 1.3 1.3 3.7-3.6h.2c1 2 .5 4.5-1.2 6.2-1.7 1.6-4 2-6 1.3z"
        />
      </g>
    </svg>
  )
);
export default SvgInternetSettingsB;
