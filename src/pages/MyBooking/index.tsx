import { BookingTabs } from "./components/Tabs";
import { BookingList } from "./components/BookingList";
import { Container, HeaderBox, NewStorageButton, Wrapper, ResponsiveHeading } from "./styles";
import { MyBookingProvider } from "./context";
import { PlusIcon } from "../../components/Icons/PlusNewIcon";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { useEffect } from "react";

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
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();
    const [, setSearchParams] = useSearchParams();

    // if I set url is /my-bookings I expect browser to redirect to /my-bookings/upcoming
    useEffect(() => {
        if (!type) {
            if (!Object.values(BookingTabs).includes(type)) {
                navigate("/");
            }
            setSearchParams({ type: "upcoming" });
            navigate("/my-bookings/upcoming", { replace: true });
        }
    }, [type, setSearchParams, navigate]);

    if (!type) return null;

    return (
        <MyBookingProvider>
            <MyBookingContent />
        </MyBookingProvider>
    );
};
