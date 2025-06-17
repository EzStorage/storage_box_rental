import React from "react";
import { TabContainer, Tab } from "../styles";
import { useMyBookingSelector } from "../context";

type BookingTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const BookingTabs: React.FC<BookingTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const bookings = useMyBookingSelector(state => state.bookings);

  const countByStatus = {
    Upcoming: bookings.filter(b =>
      ["Awaiting Pickup", "Box to be delivered"].includes(b.status)
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
          active={activeTab === tab.key}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </Tab>
      ))}
    </TabContainer>
  );
};
