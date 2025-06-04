import { Box, Divider, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Button } from "@components/Button";
import UserIcon from "@components/Icons/UserIcon";
import PhoneInput from "@components/PhoneInput";
import { CountryCallingCodeType } from "src/constants/phonecode.constants";

interface PhoneStepProps {
    selectedCountry: CountryCallingCodeType;
    onChangeCountry: (country: CountryCallingCodeType) => void;
    phoneNumber: string;
    onChangePhoneNumber: (phone: string) => void;
    isError: boolean;
    onError: (isError: boolean) => void;
    onNext: (currentStep: string) => void;
}

const PhoneStep: React.FC<PhoneStepProps> = ({
    selectedCountry,
    onChangeCountry,
    phoneNumber,
    onChangePhoneNumber,
    isError,
    onError,
    onNext,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <>
            <div className="icon-container">
                <UserIcon width={isMobile ? "40px" : "28px"} />
            </div>
            <Stack className="header-section">
                <div className="title">Log In</div>
                <div className="subtitle">We’ll send you an OTP to verify your account</div>
            </Stack>
            <PhoneInput
                selectedCountry={selectedCountry}
                onChangeCountry={onChangeCountry}
                phoneNumber={phoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}
                isError={isError}
                onError={onError}
            />
            <Box sx={{ margin: "12px 0 24px" }}>
                <Divider sx={{ borderColor: theme.palette.outline.greyLow }} />
            </Box>
            <Button
                variantType="primary"
                disabled={isError || !phoneNumber.length}
                onClick={() => onNext("otp")}
            >
                Next
            </Button>
        </>
    );
};
export default PhoneStep;
