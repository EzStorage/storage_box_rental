import React from "react";
import { TabContainer, Tab } from "../styles";
import { useMyBookingSelector, useMyBookingCommit } from "../context";
import { BookingTab } from "../../../constants/Enums";
export const BookingTabs: React.FC = () => {
    const selectedTab = useMyBookingSelector(state => state.selectedTab);
    const bookings = useMyBookingSelector(state => state.bookings);
    const commit = useMyBookingCommit();

    const setActiveTab = (tab: BookingTab) => {
        commit(() => ({
            selectedTab: tab,
        }));
    };

    const countByStatus = {
        Upcoming: bookings.filter(b =>
            ["Awaiting Pickup", "Box to be delivered"].includes(b.status),
        ).length,
        Stored: bookings.filter(b => b.status === "Stored").length,
        History: bookings.filter(b => b.status === "Returned").length,
    };

    const tabs = [
        { label: `Upcoming (${countByStatus.Upcoming})`, key: "Upcoming" },
        { label: `Stored (${countByStatus.Stored})`, key: "Stored" },
        { label: `History (${countByStatus.History})`, key: "History" },
    ];

    return (
        <TabContainer>
            {tabs.map(tab => (
                <Tab
                    key={tab.key}
                    active={selectedTab === tab.key}
                    onClick={() => setActiveTab(tab.key as BookingTab)}
                >
                    {tab.label}
                </Tab>
            ))}
        </TabContainer>
    );
};
