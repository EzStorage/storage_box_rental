interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const CloseIcon: React.FC<Props> = ({
    className,
    width = "22",
    height = width,
    color = "#5B616D",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2964 11.0002L17.1483 6.14835C17.5068 5.78994 17.5068 5.2106 17.1483 4.85219C16.7899 4.49377 16.2106 4.49377 15.8522 4.85219L11.0003 9.70406L6.14835 4.85219C5.78994 4.49377 5.2106 4.49377 4.85219 4.85219C4.49377 5.2106 4.49377 5.78994 4.85219 6.14835L9.70409 11.0002L4.85219 15.8522C4.49377 16.2106 4.49377 16.7899 4.85219 17.1483C5.03094 17.3271 5.2656 17.4169 5.50027 17.4169C5.73494 17.4169 5.9696 17.3271 6.14835 17.1483L11.0003 12.2965L15.8522 17.1483C16.0309 17.3271 16.2656 17.4169 16.5003 17.4169C16.7349 17.4169 16.9696 17.3271 17.1483 17.1483C17.5068 16.7899 17.5068 16.2106 17.1483 15.8522L12.2964 11.0002Z"
                fill={color}
            />
        </svg>
    );
};
export default CloseIcon;
