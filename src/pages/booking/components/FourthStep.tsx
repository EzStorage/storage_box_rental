import { TextField } from "@mui/material";
import { useBookingCommit, useBookingSelector } from "../context";
import { useBookingFormActions } from "../hooks/useBookingFormActions";
import { selectBookingData } from "../context/selectors";

export function FourthStep() {
    const bookingId = useBookingSelector(state => state.bookingId);
    const bookingData = useBookingSelector(selectBookingData);
    const commit = useBookingCommit();

    const handleBookingIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        commit({ bookingId: event.target.value });
    };

    const { handleChangeField, validateField } = useBookingFormActions();

    const handleChangeNameField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (validateField("receieverName", value)) {
            handleChangeField("receieverName", value);
        }
    };

    return (
        <div>
            <TextField onChange={handleChangeNameField} />
        </div>
    );
}
