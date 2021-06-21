import * as React from "react";
const SvgAccountBatteryChargeFull = React.memo(
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
          d="M7 10v4M11 10v4M15 10v4M17 18H5a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2zM19 9h1.014c.155 0 .308.036.447.106l.486.243a1 1 0 01.553.894v3.514a.998.998 0 01-.553.894l-.486.243a.993.993 0 01-.447.106H19"
        />
      </g>
    </svg>
  )
);
export default SvgAccountBatteryChargeFull;
