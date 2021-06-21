import * as React from "react";
const SvgEmailsLetterEditWrite = React.memo(
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
          d="M15.007 20.974h2.827l3.877-3.877a.998.998 0 000-1.413l-1.413-1.413a.998.998 0 00-1.413 0l-3.877 3.877v2.826zM19.994 11.002V6.013M10.999 17.002H5.003a2 2 0 01-1.999-2V5.985"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.985 3.974H5.013a2.01 2.01 0 00-1.128 3.675L9.24 11.28a4.028 4.028 0 004.52 0l5.353-3.63a2.01 2.01 0 00.882-1.664v-.001a2.011 2.011 0 00-2.01-2.011z"
        />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterEditWrite;
