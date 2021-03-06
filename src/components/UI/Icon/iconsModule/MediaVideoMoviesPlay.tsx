import * as React from "react";
const SvgMediaVideoMoviesPlay = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="media-video-movies-play_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M3 11.291c0 2.683 1.42 5.045 3.599 6.534-.001.855.001 2.007.001 3.216l3.531-1.747a9.896 9.896 0 001.869.179c4.952 0 9-3.643 9-8.182 0-4.539-4.048-8.182-9-8.182s-9 3.643-9 8.182z" />
          <path d="M11.313 8.721l3.195 1.89c.46.272.46.938 0 1.211l-3.195 1.89a.703.703 0 01-1.061-.605v-3.78a.703.703 0 011.061-.606z" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgMediaVideoMoviesPlay;
