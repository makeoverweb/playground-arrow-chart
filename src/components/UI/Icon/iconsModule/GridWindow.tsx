import * as React from "react";
const SvgGridWindow = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M19.5 21h-15a2 2 0 01-2-2V5a2 2 0 012-2h15a2 2 0 012 2v14a2 2 0 01-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 8v13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 8h19M5.505 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M8.048 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M10.588 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.003-.005-.005-.005"
      />
    </g>
  </svg>
));
export default SvgGridWindow;
