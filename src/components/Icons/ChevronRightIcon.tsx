interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const ChevronRightIcon: React.FC<Props> = ({
    className,
    width = "16",
    height = width,
    color = "#EF151E",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.46968 3.46967C5.17678 3.76256 5.17678 4.23744 5.46968 4.53033L8.93927 8L5.46968 11.4697C5.17678 11.7626 5.17678 12.2374 5.46968 12.5303C5.76258 12.8232 6.23738 12.8232 6.53028 12.5303L10.5303 8.5303C10.8232 8.2374 10.8232 7.7626 10.5303 7.4697L6.53028 3.46967C6.23738 3.17678 5.76258 3.17678 5.46968 3.46967Z"
                fill={color}
            />
        </svg>
    );
};
export default ChevronRightIcon;
