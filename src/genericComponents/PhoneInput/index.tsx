import { Box, FormControl, MenuItem, SelectChangeEvent, TextField, useTheme } from "@mui/material";
import { COUNTRY_CALLING_CODES, CountryCallingCodeType } from "../../constants/phonecode.constants";
import { PhoneInputContainer, PhoneInputSelectContainer } from "./PhoneInput.styles";

interface PhoneInputProps {
    selectedCountry: CountryCallingCodeType;
    onChangeCountry: (country: CountryCallingCodeType) => void;
    phoneNumber: string;
    onChangePhoneNumber: (phone: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
    selectedCountry,
    onChangeCountry,
    phoneNumber,
    onChangePhoneNumber,
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
        onChangePhoneNumber(event.target.value);
    };

    return (
        <PhoneInputContainer>
            <FormControl>
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
                                <span style={{ fontSize: "24px" }}>{country.flag}</span>
                                <span>{country.code}</span>
                                <span
                                    style={{ marginLeft: "8px", color: "#666", fontSize: "14px" }}
                                >
                                    {country.country}
                                </span>
                            </Box>
                        </MenuItem>
                    ))}
                </PhoneInputSelectContainer>
            </FormControl>

            <TextField
                placeholder="Input your phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                variant="outlined"
                fullWidth
                sx={{
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "#F4F4F6",
                        borderRadius: "4px",
                        height: "48px",
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
