import * as React from "react";
const SvgSocialApple = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    fontSize="1em"
    {...props}
  >
    <g className="social-apple_svg__nc-icon-wrapper" fill="none">
      <g
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M11.592 9.168c-.656 0-1.678-.764-2.74-.764-1.412 0-2.704.863-3.432 2.129-1.464 2.542-.377 6.298 1.051 8.364.701 1.006 1.527 2.138 2.623 2.102 1.051-.045 1.446-.683 2.722-.683 1.267 0 1.626.683 2.74.656 1.132-.018 1.851-1.024 2.542-2.039a9.015 9.015 0 001.15-2.363c-.027-.009-2.201-.844-2.228-3.36-.018-2.102 1.716-3.108 1.797-3.153-.988-1.446-2.506-1.608-3.036-1.644-1.384-.108-2.542.755-3.189.755zM13.651 2.955c.87-.324 1.438.153 1.27 1.065-.168.912-1.008 1.913-1.877 2.237-.87.324-1.438-.153-1.27-1.065.168-.912 1.008-1.914 1.877-2.237" />
      </g>
      <path d="M0 24V0h24v24z" />
    </g>
  </svg>
));
export default SvgSocialApple;
