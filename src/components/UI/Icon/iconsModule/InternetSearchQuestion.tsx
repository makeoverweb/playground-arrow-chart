import * as React from "react";
const SvgInternetSearchQuestion = React.memo(
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
        <path d="M0 0h24v24H0V0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.467 18.934a7.467 7.467 0 110-14.934 7.467 7.467 0 110 14.934z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.467 12.504v-.207c0-.678.419-1.045.839-1.327.41-.276.821-.636.821-1.3a1.659 1.659 0 00-3.319-.001M11.466 14.843a.148.148 0 00-.149.15.15.15 0 10.149-.15M20 20l-3.25-3.25"
        />
      </g>
    </svg>
  )
);
export default SvgInternetSearchQuestion;
