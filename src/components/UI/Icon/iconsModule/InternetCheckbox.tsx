import * as React from "react";
const SvgInternetCheckbox = React.memo(
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
          d="M8.5 22h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2zM19.5 11h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2z"
        />
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M21.5 18a4 4 0 00-3.997-4c-2.164-.002-4.004 1.837-4.003 4a4 4 0 008 0z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.63 19.13l-2.26-2.26M16.37 19.13l2.26-2.26M17.5 5.4v3.2M19.1 7h-3.2"
        />
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M6.5 11a4 4 0 01-4-4c0-2.164 1.84-4.002 4.003-4a4 4 0 01-.003 8"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.673 7.172a.244.244 0 10-.346.001c.095.095.25.095.346-.001M8.278 17.111l-2.222 2.222L4.722 18"
        />
      </g>
    </svg>
  )
);
export default SvgInternetCheckbox;
