import * as React from "react";
const SvgAccountEyeHidden = React.memo(
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
          d="M12 19c-.842 0-1.685-.178-2.504-.495M20.882 12.468C18.99 15.967 15.495 19 12 19M19.079 8.921a15.135 15.135 0 011.803 2.612.987.987 0 010 .935M5 19L19 5M9.773 14.227a3.15 3.15 0 014.455-4.455"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.044 6.956C15.497 5.759 13.748 5 12 5c-3.495 0-6.99 3.033-8.882 6.533a.987.987 0 000 .935c.946 1.749 2.292 3.381 3.838 4.577"
        />
      </g>
    </svg>
  )
);
export default SvgAccountEyeHidden;
