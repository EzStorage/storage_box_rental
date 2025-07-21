import { useState } from "react";
import { BookingTabs } from "./components/Tabs";
import { BookingList } from "./components/BookingList";
import { Container, HeaderBox, NewStorageButton, Wrapper, ResponsiveHeading } from "./styles";
import { MyBookingProvider } from "./context";
import { PlusIcon } from "../../components/Icons/PlusNewIcon";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { useEffect } from "react";
import { fakeRequest } from "src/services/mockHttp";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import { mockBookings } from "src/constants/MockData";
import { useMyBookingCommit } from "./context";

export const MyBookingContent = () => {
    const navigate = useNavigate();
    const handleNewStorageClick = () => {
        navigate("/booking");
    };
    const [isLoading, setIsLoading] = useState(true);
    const commit = useMyBookingCommit();

    useEffect(() => {
        const loadFakeData = async () => {
            setIsLoading(true);
            const result = await fakeRequest({ resolve: () => mockBookings });
            commit({
                bookings: result,
            });
            setIsLoading(false);
        };
        loadFakeData();
    }, []);

    if (isLoading) {
        return (
            <Box
                height="calc(100vh - 72px)"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <CircularProgress />
            </Box>
        );
    }
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
