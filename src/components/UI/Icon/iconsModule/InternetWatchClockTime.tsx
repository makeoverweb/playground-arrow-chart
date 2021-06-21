import * as React from "react";
const SvgInternetWatchClockTime = React.memo(
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
          d="M10 18h4M16.979 3H7.021a1 1 0 00-1 1v2.378a2 2 0 00.38 1.173L9.621 12l-3.22 4.449a2 2 0 00-.38 1.173V20a1 1 0 001 1h9.957a1 1 0 001-1v-2.342c0-.444-.148-.875-.42-1.226L14.121 12l3.438-4.433c.272-.351.42-.782.42-1.226V4a1 1 0 00-1-1z"
        />
      </g>
    </svg>
  )
);
export default SvgInternetWatchClockTime;
