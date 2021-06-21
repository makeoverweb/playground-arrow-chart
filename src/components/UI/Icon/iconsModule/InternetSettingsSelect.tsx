import * as React from "react";
const SvgInternetSettingsSelect = React.memo(
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
          d="M9 19H3M9 12H3M21 5H3M19.121 12.879a3 3 0 11-4.242 4.242 3 3 0 014.242-4.242M17 12v-1M17 18v1M20 15h1M14 15h-1M19.12 12.88l.71-.71M14.88 17.12l-.71.71M19.12 17.12l.71.71M14.88 12.88l-.71-.71"
        />
      </g>
    </svg>
  )
);
export default SvgInternetSettingsSelect;
