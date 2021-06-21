import * as React from "react";
const SvgInternetSettingsFilter = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-settings-filter_svg__nc-icon-wrapper" fill="none">
        <path
          d="M14 14h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1zM21 17h-4"
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M13 17H3M10 10H8a1 1 0 01-1-1V5a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1zM3 7h4M11 7h10" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetSettingsFilter;
