import * as React from "react";
const SvgBusinessChartM = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M12 3v8.743l-6.364 6.621M3.9 8.08l8.1 3.66"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636"
      />
    </g>
  </svg>
));
export default SvgBusinessChartM;
