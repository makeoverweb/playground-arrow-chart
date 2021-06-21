import * as React from "react";
const SvgEcommerceQrCode = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="ecommerce-qr-code_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.502}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M14 15.98v1.01M10 15.98v1.01" />
          <path
            strokeWidth={1.5}
            d="M20 12H4a1 1 0 01-1-1V9a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1zM14.04 3.03L17 7.97M9.96 3.03L7 7.97M19.758 12l-1.687 7.789a1.5 1.5 0 01-1.466 1.182h-9.21a1.5 1.5 0 01-1.466-1.182L4.242 12"
          />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgEcommerceQrCode;
