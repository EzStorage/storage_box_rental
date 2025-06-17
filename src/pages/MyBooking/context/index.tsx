import { createFastContext } from "../../../helpers/createFastContext";

export type BookingItem = {
    id: string;
    productName: string;
    quantity: number;
    deliveryDate: string;
    pickupDate: string;
    status: string;
};

export interface IMyBookingState {
    bookings: BookingItem[];
    selectedTab: string;
}

const initialBookingState: IMyBookingState = {
    bookings: [
        {
            id: "B001",
            productName: "Storage Box A",
            quantity: 2,
            deliveryDate: "2025-06-15",
            pickupDate: "2025-07-15",
            status: "Delivered",
        },
        {
            id: "B002",
            productName: "Storage Box B",
            quantity: 1,
            deliveryDate: "2025-06-10",
            pickupDate: "2025-07-10",
            status: "In Transit",
        },
    ],
    selectedTab: "all",
};

export const {
    Provider: MyBookingProvider,
    useSelector: useMyBookingSelector,
    useCommit: useMyBookingCommit,
    useLazySelector: useMyBookingLazySelector,
    createSelector: createMyBookingSelector,
} = createFastContext<IMyBookingState>(initialBookingState);
