import * as React from "react";
const SvgAccountUserSngleSelect = React.memo(
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
          d="M16.674 17l-.284-.713a2.612 2.612 0 00-2.428-1.646h-3.924a2.618 2.618 0 00-2.428 1.646L7.326 17M13.944 7.805a2.75 2.75 0 11-3.889 3.89 2.75 2.75 0 013.89-3.89M7.588 3H5a2 2 0 00-2 2v2.588M16.412 21H19a2 2 0 002-2v-2.588M3 16.412V19a2 2 0 002 2h2.588M21 7.588V5a2 2 0 00-2-2h-2.588"
        />
      </g>
    </svg>
  )
);
export default SvgAccountUserSngleSelect;
