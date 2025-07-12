export const GreyExpandDown = ({
    size = 20,
    ...props
}: { size?: number } & React.SVGProps<SVGSVGElement>) => (
    <svg
        style={{ marginRight: "8px" }}
        {...props}
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.33708 7.67059C4.7032 7.30446 5.2968 7.30446 5.66291 7.67059L10 12.0076L14.3371 7.67059C14.7032 7.30446 15.2967 7.30446 15.6629 7.67059C16.029 8.03671 16.029 8.63022 15.6629 8.99634L10.6629 13.9964C10.2967 14.3625 9.70325 14.3625 9.33712 13.9964L4.33708 8.99634C3.97097 8.63022 3.97097 8.03671 4.33708 7.67059Z"
            fill="#8C929C"
        />
    </svg>
);
