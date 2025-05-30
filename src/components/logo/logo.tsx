type LogoProps = {
  size?: number | string;
  color?: string;
  textColor?: string;
};

const Logo: React.FC<LogoProps> = ({ size = 32, color = "#EF151E", textColor = "white" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill={color} />
    <path
      d="M9.44186 11.4511V14.228H13.9201V16.8093H9.44186V19.8209H14.5068V22.5H6.09786V8.772H14.5068V11.4511H9.44186ZM20.2368 19.7622H26.1426V22.5H16.4431V19.9578L22.3097 11.5098H16.4431V8.772H26.1426V11.3142L20.2368 19.7622Z"
      fill={textColor}
    />
  </svg>
);
export default Logo;
