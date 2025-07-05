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
    ContentRow,
    IconTextRowWrapper,
    IconSlot,
    TextSlot,
} from "../styles";
import { BoxsIcon } from "@components/Icons/BoxIcon";
import { LocationIcon } from "@components/Icons/LocationsIcon";
import { ClockIcon } from "@components/Icons/ClockIcon";
import { BoxsIconMobile } from "@components/Icons/BoxsIconMobile";
import { LocationIconMobile } from "@components/Icons/LocationIconMobile";
import { ClockIconMobile } from "@components/Icons/ClockIconMobile";
import { parse, differenceInDays, intervalToDuration } from "date-fns";
import { formatDurationText } from "@helpers/duration";
import { BookingTab, BookingStatus } from "../../../constants/Enums";
import { BookingItem as BookingItemType } from "../context";
import { useMemo } from "react";
import { ProgressBarContainer } from "../MyBooking.styles";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

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
        <Link
            to={`/my-booking/${booking.id}`}
            state={{ tab: activeTab }}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <ItemWrapper activeTab={activeTab}>
                <ContentRow>
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
                        <IconTextRow icon={<BoxsIcon />} mobileIcon={<BoxsIconMobile />}>
                            {" "}
                            {booking.quantity} boxes • {booking.duration}
                        </IconTextRow>

                        <IconTextRow icon={<LocationIcon />} mobileIcon={<LocationIconMobile />}>
                            {booking.address}
                        </IconTextRow>
                        {activeTab === BookingTab.Stored && (
                            <IconTextRow icon={<ClockIcon />} mobileIcon={<ClockIconMobile />}>
                                {timeLeftText}
                            </IconTextRow>
                        )}
                    </Details>
                </ContentRow>

                {activeTab === BookingTab.Stored && (
                    <ProgressBarContainer>
                        <ProgressTrack>
                            <ProgressBar percentage={percentage} />
                        </ProgressTrack>
                    </ProgressBarContainer>
                )}
            </ItemWrapper>
        </Link>
    );
};
export const IconTextRow = ({
    icon,
    mobileIcon,
    children,
}: {
    icon: React.ReactNode;
    mobileIcon?: React.ReactNode;
    children: React.ReactNode;
}) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <IconTextRowWrapper>
            <IconSlot>{isMobile && mobileIcon ? mobileIcon : icon}</IconSlot>
            <TextSlot>{children}</TextSlot>
        </IconTextRowWrapper>
    );
};
