import * as React from "react";
const SvgInternetKeyboard = React.memo(
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
          d="M17.919 18H6.081a2.33 2.33 0 01-2.331-2.331V8.331A2.33 2.33 0 016.081 6H17.92a2.33 2.33 0 012.331 2.331v7.339A2.331 2.331 0 0117.919 18z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.91 10.545a.182.182 0 10-.183-.182c0 .101.082.182.183.182M16.91 13.818a.182.182 0 10-.183-.182c0 .101.082.182.183.182M10.23 13.64h3.54M13.637 10.545a.182.182 0 10-.183-.182.183.183 0 00.183.182M10.364 10.545a.182.182 0 10-.183-.182.183.183 0 00.183.182M7.092 10.545a.182.182 0 10-.183-.182c0 .101.082.182.183.182M7.092 13.818a.182.182 0 10-.183-.182c0 .101.082.182.183.182"
        />
      </g>
    </svg>
  )
);
export default SvgInternetKeyboard;
