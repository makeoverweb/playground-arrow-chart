import * as React from "react";
const SvgInternetCursorSelectCheckbox = React.memo(
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
          d="M7.778 16.111l-2.222 2.222L4.222 17"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 21a4 4 0 010-8 4 4 0 010 8zM4.22 6l1.34 1.33M7.78 5.11L5.56 7.33M7.778 5.111L5.556 7.333 4.222 6M18.778 5.111l-2.222 2.222L15.222 6"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 10a4 4 0 010-8 4 4 0 010 8zM16.014 20.937l-1.976-6.312a.803.803 0 011.106-.967l5.893 2.75c.698.326.581 1.353-.173 1.513l-2.426.513-.9 2.531c-.259.727-1.293.708-1.524-.028zM6 10a4 4 0 010-8 4 4 0 010 8z"
        />
      </g>
    </svg>
  )
);
export default SvgInternetCursorSelectCheckbox;
