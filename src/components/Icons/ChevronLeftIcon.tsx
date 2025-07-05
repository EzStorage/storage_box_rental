interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

export const ChevronLeftIcon: React.FC<Props> = ({
    className,
    width = "28",
    height = width,
    color = "#EF151E",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.428 6.07192C18.9406 6.58448 18.9406 7.41552 18.428 7.92807L12.3562 14L18.428 20.072C18.9406 20.5845 18.9406 21.4154 18.428 21.928C17.9154 22.4406 17.0845 22.4406 16.572 21.928L9.57192 14.928C9.05936 14.4154 9.05936 13.5845 9.57192 13.072L16.572 6.07192C17.0845 5.55936 17.9154 5.55936 18.428 6.07192Z"
                fill={color}
            />
        </svg>
    );
};
