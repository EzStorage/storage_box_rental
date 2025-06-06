interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const InfoIcon: React.FC<Props> = ({
    className,
    width = "12",
    height = width,
    color = "#EF151E",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0C2.69179 0 0 2.69116 0 6C0 9.30821 2.69179 12 6 12C9.30821 12 12 9.30821 12 6C12 2.69116 9.30821 0 6 0ZM6.83332 3.83333C6.83332 4.29357 6.46023 4.66667 5.99999 4.66667C5.53975 4.66667 5.16666 4.29357 5.16666 3.83333C5.16666 3.3731 5.53975 3 5.99999 3C6.46023 3 6.83332 3.3731 6.83332 3.83333ZM6.00001 5.3333C5.63182 5.3333 5.33334 5.63178 5.33334 5.99997V8.66664C5.33334 9.03483 5.63182 9.3333 6.00001 9.3333C6.3682 9.3333 6.66667 9.03483 6.66667 8.66664V5.99997C6.66667 5.63178 6.3682 5.3333 6.00001 5.3333Z"
                fill={color}
            />
        </svg>
    );
};
export default InfoIcon;
