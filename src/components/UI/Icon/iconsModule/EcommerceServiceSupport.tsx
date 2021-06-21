import * as React from "react";
const SvgEcommerceServiceSupport = React.memo(
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
          d="M20 21H4a2 2 0 01-2-2v-1.366a2 2 0 012-2h16a2 2 0 012 2V19a2 2 0 01-2 2zM9.466 3.607A2.073 2.073 0 116.534 6.54a2.073 2.073 0 012.932-2.932M4.063 15.634l.659-3.962A2 2 0 016.695 10h2.629a2 2 0 011.969 1.651L12 15.634M14.683 15.634V11a1 1 0 011-1H19a1 1 0 011 1v4.634"
        />
      </g>
    </svg>
  )
);
export default SvgEcommerceServiceSupport;
