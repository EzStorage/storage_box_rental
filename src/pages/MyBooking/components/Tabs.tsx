import React from "react";
import { TabContainer, Tab } from "../styles";

type BookingTabsProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

export const BookingTabs: React.FC<BookingTabsProps> = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { label: "Upcoming (4)", key: "Upcoming" },
        { label: "Stored (0)", key: "Stored" },
        { label: "History (0)", key: "History" },
    ];

    return (
        <TabContainer>
            {tabs.map(tab => (
                <Tab
                    key={tab.key}
                    active={activeTab === tab.key}
                    onClick={() => setActiveTab(tab.key)}
                >
                    {tab.label}
                </Tab>
            ))}
        </TabContainer>
    );
};
