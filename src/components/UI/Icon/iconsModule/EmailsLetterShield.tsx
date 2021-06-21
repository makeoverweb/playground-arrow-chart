import * as React from "react";
const SvgEmailsLetterShield = React.memo(
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
        <path d="M0 .028h24v24H0v-24z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.998 21.024s2.995-1.431 2.995-3.578L21 14.947l-2.184-.782a2.406 2.406 0 00-1.623 0l-2.183.782-.007 2.498c0 2.147 2.995 3.579 2.995 3.579zM19.991 11.052v-4.99M10.996 17.052H4.999a2 2 0 01-1.999-2V6.034"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.981 4.024H5.01a2.009 2.009 0 10-1.128 3.674l5.354 3.631a4.028 4.028 0 004.52 0l5.353-3.63a2.01 2.01 0 00.882-1.664v-.001c0-1.11-.9-2.01-2.01-2.01z"
        />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterShield;
