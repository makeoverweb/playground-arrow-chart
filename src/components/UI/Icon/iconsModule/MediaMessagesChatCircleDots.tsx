import * as React from "react";
const SvgMediaMessagesChatCircleDots = React.memo(
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
        <path d="M24 24H0V0h24v24z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.588}
          d="M19.849 16.396A8.95 8.95 0 0021 12a9 9 0 00-9-9 9 9 0 00-9 9 9 9 0 009 9 8.95 8.95 0 004.396-1.151L21 21l-1.151-4.604z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.823 12.323a.25.25 0 11.354.354.25.25 0 11-.354-.354M7.823 12.323a.25.25 0 11.354.354.25.25 0 11-.354-.354M15.823 12.323a.25.25 0 11.354.354.25.25 0 11-.354-.354"
        />
      </g>
    </svg>
  )
);
export default SvgMediaMessagesChatCircleDots;
