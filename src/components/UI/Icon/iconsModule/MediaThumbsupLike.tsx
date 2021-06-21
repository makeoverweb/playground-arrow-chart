import * as React from "react";
const SvgMediaThumbsupLike = React.memo(
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
          d="M6.944 19H5.056A1.056 1.056 0 014 17.944v-7.388C4 9.973 4.473 9.5 5.056 9.5h1.888C7.527 9.5 8 9.973 8 10.556v7.388C8 18.527 7.527 19 6.944 19zM8 10.572l3.649-4.751a1.734 1.734 0 012.714-.046c.265.321.409.725.409 1.141v3.271h3.096a1.8 1.8 0 011.496.799l.329.491a1.8 1.8 0 01.234 1.499l-1.359 4.722A1.8 1.8 0 0116.839 19H10.55a1.8 1.8 0 01-1.318-.574L8 17.1"
        />
      </g>
    </svg>
  )
);
export default SvgMediaThumbsupLike;
