import { TabContainer, Tab } from "../styles";
import { useMyBookingSelector } from "../context";
import { BookingTab, BookingStatus } from "../../../constants/Enums";
import { useNavigate, useParams } from "react-router";

export const BookingTabs: React.FC = () => {
    const selectedTab = useParams().type as BookingTab;
    const bookings = useMyBookingSelector(state => state.bookings);
    const navigate = useNavigate();

    const setActiveTab = (tab: BookingTab) => {
        navigate(`/my-bookings/${tab.toLowerCase()}`);
    };

    const countByStatus = {
        [BookingTab.Upcoming]: bookings.filter(
            b =>
                b.status === BookingStatus.AwaitingPickup ||
                b.status === BookingStatus.BoxToBeDelivered,
        ).length,
        [BookingTab.Stored]: bookings.filter(b => b.status === BookingStatus.Stored).length,
        [BookingTab.History]: bookings.filter(
            b => b.status === BookingStatus.Returned || b.status === BookingStatus.Cancelled,
        ).length,
    };

    const tabs = (Object.keys(countByStatus) as BookingTab[]).map(key => ({
        label: `${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()} (${countByStatus[key]})`,
        key,
    }));

    return (
        <TabContainer>
            {tabs.map(tab => (
                <Tab
                    key={tab.key}
                    active={selectedTab === tab.key}
                    onClick={() => setActiveTab(tab.key)}
                >
                    {tab.label}
                </Tab>
            ))}
        </TabContainer>
    );
};
