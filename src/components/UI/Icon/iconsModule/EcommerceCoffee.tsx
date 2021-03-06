import * as React from "react";
const SvgEcommerceCoffee = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="ecommerce-coffee_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M18 6l-.443-1.549A2 2 0 0015.634 3H8.366a2 2 0 00-1.923 1.451L6 6M18.417 9l-1.208 10.234A2.001 2.001 0 0115.222 21H8.778a2 2 0 01-1.986-1.766L5.583 9" />
          <path d="M13.414 13.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828" />
        </g>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5.334 6h13.332a1 1 0 01.949.684l.333 1A1 1 0 0118.999 9H5.001a1 1 0 01-.949-1.316l.333-1c.137-.409.519-.684.949-.684z"
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgEcommerceCoffee;
