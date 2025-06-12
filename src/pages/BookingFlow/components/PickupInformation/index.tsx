import { CustomCheckbox } from "../CustomCheckbox";
import { LocationInput } from "../LocationInput";
import {
    LocationCheckboxContainer,
    NoteContainer,
    PickupDescription,
    PickupInformationContainer,
    PickupInformationTitle,
    PickupSelectorContainer,
    PickupStepInputContainer,
} from "./PickupInformation.styles";
import { useBookingFormActions } from "@pages/BookingFlow/hooks/useBookingFormActions";
import { TimeType, useBookingSelector } from "@pages/BookingFlow/context";
import { Note } from "@components/Note";
import InfoIcon from "@components/Icons/InfoIcon";
import { useTheme } from "@mui/material";
import { TimeSlotSelector } from "../TimeSlotSelector";
import { CustomDatePicker } from "../CustomDatePicker";
import { addDays } from "date-fns";

export function PickupInformation() {
    const theme = useTheme();
    const { handleChangePickupField } = useBookingFormActions();

    const deliveryDate = useBookingSelector(state => state.form.delivery.date);
    const deliveryLocation = useBookingSelector(state => state.form.delivery.location);

    const pickupLocation = useBookingSelector(state => state.form.pickup.location);
    const pickupTimeType = useBookingSelector(state => state.form.pickup.timeType);
    const pickupTimeSlot = useBookingSelector(state => state.form.pickup.timeSlot);

    const handleChangeLocation = (value: string) => {
        handleChangePickupField("location", value);
    };

    const handleChangeDate = (value: Date) => {
        handleChangePickupField("date", value);
    };

    const handleChangeTimeType = (value: TimeType) => {
        handleChangePickupField("timeType", value);
    };

    const handleChangeTimeSlot = (value: string) => {
        handleChangePickupField("timeSlot", value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;

        if (newChecked) {
            handleChangeLocation(deliveryLocation);
        } else {
            handleChangeLocation("");
        }
    };

    return (
        <PickupInformationContainer>
            <PickupInformationTitle>Pick-up information</PickupInformationTitle>

            <PickupStepInputContainer>
                <div>Where should we deliver the empty box for storage?</div>
                <LocationInput location={pickupLocation} onChangeLocation={handleChangeLocation} />
                <LocationCheckboxContainer>
                    <CustomCheckbox
                        label="Same address as empty box dropped-off"
                        onChange={handleCheckboxChange}
                    />
                </LocationCheckboxContainer>
            </PickupStepInputContainer>

            <PickupStepInputContainer>
                <div>
                    <div>When will we collect the stored box?</div>
                    <PickupDescription>
                        This day will serve as the storage start date
                    </PickupDescription>
                </div>
                <CustomDatePicker
                    key={deliveryDate?.toISOString()}
                    defaultValue={deliveryDate}
                    minDate={deliveryDate}
                    maxDate={addDays(deliveryDate, 30)}
                    onChange={handleChangeDate}
                />
                <NoteContainer>
                    <Note Icon={<InfoIcon width={"15px"} color={theme.palette.textCustom.info} />}>
                        Your storage start date must be within <span>30 days</span> of the empty box
                        drop-off date.
                    </Note>
                </NoteContainer>
            </PickupStepInputContainer>

            <PickupSelectorContainer>
                <div>Select delivery time</div>
                <TimeSlotSelector
                    timeType={pickupTimeType}
                    onChangeTimeType={handleChangeTimeType}
                    timeSlot={pickupTimeSlot}
                    onChangeTimeSlot={handleChangeTimeSlot}
                />
            </PickupSelectorContainer>
        </PickupInformationContainer>
    );
}
