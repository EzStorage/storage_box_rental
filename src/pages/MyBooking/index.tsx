import { BookingTabs } from "./components/Tabs";
import { BookingList } from "./components/BookingList";
import { Container, HeaderBox, NewStorageButton, Wrapper, ResponsiveHeading } from "./styles";
import { MyBookingProvider } from "./context";
import { PlusIcon } from "../../components/Icons/PlusNewIcon";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { useEffect } from "react";
import { CancelModalProvider } from "./components/CancelModal/Context";
import { CancelModal } from "./components/CancelModal";
export const MyBookingContent = () => {
    const navigate = useNavigate();
    const handleNewStorageClick = () => {
        navigate("/booking");
    };
    return (
        <Container>
            <Wrapper>
                <HeaderBox>
                    <ResponsiveHeading>My Bookings</ResponsiveHeading>
                    <NewStorageButton onClick={handleNewStorageClick}>
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
