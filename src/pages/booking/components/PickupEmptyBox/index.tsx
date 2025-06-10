import { Note } from "@components/Note";
import {
    PickupChosenDurationContainer,
    PickupEmptyBoxContainer,
    PickupEmptyBoxTitle,
} from "./PickupEmptyBox.styles";
import InfoIcon from "@components/Icons/InfoIcon";
import { useTheme } from "@mui/material";
import { TimePeriodDropdown } from "../TimePeriodDropdown";
import { useBookingSelector } from "@pages/booking/context";
import { useMemo } from "react";
import { useBookingFormActions } from "@pages/booking/hooks/useBookingFormActions";
import { formatDate } from "@helpers/formatDate";

export function PickupEmptyBox() {
    const theme = useTheme();

    const { handleChangeField } = useBookingFormActions();
    const emptyDuration = useBookingSelector(state => state.form.emptyDuration);
    const returnDate = useBookingSelector(state => state.form.return.date);

    const futureDate = useMemo(() => {
        if (!returnDate || !emptyDuration) return undefined;
        const date = new Date(new Date(returnDate).getTime() + emptyDuration * 86400000);
        return date;
    }, [returnDate, emptyDuration]);

    const handleEmptyDurationChange = (value: number) => {
        handleChangeField("emptyDuration", value);
    };

    return (
        <PickupEmptyBoxContainer>
            <PickupEmptyBoxTitle>Pick-up empty storage box</PickupEmptyBoxTitle>

            <Note Icon={<InfoIcon width={"15px"} color={theme.palette.textCustom.info} />}>
                After we return your stored box, you'll have a set number of days to remove your
                items before we collect the empty box. Please select the number of days below
            </Note>

            <PickupChosenDurationContainer>
                <div>How many day you need to remove your items from your stored box?</div>
                <div>
                    <TimePeriodDropdown
                        value={emptyDuration}
                        onChange={handleEmptyDurationChange}
                    />
                </div>
                <div>
                    The date to collect the empty box:{" "}
                    <span>{futureDate ? formatDate(futureDate) : "-"}</span>
                </div>
            </PickupChosenDurationContainer>
        </PickupEmptyBoxContainer>
    );
}
