import * as React from "react";
const SvgAccountUserProfileLock = React.memo(
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
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 5.2c1.7 1.7 1.7 4.4 0 6-1.7 1.6-4.4 1.7-6 0-1.6-1.7-1.7-4.4 0-6 1.7-1.6 4.3-1.6 6 0M4 20c0-2.5 2-4.5 4.5-4.5h2.6M19 17.6v-1.1c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v1.1M19 17.6h-3c-.6 0-1 .4-1 1V20c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-1.4c0-.6-.4-1-1-1z"
        />
      </g>
    </svg>
  )
);
export default SvgAccountUserProfileLock;
