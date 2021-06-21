import * as React from "react";
const SvgArrowsRotateRefresh = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="arrows-rotate-refresh_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M11.46 4.271a8.142 8.142 0 00-2.88.661c-3.517 1.526-5.414 5.22-4.824 8.839M19.125 16.216c.444-.859.75-1.806.867-2.824.438-3.809-1.814-7.298-5.243-8.597" />
          <path d="M8.885 2.844l2.841.967-1.382 2.396M21.65 14.702l-2.258 1.977-1.384-2.395M4.998 19.827l-.583-2.944 2.766-.001" />
          <path d="M4.947 16.884a8.146 8.146 0 002.012 2.163c3.08 2.283 7.228 2.079 10.067-.242" />
        </g>
        <path d="M24 24H0V0h24z" />
      </g>
    </svg>
  )
);
export default SvgArrowsRotateRefresh;
