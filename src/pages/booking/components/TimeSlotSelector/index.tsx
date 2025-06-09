import {
    EXPRESS_TIME_SLOTS,
    SIX_HOUR_TIME_SLOTS,
    TIME_TYPE_OPTIONS,
} from "@pages/booking/constants";
import { TimeType } from "@pages/booking/context";

import {
    TimeSlotCheckedIcon,
    TimeSlotConatiner,
    TimeSlotIcon,
    TimeSlotOptionContainer,
    TimeSlotOptionList,
    TimeSlotOptionsConatiner,
    TimeSlotOptiontext,
    TimeSlotPrice,
    TimeSlotTitle,
} from "./TimeSlotSelector.styles";
import InfoIcon from "@components/Icons/InfoIcon";
import { CustomTooltip } from "../CustomTooltip";
import { FormControlLabel, IconButton, Radio, useTheme } from "@mui/material";

type TimeSlotSelectorProps = {
    timeType: string;
    onChangeTimeType: (type: TimeType) => void;
    timeSlot: string;
    onChangeTimeSlot: (slot: string) => void;
};

export function TimeSlotSelector({
    timeType,
    onChangeTimeType,
    timeSlot,
    onChangeTimeSlot,
}: TimeSlotSelectorProps) {
    const theme = useTheme();

    const currentTimeSlots = timeType === "6HourSlot" ? SIX_HOUR_TIME_SLOTS : EXPRESS_TIME_SLOTS;

    const handleDeliveryChange = (deliveryId: TimeType) => {
        onChangeTimeType(deliveryId);
        const newTimeSlots = deliveryId === "6HourSlot" ? SIX_HOUR_TIME_SLOTS : EXPRESS_TIME_SLOTS;
        onChangeTimeSlot(newTimeSlots[0].id);
    };

    return (
        <>
            <TimeSlotConatiner>
                {TIME_TYPE_OPTIONS.map(option => (
                    <TimeSlotOptionsConatiner
                        key={option.id}
                        isSelected={timeType === option.id}
                        onClick={() => handleDeliveryChange(option.id)}
                    >
                        <div>
                            <TimeSlotTitle className="font-medium text-gray-900 mb-1">
                                {option.name}
                            </TimeSlotTitle>
                            <TimeSlotPrice className="text-sm text-gray-600">
                                {option.price}
                            </TimeSlotPrice>
                        </div>
                        {option.id === "express" && (
                            <CustomTooltip title="Disclaimer for weather and unforseen circumstances delays excluded.">
                                <IconButton>
                                    <InfoIcon
                                        color={theme.palette.textCustom.greyMed}
                                        width={"15px"}
                                    />
                                </IconButton>
                            </CustomTooltip>
                        )}
                    </TimeSlotOptionsConatiner>
                ))}
            </TimeSlotConatiner>

            <TimeSlotOptionList
                name="timeSlot"
                value={timeSlot}
                onChange={e => onChangeTimeSlot(e.target.value)}
            >
                {currentTimeSlots.map(slot => (
                    <TimeSlotOptionContainer key={slot.id} isSelected={timeSlot === slot.id}>
                        <FormControlLabel
                            value={slot.id}
                            control={
                                <Radio
                                    disableRipple
                                    color="default"
                                    checkedIcon={<TimeSlotCheckedIcon />}
                                    icon={<TimeSlotIcon />}
                                />
                            }
                            label={<TimeSlotOptiontext>{slot.time}</TimeSlotOptiontext>}
                        />
                    </TimeSlotOptionContainer>
                ))}
            </TimeSlotOptionList>
        </>
    );
}
