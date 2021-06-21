import * as React from "react";
const SvgArrowsShuffle = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="arrows-shuffle_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M19 18.979l2-2-2-2M10.182 9l-1.58-2.172a2.002 2.002 0 00-1.626-.824L3 6.021M19 8l2-2-2-2" />
        <path d="M13.818 14l1.58 2.172c.378.52.983.826 1.626.824L21 16.979M21 6.021l-3.976-.017a2 2 0 00-1.626.824l-6.796 9.344c-.378.52-.983.826-1.626.824L3 16.979" />
      </g>
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
));
export default SvgArrowsShuffle;
