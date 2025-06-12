import { Stack, useTheme } from "@mui/material";
import {
    htmlInputStyles,
    OTPDash,
    OTPError,
    OTPInputContainer,
    OTPInputItem,
} from "./OTPInput.styles";
import { useEffect, useRef } from "react";
import InfoIcon from "../Icons/InfoIcon";

interface OTPInputProps {
    otp: string[];
    onChangeOtp: (otp: string[]) => void;
    isInvalidOtp: boolean;
    onChangeInvalidOtp: (isInvalidOtp: boolean) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({
    otp,
    onChangeOtp,
    isInvalidOtp,
    onChangeInvalidOtp,
}) => {
    const theme = useTheme();

    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
    ) => {
        const value = e.target.value;
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        onChangeOtp(newOtp);

        if (isInvalidOtp) onChangeInvalidOtp(false);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<Element>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();

        const pastedData = e.clipboardData.getData("text/plain").trim();

        if (!/^\d+$/.test(pastedData)) return;

        const digits = pastedData.slice(0, 6).split("");
        const newOtp = [...otp];

        digits.forEach((digit, index) => {
            if (index < 6) newOtp[index] = digit;
        });

        onChangeOtp(newOtp);

        const lastFilledIndex = Math.min(digits.length, 5);
        if (inputRefs.current[lastFilledIndex]) {
            inputRefs.current[lastFilledIndex].focus();
        }
    };

    return (
        <Stack spacing={"8px"}>
            <OTPInputContainer>
                {/* First group of 3 inputs */}
                {[0, 1, 2].map(index => (
                    <OTPInputItem
                        key={index}
                        inputRef={el => (inputRefs.current[index] = el)}
                        value={otp[index]}
                        onChange={e => handleChange(e, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        isInvalid={isInvalidOtp}
                        slotProps={{
                            htmlInput: {
                                style: {
                                    ...htmlInputStyles,
                                    color: isInvalidOtp
                                        ? theme.palette.textCustom.danger
                                        : theme.palette.textCustom.greyBase,
                                },
                            },
                        }}
                        variant="outlined"
                    />
                ))}

                {/* Dash separator */}
                <OTPDash>-</OTPDash>

                {/* Second group of 3 inputs */}
                {[3, 4, 5].map(index => (
                    <OTPInputItem
                        key={index}
                        inputRef={el => (inputRefs.current[index] = el)}
                        value={otp[index]}
                        onChange={e => handleChange(e, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        isInvalid={isInvalidOtp}
                        slotProps={{
                            htmlInput: {
                                style: {
                                    ...htmlInputStyles,
                                    color: isInvalidOtp
                                        ? theme.palette.textCustom.danger
                                        : theme.palette.textCustom.greyBase,
                                },
                            },
                        }}
                        variant="outlined"
                    />
                ))}
            </OTPInputContainer>

            {/* Error message */}
            {isInvalidOtp && (
                <OTPError direction={"row"} spacing={"4px"}>
                    <InfoIcon />
                    <div>Invalid Verification Code</div>
                </OTPError>
            )}
        </Stack>
    );
};
export default OTPInput;
