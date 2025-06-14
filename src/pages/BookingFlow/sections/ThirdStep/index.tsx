import InfoIcon from "@components/Icons/InfoIcon";
import ThreeDSquareIcon from "@components/Icons/ThreeDSquareIcon";
import { Note } from "@components/Note";
import { useTheme } from "@mui/material";
import {
    StepContainer,
    StepHeaderProgress,
    StepHeaderTitle,
} from "@pages/BookingFlow/Booking.styles";
import {
    NoteDateContainer,
    ThirdStepInputContainer,
    ThirdStepNotesContainer,
    ThirdStepSelectorContainer,
} from "./ThirdStep.styles";
import { LocationInput } from "@pages/BookingFlow/components/LocationInput";
import { TimeType, useBookingSelector } from "@pages/BookingFlow/context";
import { useBookingFormActions } from "@pages/BookingFlow/hooks/useBookingFormActions";
import { TimeSlotSelector } from "@pages/BookingFlow/components/TimeSlotSelector";
import { CustomDatePicker } from "@pages/BookingFlow/components/CustomDatePicker";
import { max, parseISO, startOfDay, subDays } from "date-fns";

const SERVICE_INFORMATION = `To ensure a smooth storage experience, we provide our EZ Storage boxes for you
                    to pack your items. Simply let us know where to deliver the empty box, and once
                    you're ready, we’ll collect it and securely store your items in our facility.`;

export function ThirdStep() {
    const theme = useTheme();

    const { handleChangeDeliveryField } = useBookingFormActions();

    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    const isCustomDuration = typeof commitmentPeriod === "object" && commitmentPeriod !== null;
    const deliveryLocation = useBookingSelector(state => state.form.delivery.location);
    const deliveryTimeType = useBookingSelector(state => state.form.delivery.timeType);
    const deliveryTimeSlot = useBookingSelector(state => state.form.delivery.timeSlot);

    const today = startOfDay(new Date());
    const startDate =
        isCustomDuration && commitmentPeriod.startDate
            ? startOfDay(parseISO(commitmentPeriod.startDate))
            : undefined;
    const thirtyDaysBeforeStart = startDate ? subDays(startDate, 30) : undefined;
    const minDate =
        startDate && thirtyDaysBeforeStart ? max([today, thirtyDaysBeforeStart]) : today;
    const maxDate = isCustomDuration && startDate ? startDate : undefined;

    const handleChangeLocation = (value: string) => {
        handleChangeDeliveryField("location", value);
    };

    const handleChangeDate = (value: Date) => {
        handleChangeDeliveryField("date", value);
    };

    const handleChangeTimeType = (value: TimeType) => {
        handleChangeDeliveryField("timeType", value);
    };

    const handleChangeTimeSlot = (value: string) => {
        handleChangeDeliveryField("timeSlot", value);
    };

    return (
        <StepContainer id="step-3">
            <StepHeaderProgress>STEP 3 OF 5</StepHeaderProgress>
            <StepHeaderTitle>Delivery of Box to your place</StepHeaderTitle>
            <ThirdStepNotesContainer>
                <Note
                    Icon={<InfoIcon color={theme.palette.textCustom.info} width={"15px"} />}
                    title="Service information"
                >
                    {SERVICE_INFORMATION}
                </Note>
                <Note Icon={<ThreeDSquareIcon />} title="How It works">
                    <ul>
                        <li>We deliver an empty EZ Storage box to your location.</li>
                        <li>You pack your items at your convenience.</li>
                        <li>We pick up the packed box and store it securely.</li>
                        <li>Need something back? Request a return anytime within your plan.</li>
                    </ul>
                </Note>
            </ThirdStepNotesContainer>

            <ThirdStepInputContainer>
                <div>Where should we deliver the empty box for storage?</div>
                <LocationInput
                    location={deliveryLocation}
                    onChangeLocation={handleChangeLocation}
                />
            </ThirdStepInputContainer>

            <ThirdStepInputContainer>
                <div>When should the delivery be made?</div>
                <CustomDatePicker
                    defaultValue={minDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={handleChangeDate}
                />
                {isCustomDuration && (
                    <NoteDateContainer>
                        <Note
                            Icon={<InfoIcon color={theme.palette.textCustom.info} width={"15px"} />}
                        >
                            Your empty box delivery date must be <span>30 days</span> prior to the
                            start of storage.
                        </Note>
                    </NoteDateContainer>
                )}
            </ThirdStepInputContainer>

            <ThirdStepSelectorContainer>
                <div>Select delivery time</div>
                <TimeSlotSelector
                    timeType={deliveryTimeType}
                    onChangeTimeType={handleChangeTimeType}
                    timeSlot={deliveryTimeSlot}
                    onChangeTimeSlot={handleChangeTimeSlot}
                />
            </ThirdStepSelectorContainer>
        </StepContainer>
    );
}
