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
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loadFakeData = async () => {
            setIsLoading(true);
            await fakeRequest({ resolve: () => ({}) });
            setIsLoading(false);
        };
        loadFakeData();
    }, []);
    useEffect(() => {
        if (!type) {
            if (!Object.values(BookingTabs).includes(type)) {
                navigate("/");
            }
            setSearchParams({ type: "upcoming" });
            navigate("/my-bookings/upcoming", { replace: true });
        }
    }, [type, setSearchParams, navigate]);
    if (!type || isLoading) {
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
    if (!type) return null;

    return (
        <MyBookingProvider>
            <MyBookingContent />
        </MyBookingProvider>
    );
};
