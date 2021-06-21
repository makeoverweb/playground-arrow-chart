import * as React from "react";
const SvgSignsMenuBurger = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="signs-menu-burger_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z" />
          <path d="M11.999 11.625a.375.375 0 10.377.375.377.377 0 00-.377-.375M15.999 11.625a.375.375 0 10.377.375.377.377 0 00-.377-.375M7.999 11.625a.375.375 0 10.377.375.377.377 0 00-.377-.375" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgSignsMenuBurger;
