import * as React from "react";
const SvgInternetCloudUpload = React.memo(
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
          d="M12 19v-7M9.833 14L12 11.833 14.167 14"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 19h2.56c1.928 0 3.5-1.572 3.5-3.5s-1.572-3.5-3.5-3.5h-.435v-1c0-3.31-2.69-6-6-6-2.977 0-5.445 2.178-5.913 5.023-2.377.121-4.272 2.07-4.272 4.477a4.5 4.5 0 004.5 4.5H8"
        />
      </g>
    </svg>
  )
);
export default SvgInternetCloudUpload;
