import * as React from "react";
const SvgEmailsLetterLock = React.memo(
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
          d="M19.994 11.002V6.013M10.999 17.002H5.003a2 2 0 01-1.999-2V5.985"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.985 3.974H5.013a2.01 2.01 0 00-1.128 3.675L9.24 11.28a4.028 4.028 0 004.52 0l5.353-3.63a2.01 2.01 0 00.882-1.664v-.001a2.011 2.011 0 00-2.01-2.011zM19.71 17v-1.29c0-.897-.765-1.71-1.71-1.71a1.71 1.71 0 00-1.71 1.71V17M20.018 21h-4.036a.982.982 0 01-.982-.982v-2.036c0-.542.44-.982.982-.982h4.036c.542 0 .982.44.982.982v2.036c0 .542-.44.982-.982.982z"
        />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterLock;
