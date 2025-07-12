import React from "react";

export const CloseCircleIcon: React.FC<{ width?: number; height?: number }> = ({
    width = 64,
    height = 40,
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 64 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_ddd_1757_4837)">
            <path
                d="M12 20C12 8.95431 20.9543 0 32 0C43.0457 0 52 8.95431 52 20C52 31.0457 43.0457 40 32 40C20.9543 40 12 31.0457 12 20Z"
                fill="white"
            />
            <path
                d="M32 0.5C42.7696 0.5 51.5 9.23045 51.5 20C51.5 30.7696 42.7696 39.5 32 39.5C21.2304 39.5 12.5 30.7696 12.5 20C12.5 9.23045 21.2304 0.5 32 0.5Z"
                stroke="#EBECF0"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.297 20.0003L38.149 15.1485C38.5074 14.7901 38.5074 14.2107 38.149 13.8523C37.7905 13.4939 37.2112 13.4939 36.8528 13.8523L32.0009 18.7042L27.149 13.8523C26.7905 13.4939 26.2112 13.4939 25.8528 13.8523C25.4944 14.2107 25.4944 14.7901 25.8528 15.1485L30.7047 20.0003L25.8528 24.8524C25.4944 25.2107 25.4944 25.79 25.8528 26.1484C26.0315 26.3272 26.2662 26.417 26.5009 26.417C26.7355 26.417 26.9702 26.3272 27.149 26.1484L32.0009 21.2966L36.8528 26.1484C37.0315 26.3272 37.2662 26.417 37.5009 26.417C37.7355 26.417 37.9702 26.3272 38.149 26.1484C38.5074 25.79 38.5074 25.2107 38.149 24.8524L33.297 20.0003Z"
                fill="#5B616D"
            />
        </g>
        <defs>
            <filter
                id="filter0_ddd_1757_4837"
                x="0"
                y="0"
                width="64"
                height="76"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feMorphology
                    radius="12"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow"
                />
                <feOffset dy="24" />
                <feGaussianBlur stdDeviation="12" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feMorphology
                    radius="1.5"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect2_dropShadow"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                <feMorphology
                    radius="0.5"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect3_dropShadow"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape" />
            </filter>
        </defs>
    </svg>
);
