import { BookingTabs } from "./components/Tabs";
import { BookingList } from "./components/BookingList";
import { Container, HeaderBox, NewStorageButton, Wrapper, ResponsiveHeading } from "./styles";
import { Typography } from "@mui/material";
import { MyBookingProvider } from "./context";
import { PlusIcon } from "../../components/Icons/PlusNewIcon";

export const MyBookingContent = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderBox>
                    <ResponsiveHeading>My Bookings</ResponsiveHeading>
                    <NewStorageButton>
                        <PlusIcon />
                        &nbsp;New storage
                    </NewStorageButton>
                </HeaderBox>
            </Wrapper>

            <BookingTabs />
            <BookingList />
        </Container>
    );
};
export const MyBooking = () => {
    return (
        <MyBookingProvider>
            <MyBookingContent />
        </MyBookingProvider>
    );
};
