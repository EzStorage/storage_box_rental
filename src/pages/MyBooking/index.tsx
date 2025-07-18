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

export const MyBookingContent = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleNewStorageClick = async () => {
        setIsLoading(true);
        try {
            await fakeRequest({
                resolve: () => ({}),
            });
            navigate("/booking");
        } catch (e) {
            console.error("Fake request failed", e);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Container>
            <Wrapper>
                <HeaderBox>
                    <ResponsiveHeading>My Bookings</ResponsiveHeading>
                    <NewStorageButton onClick={handleNewStorageClick} disabled={isLoading}>
                        {isLoading ? (
                            <CircularProgress size={20} />
                        ) : (
                            <>
                                <PlusIcon />
                                &nbsp;New storage
                            </>
                        )}
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
