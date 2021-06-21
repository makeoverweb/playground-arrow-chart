import * as React from "react";
const SvgEcommerceTeaBag = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="ecommerce-tea-bag_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M15 16H7a3 3 0 01-3-3V7a2 2 0 012-2h10a2 2 0 012 2v6a3 3 0 01-3 3zM18 13h2a2 2 0 002-2V9a1 1 0 00-1-1h-3M5 20h12" />
          <path d="M11 12H8V9a1 1 0 011-1h1a1 1 0 011 1v3zM9.5 8V5" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgEcommerceTeaBag;
