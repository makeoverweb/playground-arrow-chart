import * as React from "react";
const SvgBusinessAlarmClockTimeWarning = React.memo(
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
          d="M12.001 4.998A8.001 8.001 0 0120.002 13a8.002 8.002 0 01-16.003 0 8.002 8.002 0 018.002-8.002zM12.001 13.445V8.999M3.45 5.81l3-2.52M20.56 5.82l-3-2.52"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 16.628a.148.148 0 00-.149.15.15.15 0 10.149-.15"
        />
      </g>
    </svg>
  )
);
export default SvgBusinessAlarmClockTimeWarning;
