import * as React from "react";
const SvgEmailsLetterIncoming = React.memo(
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
          d="M12 3v9M9 9l3 3 3-3"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 6H7.386a2 2 0 00-1.873 1.298L3.127 13.66a2.01 2.01 0 00-.127.703V18a2 2 0 002 2h14a2 2 0 002-2v-3.637a2 2 0 00-.127-.702l-2.386-6.363A2 2 0 0016.614 6H15"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.034 14h4.348c.379 0 .725.214.894.553l.447.894c.17.339.516.553.895.553h4.764a.998.998 0 00.894-.553l.447-.894c.17-.339.516-.553.895-.553h4.348"
        />
      </g>
    </svg>
  )
);
export default SvgEmailsLetterIncoming;
