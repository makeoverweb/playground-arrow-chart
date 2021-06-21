import * as React from "react";
const SvgInternetBrowserCheck = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-browser-check_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19.5 21h-15a2 2 0 01-2-2V5a2 2 0 012-2h15a2 2 0 012 2v14a2 2 0 01-2 2z" />
          <path d="M14.5 13l-3 3-2-2M2.5 8h19M5.505 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M8.048 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M10.588 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.003-.005-.005-.005" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgInternetBrowserCheck;
