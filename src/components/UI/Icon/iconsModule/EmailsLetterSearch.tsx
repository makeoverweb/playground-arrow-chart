import * as React from "react";
const SvgEmailsLetterSearch = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="emails-letter-search_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M20.121 14.907a3 3 0 11-4.241 4.243 3 3 0 014.241-4.243M20 11.028V6.039M11 17.028H5a2 2 0 01-2-2V6" />
          <path d="M17.989 4.028H5.011a2.01 2.01 0 10-1.128 3.675l5.357 3.631a4.031 4.031 0 004.522 0l5.356-3.63c.551-.374.882-.998.882-1.664v-.001a2.01 2.01 0 00-2.011-2.011zM22 21.03l-1.88-1.88" />
        </g>
        <path d="M0 .028h24v24H0v-24z" />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterSearch;
