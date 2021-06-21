import * as React from "react";
const SvgSocialGoogleplay = React.memo(
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
          d="M7.674 7.489v9.023a.857.857 0 001.28.745l7.939-4.511a.857.857 0 000-1.49L8.954 6.743a.857.857 0 00-1.28.746zM7.87 17.05l6.24-7.38M7.87 6.95l6.24 7.38"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 3h9.004A4.496 4.496 0 0121 7.496v9.009A4.496 4.496 0 0116.504 21H7.496A4.496 4.496 0 013 16.504V7.5A4.5 4.5 0 017.5 3z"
        />
      </g>
    </svg>
  )
);
export default SvgSocialGoogleplay;
