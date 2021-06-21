import * as React from "react";
const SvgListsPlaylist = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M13 4.5h7M13 9.5h7M4 14.5h16M4 19.5h16M4.765 4.074l4.01 2.501a.5.5 0 010 .848l-4.01 2.501A.5.5 0 014 9.501V4.499a.5.5 0 01.765-.425z"
      />
    </g>
  </svg>
));
export default SvgListsPlaylist;
