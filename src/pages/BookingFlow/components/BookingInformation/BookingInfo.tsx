import { formatDate } from "@helpers/formatDate";
import {
    BookingInfoContainer,
    BookingInfoDesc,
    BookingInfoTitle,
} from "./BookingInformation.styles";
import {
    EXPRESS_TIME_SLOTS,
    SIX_HOUR_TIME_SLOTS,
    TIME_TYPE_OPTIONS,
} from "@pages/BookingFlow/constants";

type BookingInfoProps = {
    title: string;
    location: string;
    date: Date;
    timeTypeId: string;
    timeSlotId: string;
    isBorder?: boolean;
};

export function BookingInfo({
    title,
    location,
    date,
    timeTypeId,
    timeSlotId,
    isBorder = true,
}: BookingInfoProps) {
    const formattedDate = formatDate(date);
    const timeType = TIME_TYPE_OPTIONS.find(info => info.id === timeTypeId);
    const slotsVariant = timeTypeId === "6HourSlot" ? SIX_HOUR_TIME_SLOTS : EXPRESS_TIME_SLOTS;
    const timeSlot = slotsVariant.find(info => info.id === timeSlotId);

    return (
        <BookingInfoContainer isBorder={isBorder}>
            <BookingInfoTitle>{title}</BookingInfoTitle>
            <BookingInfoDesc>
                <div>{location}</div>
                <div>
                    {formattedDate} <span /> {timeType?.name} <span /> {timeSlot?.time}
                </div>
            </BookingInfoDesc>
        </BookingInfoContainer>
    );
}
