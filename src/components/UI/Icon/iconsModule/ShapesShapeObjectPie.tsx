import * as React from "react";
const SvgShapesShapeObjectPie = React.memo(
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
          d="M19.764 16.634l-8.834 3.681a3.997 3.997 0 01-3.23-.068l-2.987-1.394a2 2 0 01-1.011-2.555l4.812-12.03a2 2 0 012.703-1.07l3.274 1.528a3.994 3.994 0 011.738 1.567l4.48 7.466a2 2 0 01-.945 2.875zM15.53 5.43L9.45 20.61"
        />
      </g>
    </svg>
  )
);
export default SvgShapesShapeObjectPie;
