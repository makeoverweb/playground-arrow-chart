import * as React from "react";
const SvgMediaMessagesChatDots = React.memo(
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
          d="M12.177 10.323a.25.25 0 11-.354.354.25.25 0 01.354-.354M16.177 10.323a.25.25 0 11-.354.354.25.25 0 01.354-.354M8.177 10.323a.25.25 0 11-.354.354.25.25 0 01.354-.354"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21l-4-3.999V17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-3l-4 3.999"
        />
      </g>
    </svg>
  )
);
export default SvgMediaMessagesChatDots;
