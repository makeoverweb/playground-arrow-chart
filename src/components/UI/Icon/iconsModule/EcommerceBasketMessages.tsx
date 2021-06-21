import * as React from "react";
const SvgEcommerceBasketMessages = React.memo(
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
        <path d="M0 24V0h24v24z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 11.251c0 2.683 1.42 5.045 3.599 6.534-.001.854.001 2.006.001 3.215l3.531-1.747a9.896 9.896 0 001.869.179c4.952 0 9-3.643 9-8.182v-.069C21 6.643 16.952 3 12 3s-9 3.643-9 8.182v.069z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.075 9.25h6.4l-.7 3.5h-5l-1-5h-1.25M14.31 15.215a.05.05 0 11-.07.07.05.05 0 01.07-.07M10.31 15.215a.05.05 0 11-.07.07.05.05 0 01.07-.07"
        />
      </g>
    </svg>
  )
);
export default SvgEcommerceBasketMessages;
