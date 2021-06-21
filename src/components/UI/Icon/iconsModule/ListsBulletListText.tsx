import * as React from "react";
const SvgListsBulletListText = React.memo(
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
          d="M8.5 6h12M3.5 6h1M3.5 12h1M3.5 18h1M8.5 12h12M8.5 18h12"
        />
      </g>
    </svg>
  )
);
export default SvgListsBulletListText;
