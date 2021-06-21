import * as React from "react";
const SvgMapDirection = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M12 13v-3M12 5V3M6.5 5h10.685a1 1 0 01.753.342l1.317 1.509a.986.986 0 010 1.298l-1.317 1.509a1 1 0 01-.753.342H6.5a1 1 0 01-1-1V6a1 1 0 011-1zM17.499 18H6.814a1 1 0 01-.753-.342l-1.317-1.509a.986.986 0 010-1.298l1.317-1.509A.999.999 0 016.814 13h10.685a1 1 0 011 1v3a1 1 0 01-1 1zM12 21v-3"
      />
    </g>
  </svg>
));
export default SvgMapDirection;
