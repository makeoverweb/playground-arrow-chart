import * as React from "react";
const SvgMediaMessagesChatEmpty = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="media-messages-chat-empty_svg__nc-icon-wrapper" fill="none">
        <path
          d="M4.151 16.396A8.95 8.95 0 013 12a9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9 8.95 8.95 0 01-4.396-1.151L3 21l1.151-4.604z"
          strokeLinecap="round"
          strokeWidth={1.588}
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgMediaMessagesChatEmpty;
