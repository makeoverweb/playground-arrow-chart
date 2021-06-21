import * as React from "react";
const SvgFilesDocContacts = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      fontSize="1em"
      {...props}
    >
      <g className="files-doc-contacts_svg__nc-icon-wrapper" fill="none">
        <g
          strokeLinecap="round"
          strokeWidth={1.5}
          stroke="currentColor"
          strokeLinejoin="round"
        >
          <path d="M18.414 6.414l-2.828-2.828A2 2 0 0014.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.828a2 2 0 00-.586-1.414z" />
          <path d="M19 8h-4a1 1 0 01-1-1V3M15.195 18a2.822 2.822 0 00-2.621-1.778h-1.148a2.82 2.82 0 00-1.917.752A2.804 2.804 0 008.805 18M13.149 11.069a1.625 1.625 0 11-2.298 2.298 1.625 1.625 0 012.298-2.298" />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
);
export default SvgFilesDocContacts;
