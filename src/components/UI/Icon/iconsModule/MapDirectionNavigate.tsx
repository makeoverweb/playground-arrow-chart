import * as React from "react";
const SvgMapDirectionNavigate = React.memo(
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
          d="M13.845 18.313l4.062-10.959a1.003 1.003 0 00-1.289-1.289L5.654 10.13c-.924.343-.851 1.673.104 1.913l4.94 1.241 1.233 4.924c.24.956 1.571 1.029 1.914.105z"
        />
      </g>
    </svg>
  )
);
export default SvgMapDirectionNavigate;
