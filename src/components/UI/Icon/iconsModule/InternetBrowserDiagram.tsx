import * as React from "react";
const SvgInternetBrowserDiagram = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="internet-browser-diagram_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2zM2 8h20" />
          <path d="M4.779 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M7.322 5.49c-.003 0-.005.002-.005.005s.003.005.005.005c.003 0 .005-.002.005-.005s-.002-.005-.005-.005M9.861 5.49c-.003 0-.005.002-.005.005s.002.005.005.005.005-.002.005-.005-.002-.005-.005-.005M10.444 17.792H7.333v-3.25h3.111M10.444 11.542h3.111v6.25h-3.111zM13.556 13.542h3.111v4.25h-3.111" />
        </g>
        <path d="M0 0h24v24H0V0z" />
      </g>
    </svg>
  )
);
export default SvgInternetBrowserDiagram;
