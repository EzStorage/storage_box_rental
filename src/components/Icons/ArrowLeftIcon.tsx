interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const ArrowLeftIcon: React.FC<Props> = ({
    className,
    width = "18",
    height = width,
    color = "#5B616D",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.06891 14.0432C8.36114 13.7495 8.35996 13.2745 8.06628 12.9823L4.81729 9.74942L14.25 9.74942C14.6642 9.74942 15 9.41363 15 8.99942C15 8.58521 14.6642 8.24942 14.25 8.24942L4.81729 8.24942L8.06618 5.01729C8.35991 4.72508 8.36111 4.25007 8.06886 3.95638C7.77666 3.66272 7.30173 3.66153 7.00805 3.95371L2.4709 8.46777C2.17622 8.76096 2.1762 9.2379 2.47087 9.5311L7.00804 14.0458C7.30172 14.338 7.77668 14.3368 8.06891 14.0432Z"
                fill={color}
            />
        </svg>
    );
};
export default ArrowLeftIcon;
