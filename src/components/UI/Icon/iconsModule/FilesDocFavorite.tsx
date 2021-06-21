import * as React from "react";
const SvgFilesDocFavorite = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-doc-favorite_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M18.414 6.414l-2.828-2.828A2 2 0 0014.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.828a2 2 0 00-.586-1.414z" />
          <path d="M19 8h-4a1 1 0 01-1-1V3M11.999 17.023l1.755.922a.466.466 0 00.676-.491l-.335-1.954 1.42-1.383a.465.465 0 00-.258-.794l-1.962-.285-.877-1.779a.466.466 0 00-.835 0l-.877 1.779-1.962.285a.465.465 0 00-.258.794l1.42 1.383-.336 1.955c-.065.38.334.67.676.491l1.755-.922" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgFilesDocFavorite;
