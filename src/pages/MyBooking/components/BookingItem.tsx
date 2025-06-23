import BoxImage from "@assets/Box-GreyBG.jpeg";
import Black_Box from "@assets/Black_Box.jpeg";
import {
    Status,
    ItemWrapper,
    BoxIcon,
    Details,
    DateRange,
    Meta,
    ProgressBar,
    ProgressTrack,
    IconWrapper,
} from "../styles";
import { BoxsIcon } from "@components/Icons/BoxIcon";
import { LocationIcon } from "@components/Icons/LocationsIcon";
import { ClockIcon } from "@components/Icons/ClockIcon";
import { Box } from "@mui/material";
import { parse, differenceInDays, intervalToDuration } from "date-fns";
import { formatDurationText } from "@helpers/duration";
import { BookingTab, BookingStatus } from "../../../constants/Enums";
import { BookingItem as BookingItemType } from "../context";
import { useMemo } from "react";
import { ProgressBarContainer } from "../MyBooking.styles";

interface BookingItemProps {
    booking: BookingItemType;
    activeTab: BookingTab;
}
export const BookingItem: React.FC<BookingItemProps> = ({ booking, activeTab }) => {
    if (!booking || !booking.startDate || !booking.endDate) {
        return null;
    }
    const boxImageToUse = booking.status === BookingStatus.Cancelled ? Black_Box : BoxImage;
    const today = new Date();
    const start = parse(booking.startDate, "dd MMM yyyy", new Date());
    const end = parse(booking.endDate, "dd MMM yyyy", new Date());
    const timeLeftText = useMemo(() => {
        return formatDurationText({ start: today, end });
    }, [today, end]);
    const totalDays = differenceInDays(end, start);
    const storedDays = differenceInDays(today, start);
    const percentage = Math.min((storedDays / totalDays) * 100, 100);

    return (
        <ItemWrapper activeTab={activeTab}>
            <Box display="flex" flexDirection="row" gap={2}>
                <BoxIcon src={boxImageToUse} alt="box" />
                <Details>
                    {activeTab !== BookingTab.Stored && (
                        <Status
                            bookingStatus={booking.status as BookingStatus}
                            label={booking.status}
                        />
                    )}
                    <DateRange>
                        {booking.startDate} - {booking.endDate}
                    </DateRange>
                    <Meta>
                        <IconWrapper>
                            <BoxsIcon />
                        </IconWrapper>
                        {booking.quantity} boxes • {booking.duration}
                    </Meta>
                    <Meta>
                        <IconWrapper>
                            <LocationIcon />
                        </IconWrapper>
                        {booking.address}
                    </Meta>
                    {activeTab === BookingTab.Stored && (
                        <Meta>
                            <IconWrapper>
                                <ClockIcon />
                            </IconWrapper>
                            {timeLeftText}
                        </Meta>
                    )}
                </Details>
            </Box>

            {activeTab === BookingTab.Stored && (
                <ProgressBarContainer>
                    <ProgressTrack>
                        <ProgressBar percentage={percentage} />
                    </ProgressTrack>
                </ProgressBarContainer>
            )}
        </ItemWrapper>
    );
};
