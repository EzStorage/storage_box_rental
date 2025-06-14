import CalendarIcon from "@components/Icons/CalendarIcon";
import HomeIcon from "@components/Icons/HomeIcon";
import UserIcon from "@components/Icons/UserIcon";

export type NavigationItem = {
    id: string;
    title: string;
    Icon: React.ComponentType<any>;
    url: string;
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { id: "home", title: "Home", Icon: HomeIcon, url: "/" },
    { id: "booking", title: "My Bookings", Icon: CalendarIcon, url: "/my-booking" },
    { id: "profile", title: "Profile", Icon: UserIcon, url: "/profile" },
];
