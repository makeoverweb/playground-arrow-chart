import * as React from "react";
const SvgSignsMoon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M18.395 13.027c.33-.155.682.17.59.523a7.213 7.213 0 01-1.881 3.296c-2.821 2.821-7.334 2.88-10.082.132-2.748-2.748-2.688-7.262.133-10.083a7.207 7.207 0 013.296-1.881c.353-.092.677.26.523.59-1.002 2.139-.673 4.701 1.024 6.398 1.696 1.698 4.258 2.027 6.397 1.025z"
      />
    </g>
  </svg>
));
export default SvgSignsMoon;
