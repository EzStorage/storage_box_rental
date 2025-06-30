import React from "react";

export const ExpandUp = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6629 12.3295C15.2968 12.6957 14.7032 12.6957 14.3371 12.3295L10 7.99253L5.66288 12.3295C5.29675 12.6957 4.70325 12.6957 4.33713 12.3295C3.971 11.9634 3.971 11.3699 4.33713 11.0038L9.33713 6.00374C9.70325 5.63763 10.2968 5.63763 10.6629 6.00374L15.6629 11.0038C16.029 11.3699 16.029 11.9634 15.6629 12.3295Z"
            fill="#5B616D"
        />
    </svg>
);
