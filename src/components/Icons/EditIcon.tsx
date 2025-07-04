interface Props {
    className?: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const EditIcon: React.FC<Props> = ({
    className,
    width = "14",
    height = width,
    color = "#5B616D",
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.3222 5.51059L10.801 4.84533C11.2779 4.19501 11.1355 3.28456 10.4852 2.81386L9.4075 2.02728C8.76338 1.55658 7.84674 1.69903 7.37603 2.34934L6.90192 3.00495C6.84209 3.08771 6.85875 3.20214 6.94113 3.26254L7.09735 3.37714C7.77272 3.87256 9.3928 5.06096 10.0615 5.5519C10.1448 5.61309 10.2619 5.59445 10.3222 5.51059Z"
                fill={color}
            />
            <path
                d="M6.40596 4.02107C6.32278 3.95993 6.20571 3.97832 6.14528 4.06201L3.375 7.89869C3.07151 8.33223 2.91048 8.85249 2.91668 9.38513L2.92287 10.4814C2.92287 10.5203 2.92287 10.5543 2.92735 10.5922C2.92838 10.6009 2.92906 10.6097 2.92906 10.6185V10.853C2.93526 11.4538 3.51125 11.8873 4.08725 11.7201L4.43729 11.6157C4.43927 11.6151 4.44133 11.6148 4.44339 11.6148C4.44543 11.6148 4.44746 11.6145 4.44943 11.6139L5.47459 11.3113C6.03201 11.1503 6.5151 10.8034 6.84337 10.3327L9.55984 6.56783C9.61949 6.48514 9.60134 6.36976 9.51921 6.30937L6.40596 4.02107Z"
                fill={color}
            />
        </svg>
    );
};
export default EditIcon;
