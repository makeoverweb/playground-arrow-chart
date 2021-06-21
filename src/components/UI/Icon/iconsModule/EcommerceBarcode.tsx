import * as React from "react";
const SvgEcommerceBarcode = React.memo(
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
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.5 9.478V6a2 2 0 00-2-2h-3.478M8.978 4H5.5a2 2 0 00-2 2v3.478M3.5 14.522V18a2 2 0 002 2h3.478M15.022 20H18.5a2 2 0 002-2v-3.478M10.535 15.965a.05.05 0 11-.07.07.05.05 0 01.07-.07M13.535 15.965a.05.05 0 11-.07.07.05.05 0 01.07-.07M16.5 8v8M7.5 8v8M13.5 8v5M10.5 8v5"
        />
      </g>
    </svg>
  )
);
export default SvgEcommerceBarcode;
