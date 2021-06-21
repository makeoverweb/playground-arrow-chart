import * as React from "react";
const SvgEcommerceSaleDiscount = React.memo(
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
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 18.5l5-5M14.56 11.94a1.5 1.5 0 11-2.12 2.12 1.5 1.5 0 012.12-2.12M20.56 17.94a1.5 1.5 0 11-2.12 2.12 1.5 1.5 0 012.12-2.12M7 7.5h10M7 11.5h2"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17.5H7a4 4 0 01-4-4v-6a4 4 0 014-4h10a4 4 0 014 4v3"
        />
      </g>
    </svg>
  )
);
export default SvgEcommerceSaleDiscount;
