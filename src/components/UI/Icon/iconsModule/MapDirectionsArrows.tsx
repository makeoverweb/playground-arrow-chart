import * as React from "react";
const SvgMapDirectionsArrows = React.memo(
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
          d="M7.914 4.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M12.234 18H8.627C7.176 18 6 16.657 6 15.001v-.003c0-1.656 1.176-2.999 2.627-2.999h6.745c1.451 0 2.627-1.343 2.627-2.999.001-1.659-1.177-3.002-2.629-3l-4.12.005M16.34 20.184l2.889-1.709a.552.552 0 000-.95l-2.889-1.709a.556.556 0 00-.84.479v3.41c0 .431.469.699.84.479z"
        />
      </g>
    </svg>
  )
);
export default SvgMapDirectionsArrows;
