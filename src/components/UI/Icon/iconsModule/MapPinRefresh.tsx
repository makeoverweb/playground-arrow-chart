import * as React from "react";
const SvgMapPinRefresh = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M4.5 10c0 4.411 5.014 9.166 6.843 10.754a1 1 0 001.315 0C14.486 19.166 19.5 14.411 19.5 10c0-3.866-3.358-7-7.5-7-4.142 0-7.5 3.134-7.5 7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.625 10.415l.729.78.729-.78"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.083 7.673A3.389 3.389 0 0112 7.079a3.42 3.42 0 013.354 4.091M9.375 10.514l-.729-.78-.729.78"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.917 13.256a3.39 3.39 0 01-1.917.595A3.42 3.42 0 018.646 9.76"
      />
    </g>
  </svg>
));
export default SvgMapPinRefresh;
