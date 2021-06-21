import * as React from "react";
const SvgSignsQuestion = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 13.25V13c0-.817.505-1.26 1.011-1.6.494-.333.989-.767.989-1.567a2 2 0 10-4 0M11.999 16a.25.25 0 10.251.25.25.25 0 00-.251-.25"
      />
    </g>
  </svg>
));
export default SvgSignsQuestion;
