interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const UserIcon: React.FC<Props> = ({
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
                d="M14 17.5177C18.7446 17.5177 22.75 18.2984 22.75 21.3135C22.75 24.3287 18.7189 25.0833 14 25.0833C9.2554 25.0833 5.25 24.3015 5.25 21.2875C5.25 18.2724 9.27993 17.5177 14 17.5177ZM14 2.91667C17.2137 2.91667 19.7897 5.52607 19.7897 8.78132C19.7897 12.0366 17.2137 14.646 14 14.646C10.7863 14.646 8.21026 12.0366 8.21026 8.78132C8.21026 5.52607 10.7863 2.91667 14 2.91667Z"
                fill={color}
            />
        </svg>
    );
};
export default UserIcon;
