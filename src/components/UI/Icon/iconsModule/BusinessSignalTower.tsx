import * as React from "react";
const SvgBusinessSignalTower = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="business-signal-tower_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M8.641 5.939a4.89 4.89 0 000 7.312M15.359 13.251a4.892 4.892 0 000-7.312M6.236 3C4.259 4.576 3 6.944 3 9.595s1.259 5.019 3.236 6.595M17.764 16.19C19.741 14.614 21 12.245 21 9.595S19.741 4.576 17.764 3M12 9.6V21" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgBusinessSignalTower;
