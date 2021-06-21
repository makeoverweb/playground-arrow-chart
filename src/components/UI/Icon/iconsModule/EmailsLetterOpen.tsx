import * as React from "react";
const SvgEmailsLetterOpen = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="emails-letter-open_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19.509 10H7.491a1.491 1.491 0 10-.837 2.725l4.964 3.364c1.137.77 2.628.77 3.764 0l4.963-3.364c.41-.277.655-.739.655-1.234v-.001A1.49 1.49 0 0019.509 10z" />
          <path d="M6 11.504V19a2 2 0 002 2h11a2 2 0 002-2v-7.496" />
          <path d="M18.554 7.028l-5.437-3.685a1.994 1.994 0 00-2.24.003l-6.994 4.74a1.998 1.998 0 00-.877 1.654L3 18" />
        </g>
        <path d="M0 .028h24v24H0v-24z" />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterOpen;
