interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const HomeIcon: React.FC<Props> = ({
    className,
    width = "20",
    height = width,
    color = "#5B616D",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4051 14.867C13.4051 15.2014 13.1338 15.4727 12.7995 15.4727C12.4651 15.4727 12.1938 15.2014 12.1938 14.867V11.863C12.1938 11.7225 12.0816 11.6127 11.9378 11.6127H9.06217C8.91762 11.6127 8.80539 11.7225 8.80539 11.863V14.867C8.80539 15.2014 8.53406 15.4727 8.19974 15.4727C7.86542 15.4727 7.59408 15.2014 7.59408 14.867V11.863C7.59408 11.0571 8.25303 10.4014 9.06217 10.4014H11.9378C12.747 10.4014 13.4051 11.0571 13.4051 11.863V14.867ZM16.8953 6.8385L12.3949 3.17228C11.2966 2.27591 9.70255 2.27591 8.60593 3.17228L4.10633 6.83769C3.40296 7.407 3 8.2533 3 9.15694V14.9551C3 16.768 4.47456 18.3333 6.28829 18.3333H14.7117C16.5246 18.3333 18 16.768 18 14.9551V9.15694C18 8.2525 17.597 7.407 16.8953 6.8385Z"
                fill={color}
            />
        </svg>
    );
};
export default HomeIcon;
