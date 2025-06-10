interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const CheckIcon: React.FC<Props> = ({ className, width = "12", height = "9", color = "white" }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.9498 0.878443C11.3402 1.26889 11.3403 1.90191 10.9499 2.29238L5.29386 7.94918C4.90334 8.33975 4.27014 8.33977 3.87959 7.94923L1.05075 5.12039C0.660285 4.72992 0.660284 4.09685 1.05075 3.70639C1.44122 3.31592 2.07428 3.31592 2.46475 3.70639L4.58675 5.82839L9.53576 0.878506C9.92621 0.487985 10.5593 0.487957 10.9498 0.878443Z"
                fill={color}
            />
        </svg>
    );
};
export default CheckIcon;
