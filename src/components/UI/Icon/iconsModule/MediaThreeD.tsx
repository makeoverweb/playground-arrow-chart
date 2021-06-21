import * as React from "react";
const SvgMediaThreeD = React.memo((props: React.SVGProps<SVGSVGElement>) => (
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
        d="M7.801 10.46c.159-.55.645-.96 1.246-.96.728 0 1.319.59 1.319 1.319 0 .652-.529 1.181-1.181 1.181.652 0 1.181.529 1.181 1.181 0 .728-.59 1.319-1.319 1.319-.601 0-1.087-.41-1.246-.96M14.275 14.5h-1.409v-5h1.409c1.063 0 1.925.862 1.925 1.925v1.151a1.926 1.926 0 01-1.925 1.924z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.115 5.544L8.638 4.066c3.138-1.328 6.901-.719 9.458 1.839 3.108 3.108 3.34 7.995.709 11.376M5.195 6.719c-2.63 3.382-2.399 8.269.709 11.376 2.557 2.557 6.32 3.167 9.458 1.839l-1.478-1.478"
      />
    </g>
  </svg>
));
export default SvgMediaThreeD;
