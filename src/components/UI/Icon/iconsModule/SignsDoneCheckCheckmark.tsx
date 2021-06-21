import * as React from "react";
const SvgSignsDoneCheckCheckmark = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g
        className="signs-done-check-checkmark_svg__nc-icon-wrapper"
        fill="none"
      >
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M19.561 6.743l-7.556 7.556-3.777-3.778" />
          <path d="M20.595 13.506V18.4a2.1 2.1 0 01-2.1 2.1h-12.8a2.1 2.1 0 01-2.1-2.1V5.6c0-1.16.94-2.1 2.1-2.1h6.4" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgSignsDoneCheckCheckmark;
