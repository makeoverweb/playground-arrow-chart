import * as React from "react";
const SvgInternetBrowserClock = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-browser-clock_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M20.535 12.464a5 5 0 11-7.07 7.072 5 5 0 017.07-7.072M9.866 5.495c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M7.327 5.495c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M4.779 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M2 8h17" />
          <path d="M19 11.417V5a2 2 0 00-2-2H4a2 2 0 00-2 2v11a2 2 0 002 2h8.418M18.512 15.961h-2.024v-2.023" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetBrowserClock;
