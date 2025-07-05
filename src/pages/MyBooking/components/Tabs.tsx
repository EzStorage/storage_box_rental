import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TabContainer, Tab } from "../styles";
import { useMyBookingSelector, useMyBookingCommit } from "../context";
import { BookingTab, BookingStatus } from "../../../constants/Enums";

export const BookingTabs: React.FC = () => {
    const selectedTab = useMyBookingSelector(state => state.selectedTab);
    const bookings = useMyBookingSelector(state => state.bookings);
    const commit = useMyBookingCommit();
    const location = useLocation();

    useEffect(() => {
        const tab = location.state?.tab ?? BookingTab.Upcoming;

        if (tab) {
            commit ({
                selectedTab: tab,
            });
        }
    }, [location.state, commit]);

    const setActiveTab = (tab: BookingTab) => {
        commit(() => ({
            selectedTab: tab,
        }));
    };

    const countByStatus = {
        Upcoming: bookings.filter(
            b =>
                b.status === BookingStatus.AwaitingPickup ||
                b.status === BookingStatus.BoxToBeDelivered,
        ).length,
        Stored: bookings.filter(b => b.status === BookingStatus.Stored).length,
        History: bookings.filter(
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
