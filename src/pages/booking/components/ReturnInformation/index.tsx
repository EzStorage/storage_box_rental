import { useTheme } from "@mui/material";
import { CustomCheckbox } from "../CustomCheckbox";
import { LocationInput } from "../LocationInput";
import {
    LocationCheckboxContainer,
    NoteContainer,
    ReturnInformationContainer,
    ReturnInformationTitle,
    ReturnSelectorContainer,
    ReturnStepInputContainer,
} from "./ReturnInformation.styles";
import { useBookingFormActions } from "@pages/booking/hooks/useBookingFormActions";
import { TimeType, useBookingSelector } from "@pages/booking/context";
import { DatePicker } from "../DatePicker";
import { Note, NoteVariantsEnum } from "@components/Note";
import InfoIcon from "@components/Icons/InfoIcon";
import { TimeSlotSelector } from "../TimeSlotSelector";
import { useEffect, useMemo } from "react";
import { DURATION_PLANS } from "@pages/booking/constants";

export function ReturnInformation() {
    const theme = useTheme();
    const { handleChangeReturnField } = useBookingFormActions();

    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    const pickupDate = useBookingSelector(state => state.form.pickup.date);

    const durationPlans = DURATION_PLANS.find(info => info.id === commitmentPeriod)?.days ?? 0;
    const futureDate = useMemo(() => {
        if (!pickupDate || !durationPlans) return undefined;
        const date = new Date(new Date(pickupDate).getTime() + durationPlans * 86400000);
        return date;
    }, [pickupDate, durationPlans]);

    const pickupLocation = useBookingSelector(state => state.form.pickup.location);
    const returnLocation = useBookingSelector(state => state.form.return.location);

    const returnTimeType = useBookingSelector(state => state.form.return.timeType);
    const returnTimeSlot = useBookingSelector(state => state.form.return.timeSlot);

    const handleChangeLocation = (value: string) => {
        handleChangeReturnField("location", value);
    };

    const handleChangeDate = (value: Date) => {
        handleChangeReturnField("date", value);
    };

    const handleChangeTimeType = (value: TimeType) => {
        handleChangeReturnField("timeType", value);
    };

    const handleChangeTimeSlot = (value: string) => {
        handleChangeReturnField("timeSlot", value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        if (newChecked) {
            handleChangeLocation(pickupLocation);
        } else {
            handleChangeLocation("");
        }
    };

    useEffect(() => {
        if (!pickupDate || !durationPlans) return;
        const pickup = new Date(pickupDate);
        const newFutureDate = new Date(pickup.getTime() + durationPlans * 86400000);
        handleChangeDate(newFutureDate);
    }, [pickupDate, durationPlans]);

    return (
        <ReturnInformationContainer>
            <ReturnInformationTitle>Return information</ReturnInformationTitle>

            <ReturnStepInputContainer>
                <div>Where can the boxes be returned?</div>
                <LocationInput location={returnLocation} onChangeLocation={handleChangeLocation} />
                <LocationCheckboxContainer>
                    <CustomCheckbox
                        label="Same address as box pick-up"
                        onChange={handleCheckboxChange}
                    />
                </LocationCheckboxContainer>
            </ReturnStepInputContainer>

            <ReturnStepInputContainer>
                <div>When will we return your items to your place?</div>
                <DatePicker
                    key={futureDate?.toISOString()}
                    onChange={handleChangeDate}
                    value={futureDate}
                />
                <NoteContainer>
                    <Note
                        variant={NoteVariantsEnum.TRANSPARENT}
                        Icon={<InfoIcon width={"12px"} color={theme.palette.textCustom.greyMed} />}
                    >
                        This is your storage end date, automatically calculated based on your
                        selected start date and storage duration
                    </Note>
                </NoteContainer>
            </ReturnStepInputContainer>

            <ReturnSelectorContainer>
                <div>Select delivery time</div>
                <TimeSlotSelector
                    timeType={returnTimeType}
                    onChangeTimeType={handleChangeTimeType}
                    timeSlot={returnTimeSlot}
                    onChangeTimeSlot={handleChangeTimeSlot}
                />
            </ReturnSelectorContainer>
        </ReturnInformationContainer>
    );
}
