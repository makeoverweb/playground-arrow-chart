import * as React from "react";
const SvgBusinessDeliveryShipmentBox = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g
        className="business-delivery-shipment-box_svg__nc-icon-wrapper"
        fill="none"
      >
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M21 8.089V19a2 2 0 01-2 2H5a2 2 0 01-2-2V8.089c0-.27.055-.538.161-.786l1.32-3.089A2 2 0 016.32 3h11.36a2 2 0 011.839 1.214l1.32 3.089c.106.249.161.516.161.786zM3 8h17.99" />
          <path d="M14 3l1 5v3.225c0 .428-.385.775-.86.775H9.86c-.475 0-.86-.347-.86-.775V8l1-5M6 18h2" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgBusinessDeliveryShipmentBox;
