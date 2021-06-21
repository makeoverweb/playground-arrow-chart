import * as React from "react";
const SvgMapArrowLocationDirection = React.memo(
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
          d="M12.886 16.793l2.818-7.601a.695.695 0 00-.894-.894l-7.604 2.819c-.641.238-.591 1.16.072 1.327l3.426.861.855 3.415c.167.663 1.09.714 1.327.073z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636"
        />
      </g>
    </svg>
  )
);
export default SvgMapArrowLocationDirection;
