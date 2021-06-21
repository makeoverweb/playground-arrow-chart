import * as React from "react";
const SvgAccountLoadingWaiting = React.memo(
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
          d="M12 17.62V21M8.02 15.98l-2.38 2.38M6.38 12H3M5.64 5.64l2.38 2.38M12 6V3M16.77 7.23l1.59-1.59M21 12h-1.5M18.36 18.36l-.53-.53"
        />
      </g>
    </svg>
  )
);
export default SvgAccountLoadingWaiting;
