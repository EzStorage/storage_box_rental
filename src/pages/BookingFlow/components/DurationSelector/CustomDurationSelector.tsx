import { useScreenSize } from "@hooks/useScreenSize";
import {
    CustomDurationSelectorDate,
    CustomDurationSelectorItem,
    CustomDurationSelectorTitleContainer,
    DurationSelectorPrice,
} from "./DurationSelector.styles";
import { IconButton } from "@mui/material";
import EditIcon from "@components/Icons/EditIcon";
import RemoveIcon from "@components/Icons/RemoveIcon";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { formatDate } from "@helpers/formatDate";
import { differenceInDays } from "date-fns";

interface CustomDurationSelectorProps {
    onEdit: () => void;
    onDelete: () => void;
}

export function CustomDurationSelector({ onEdit, onDelete }: CustomDurationSelectorProps) {
    const { isDesktop } = useScreenSize();

    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    if (typeof commitmentPeriod === "string") return;
    const startDate = new Date(commitmentPeriod.startDate);
    const endDate = new Date(commitmentPeriod.endDate);
    const differenceDays = differenceInDays(endDate, startDate);
    console.log(differenceDays <= 1);

    return (
        <CustomDurationSelectorItem>
            <CustomDurationSelectorTitleContainer>
                <div>
                    Custom duration{" "}
                    {isDesktop && (
                        <span>
                            · {formatDate(startDate)} - {formatDate(endDate)} ({differenceDays}{" "}
                            {differenceDays <= 1 ? "day" : "days"})
                        </span>
                    )}
                </div>
                <div>
                    <IconButton onClick={onEdit}>
                        <EditIcon width={"20px"} />
                    </IconButton>
                    <IconButton onClick={onDelete}>
                        <RemoveIcon />
                    </IconButton>
                </div>
            </CustomDurationSelectorTitleContainer>
            {!isDesktop && (
                <CustomDurationSelectorDate>
                    {formatDate(startDate)} - {formatDate(endDate)} ({differenceDays}{" "}
                    {differenceDays <= 1 ? "day" : "days"})
                </CustomDurationSelectorDate>
            )}
            <DurationSelectorPrice>From S$4.22 per day</DurationSelectorPrice>
        </CustomDurationSelectorItem>
    );
}
