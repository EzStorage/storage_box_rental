import { Box } from "@mui/material";
import { InfosIcon } from "@components/Icons/InfosIcon";
import { SectionHeader } from "./SectionHeader";
import { BookingRow } from "./BookingRow";
import { ReturnItemsRow, ChangeText, InfoNoteBox, ContactBoxWrapper, CustomDivider } from "../styles";
import { useReduceTimeController } from "../../MyBooking/components/ReduceFlow/LogicHook";
export const DeliveryPickupSection = ({ booking }: { booking: any }) => {
     const { open } = useReduceTimeController(); 

    const handleRequestCancel = () => {
        open(); 
    };
    return(
    <ContactBoxWrapper>
        <SectionHeader>Delivery box & Pick-up</SectionHeader>
        <BookingRow label="Drop-off box location" value={booking.address} />
        <CustomDivider/>
        <BookingRow label="Drop-off box time" value="19 Sep 2025, 8AM – 2PM" />
        <CustomDivider/>
        <BookingRow
            label="Pick-up location"
            value="51 Ubi Avenue 1 #02-28 (2D), Paya Ubi Industrial Park"
        />
        <CustomDivider/>
        <BookingRow label="Pick-up time" value="19 Mar 2025, 8AM – 2PM" />
        <ReturnItemsRow>
            <Box mb={-1} mt={1}>
                <SectionHeader>Return items</SectionHeader>
            </Box>
            <ChangeText onClick={handleRequestCancel}>Change time</ChangeText>
        </ReturnItemsRow>
        <BookingRow
            label="Return location"
            value="51 Ubi Avenue 1 #02-28 (2D), Paya Ubi Industrial Park"
        />
        <CustomDivider/>
        <BookingRow label="Return time" value="19 Sep 2025, 8AM" />
        <Box mb={-1} mt={1.9}>
            <SectionHeader>Collect empty box</SectionHeader>
        </Box>
        <BookingRow label="Pick-up empty box time" value="3 Oct 2025, 8AM – 2PM" />
        <InfoNoteBox>
            <InfosIcon />
            <span style={{ paddingLeft: "4px" }}>
                We will collect empty box after you take item out of box
            </span>
        </InfoNoteBox>
    </ContactBoxWrapper>
    );
};
