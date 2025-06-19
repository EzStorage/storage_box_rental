import { Box, MenuItem, SelectChangeEvent, TextField, useTheme } from "@mui/material";
import { COUNTRY_CALLING_CODES, CountryCallingCodeType } from "../../constants/phonecode.constants";
import { PhoneInputContainer, PhoneInputSelectContainer } from "./PhoneInput.styles";

interface PhoneInputProps {
    selectedCountry: CountryCallingCodeType;
    onChangeCountry: (country: CountryCallingCodeType) => void;
    phoneNumber: string;
    onChangePhoneNumber: (phone: string) => void;
    isError: boolean;
    onError: (isError: boolean) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
    selectedCountry,
    onChangeCountry,
    phoneNumber,
    onChangePhoneNumber,
    isError,
    onError,
}) => {
    const theme = useTheme();

    const handleCountryChange = (event: SelectChangeEvent) => {
        const code = event.target.value;
        const country = COUNTRY_CALLING_CODES.find(country => country.code === code);
        if (country) {
            onChangeCountry(country);
        }
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isValid = /^[0-9]*$/.test(value);

        onChangePhoneNumber(event.target.value);
        onChangePhoneNumber(value);
        onError(!isValid);
    };

    return (
        <PhoneInputContainer>
            <PhoneInputSelectContainer
                IconComponent={() => null}
                value={selectedCountry.code}
                onChange={handleCountryChange}
                renderValue={value => {
                    const country = COUNTRY_CALLING_CODES.find(c => c.code === value);
                    return (
                        <Box className="select">
                            <span>{country?.flag}</span>
                            <span>{country?.code}</span>
                        </Box>
                    );
                }}
            >
                {COUNTRY_CALLING_CODES.map(country => (
                    <MenuItem key={country.code} value={country.code}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <span>{country.flag}</span>
                            <span>{country.code}</span>
                            <span>{country.country}</span>
                        </Box>
                    </MenuItem>
                ))}
            </PhoneInputSelectContainer>

            <TextField
                placeholder="Input your phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                variant="outlined"
                fullWidth
                error={isError}
                helperText={isError ? "Phone number must contain only digits" : " "}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "#F4F4F6",
                        borderRadius: "4px",
                        height: "48px",
                        color: theme.palette.textCustom.greyHigh,

                        "& fieldset": {
                            border: "none",
                        },
                        "& input": {
                            "&::placeholder": {
                                fontSize: "15px",
                                fontHeight: 400,
                                lineHeight: "24px",
                                color: theme.palette.textCustom.greyLow,
                                opacity: 1,
                            },
                        },
                    },
                }}
            />
        </PhoneInputContainer>
    );
};
export default PhoneInput;
