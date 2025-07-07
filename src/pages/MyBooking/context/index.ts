import { createFastContext } from "../../../helpers/createFastContext";
import { mockBookings } from "../../../constants/MockData";
import { BookingTab } from "../../../constants/Enums";
export type BookingItem = {
    id: string;
    productName: string;
    quantity: number;
    startDate: string;
    endDate: string;
    status: string;
    address: string;
    duration: string;
    paymentMode?: "CreditCard" | "PAYNOW" | "ApplePay";
    cardNumber?: string; 
};

export interface IMyBookingState {
    bookings: BookingItem[];
    selectedTab: BookingTab;
}

const initialBookingState: IMyBookingState = {
    bookings: mockBookings,
    selectedTab: BookingTab.Upcoming,
};

export const {
    Provider: MyBookingProvider,
    useSelector: useMyBookingSelector,
    useCommit: useMyBookingCommit,
    useLazySelector: useMyBookingLazySelector,
    createSelector: createMyBookingSelector,
} = createFastContext<IMyBookingState>(initialBookingState);
