import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "@components/Button";
import {ChevronLeftIcon }from "@components/Icons/ChevronLeftIcon";
import PrivacyIcon from "@components/Icons/PrivacyIcon";
import OTPInput from "@components/OTPInput";
import { OTPResendCodeContainer } from "./Login.styles";
import { CountryCallingCodeType } from "src/constants/phonecode.constants";
import { useAppDispatch } from "src/app/hooks";
import { useNavigate } from "react-router";
import { verifyOtp } from "src/redux/auth/authThunks";
import { useScreenSize } from "@hooks/useScreenSize";

interface OTPStepProps {
    onBack: (step: string) => void;
    selectedCountry: CountryCallingCodeType;
    phoneNumber: string;
}

const OTPStep: React.FC<OTPStepProps> = ({ onBack, selectedCountry, phoneNumber }) => {
    const theme = useTheme();
    const { isMobile } = useScreenSize();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [_, setLoading] = useState(false);
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [isInvalid, setIsInvalid] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const [canResend, setCanResend] = useState(false);

    const handleResend = () => {
        setCountdown(60);
        setCanResend(false);
    };

    const handleVerify = async () => {
        setLoading(true);
        try {
            await dispatch(
                verifyOtp({ phoneNumber: `(${selectedCountry.code}) ${phoneNumber}`, otp }),
            ).unwrap();
            navigate("/");
        } catch {
            setIsInvalid(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        if (countdown > 0) {
            interval = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }

        return () => {
            clearInterval(interval);
        };
    }, [countdown]);

    return (
        <>
            {!isMobile ? (
                <IconButton
                    aria-label="back"
                    className="back-button"
                    onClick={() => onBack("phone")}
                >
                    <ChevronLeftIcon />
                </IconButton>
            ) : (
                <div className="icon-container">
                    <PrivacyIcon />
                </div>
            )}
            <Stack className="header-section">
                <div className="title">Enter Verification Code</div>
                <div className="subtitle">
                    Your verification code is sent via message to{" "}
                    <span className="phone-number">
                        ({selectedCountry.code}) {phoneNumber}
                    </span>
                </div>
            </Stack>
            <OTPInput
                otp={otp}
                onChangeOtp={setOtp}
                isInvalidOtp={isInvalid}
                onChangeInvalidOtp={setIsInvalid}
            />
            <Box sx={{ margin: "32px 0 24px" }}>
                <Divider sx={{ borderColor: theme.palette.outline.greyLow }} />
            </Box>
            <Button
                variantType="primary"
                disabled={otp.some(value => value === "")}
                onClick={handleVerify}
            >
                Next
            </Button>
            <OTPResendCodeContainer>
                {!canResend ? (
                    <p className="count-down">Please wait {countdown} seconds to resend</p>
                ) : (
                    <Button className="resend-code" onClick={handleResend} variant="text">
                        Resend code
                    </Button>
                )}
            </OTPResendCodeContainer>
        </>
    );
};
export default OTPStep;
