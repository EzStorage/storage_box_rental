import LocationIcon from "@components/Icons/LocationIcon";
import { InputAdornment } from "@mui/material";
import { LocationInputContainer } from "./LocationInput.styles";

interface LocationInputProps {
    location: string;
    onChangeLocation: (location: string) => void;
}

export function LocationInput({ location, onChangeLocation }: LocationInputProps) {
    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChangeLocation(value);
    };

    return (
        <LocationInputContainer
            placeholder="Input your location"
            value={location}
            onChange={handleLocationChange}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationIcon />
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}
