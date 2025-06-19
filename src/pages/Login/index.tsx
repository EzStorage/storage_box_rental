import { IconButton, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
    DesktopBranding,
    FormContainer,
    LoginContainer,
    LoginHeaderMobile,
    LoginWrapper,
} from "./Login.styles";
import ArrowLeftIcon from "@components/Icons/ArrowLeftIcon";
import Logo from "@components/Logo";
import PhoneStep from "./PhoneStep";
import OTPStep from "./OTPStep";
import { COUNTRY_CALLING_CODES } from "src/constants/phonecode.constants";
import { useScreenSize } from "@hooks/useScreenSize";

export const Login: React.FC = () => {
    const theme = useTheme();
    const { isMobile } = useScreenSize();
    const navigate = useNavigate();

    const [selectedCountry, setSelectedCountry] = useState(() => {
        return (
            COUNTRY_CALLING_CODES.find(country => country.country === "Singapore") ||
            COUNTRY_CALLING_CODES[0]
        );
    });
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isError, setIsError] = useState(false);
    const [currentStep, setCurrentStep] = useState("phone");

    const handleClickBackMobile = () => {
        if (currentStep === "otp") {
            setCurrentStep("phone");
        } else {
            navigate(-1);
        }
    };

    return (
        <LoginWrapper>
            {isMobile && (
                <LoginHeaderMobile>
                    <IconButton onClick={handleClickBackMobile}>
                        <ArrowLeftIcon />
                    </IconButton>
                </LoginHeaderMobile>
            )}
            <LoginContainer direction={isMobile ? "column" : "row"} alignItems={"center"}>
                {!isMobile && (
                    <DesktopBranding
                        alignItems={"center"}
                        justifyContent={"center"}
                        spacing={"32px"}
                    >
                        <Stack alignItems={"center"} justifyContent={"center"} spacing={"16px"}>
                            <Logo
                                size={108}
                                color="white"
                                textColor={theme.palette.surface.primaryMed}
                            />
                            <div className="title">Easy Storage</div>
                        </Stack>
                        <Stack alignItems={"center"} justifyContent={"center"} className="subtitle">
                            <div>Moving and Storage.</div>
                            <div>Make it simple.</div>
                        </Stack>
                    </DesktopBranding>
                )}

                <FormContainer>
                    {currentStep === "phone" && (
                        <PhoneStep
                            selectedCountry={selectedCountry}
                            onChangeCountry={setSelectedCountry}
                            phoneNumber={phoneNumber}
                            onChangePhoneNumber={setPhoneNumber}
                            isError={isError}
                            onError={setIsError}
                            onNext={setCurrentStep}
                        />
                    )}

                    {currentStep === "otp" && (
                        <OTPStep
                            onBack={setCurrentStep}
                            selectedCountry={selectedCountry}
                            phoneNumber={phoneNumber}
                        />
                    )}
                </FormContainer>
            </LoginContainer>
        </LoginWrapper>
    );
};
