interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const LocationIcon: React.FC<Props> = ({
    className,
    width = "20",
    height = width,
    color = "#8C929C",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.1829 7.04168C16.3079 3.19168 12.9496 1.45834 9.99959 1.45834C9.99959 1.45834 9.99959 1.45834 9.99126 1.45834C7.04959 1.45834 3.68292 3.18334 2.80792 7.03334C1.83292 11.3333 4.46626 14.975 6.84959 17.2667C7.73292 18.1167 8.86626 18.5417 9.99959 18.5417C11.1329 18.5417 12.2663 18.1167 13.1413 17.2667C15.5246 14.975 18.1579 11.3417 17.1829 7.04168ZM9.99959 11.2167C8.54959 11.2167 7.37459 10.0417 7.37459 8.59168C7.37459 7.14168 8.54959 5.96668 9.99959 5.96668C11.4496 5.96668 12.6246 7.14168 12.6246 8.59168C12.6246 10.0417 11.4496 11.2167 9.99959 11.2167Z"
                fill={color}
            />
        </svg>
    );
};
export default LocationIcon;
