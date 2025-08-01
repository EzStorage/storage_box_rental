import React from "react";

export const MobileCloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#535862"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
