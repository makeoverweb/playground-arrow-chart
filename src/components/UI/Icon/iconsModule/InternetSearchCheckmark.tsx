import * as React from "react";
const SvgInternetSearchCheckmark = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-search-checkmark_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M14.786 9.808l-4.148 4.148-2.489-2.489" />
          <path d="M18.934 11.467a7.467 7.467 0 11-14.934 0 7.467 7.467 0 1114.934 0zM20 20l-3.25-3.25" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgInternetSearchCheckmark;
