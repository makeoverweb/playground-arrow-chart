import * as React from "react";
const SvgInternetDropdownMenu = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-dropdown-menu_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M6 13h6M6 17h6M18.999 5.775a.225.225 0 10.226.225.226.226 0 00-.226-.225M2 19a2 2 0 002 2h10a2 2 0 002-2V3H4a2 2 0 00-2 2v14z" />
          <path d="M16 3h4a2 2 0 012 2v2a2 2 0 01-2 2H2" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgInternetDropdownMenu;
