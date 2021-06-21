import * as React from "react";
const SvgBusinessCalculator = React.memo(
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
          d="M14.8 18h3M14.8 15h3M3 12h18M21 18.652A2.348 2.348 0 0118.652 21H5.348A2.348 2.348 0 013 18.652V5.348A2.348 2.348 0 015.348 3h13.304A2.348 2.348 0 0121 5.348v13.304zM15 7.5h3M6 7.5h3M7.5 9V6M6.44 15.44l2.12 2.12M6.44 17.56l2.12-2.12M12 3v18"
        />
      </g>
    </svg>
  )
);
export default SvgBusinessCalculator;
