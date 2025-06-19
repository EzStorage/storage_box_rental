import BoxImage from "../../../assets/Box-GreyBG.jpeg";
import {
    Status,
    ItemWrapper,
    BoxIcon,
    Details,
    DateRange,
    Meta,
    ProgressBar,
    ProgressTrack,
} from "../styles";
import { BoxsIcon } from "../../../components/Icons/BoxIcon";
import { LocationIcon } from "../../../components/Icons/LocationsIcon";
import { ClockIcon } from "../../../components/Icons/ClockIcon";
import { Box, Typography } from "@mui/material";
import { parse, differenceInDays, intervalToDuration } from "date-fns";
import { formatDurationText } from "../../../helpers/duration";
import { BookingTab } from "../../../constants/Enums";
import { BookingItem as BookingItemType } from "../context";
import { useMemo } from "react";
interface BookingItemProps {
    booking: BookingItemType;
    activeTab: BookingTab;
}
export const BookingItem: React.FC<BookingItemProps> = ({ booking, activeTab }) => {
    if (!booking || !booking.startDate || !booking.endDate) {
        return null;
    }
    const today = new Date();
    const start = parse(booking.startDate, "dd MMM yyyy", new Date());
    const end = parse(booking.endDate, "dd MMM yyyy", new Date());
    const timeLeftText = useMemo(() => {
        return formatDurationText({ start: today, end });
    }, [today, end]);
    const totalDays = differenceInDays(end, start);
    const daysLeft = differenceInDays(end, today);
    const storedDays = differenceInDays(today, start);
    const percentage = Math.min((storedDays / totalDays) * 100, 100);

    const duration = intervalToDuration({ start: today, end });

    return (
        <ItemWrapper activeTab={activeTab}>
            <BoxIcon src={BoxImage} alt="box" />
            <Details>
                {activeTab !== "Stored" && (
                    <Status status={booking.status} label={booking.status} />
                )}
                <DateRange>
                    {booking.startDate} - {booking.endDate}
                </DateRange>
                <Meta>
                    <BoxsIcon /> {booking.quantity} boxes • {booking.duration}
                </Meta>
                <Meta>
                    <LocationIcon /> {booking.address}
                </Meta>
                {activeTab === "Stored" && (
                    <>
                        <Meta>
                            <ClockIcon />
                            {timeLeftText}
                        </Meta>
                        <ProgressTrack>
                            <ProgressBar percentage={percentage} />
                        </ProgressTrack>
                    </>
                )}
            </Details>
        </ItemWrapper>
    );
};
