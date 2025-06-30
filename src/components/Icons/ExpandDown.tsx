import React from "react";

export const ExpandDown = ({ size = 20 }: { size?: number }) => (
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
            d="M4.33708 7.67047C4.7032 7.30434 5.2968 7.30434 5.66291 7.67047L10 12.0075L14.3371 7.67047C14.7032 7.30434 15.2967 7.30434 15.6629 7.67047C16.029 8.03659 16.029 8.63009 15.6629 8.99622L10.6629 13.9963C10.2967 14.3624 9.70325 14.3624 9.33712 13.9963L4.33708 8.99622C3.97097 8.63009 3.97097 8.03659 4.33708 7.67047Z"
            fill="#5B616D"
        />
    </svg>
);
