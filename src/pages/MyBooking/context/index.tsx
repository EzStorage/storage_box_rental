import { createFastContext } from "../../../helpers/createFastContext";

// Booking item structure
export type BookingItem = {
  id: string;
  productName: string;
  quantity: number;
  startDate: string;
  endDate: string;
  status: string;
  address:string;
  duration:string; // e.g., "Awaiting Pickup", "Stored", "Returned", etc.
};

// Global booking state structure
export interface IMyBookingState {
  bookings: BookingItem[];
  selectedTab: string; // "Upcoming", "Stored", "History"
}

// Initial global state
const initialBookingState: IMyBookingState = {
  bookings: [
    {
  id: "B001",
  productName: "Storage Box A",
  quantity: 2,
  startDate: "15 Jun 2025",
  endDate: "15 Jul 2025",
  status: "Awaiting Pickup",
  address: "123 Changi, Singapore",
  duration: "6 months (180 days)"
},
{
  id: "B002",
  productName: "Storage Box B",
  quantity: 1,
  startDate: "10 Jun 2025",
  endDate: "10 Jul 2025",
  status: "Stored",
  address: "123 Changi, Singapore",
  duration: "6 months (180 days)"
},
{
  id: "B003",
  productName: "Storage Box C",
  quantity: 3,
  startDate: "10 Jan 2025",
  endDate: "10 Jun 2025",
  status: "Returned",
  address: "123 Changi, Singapore",
  duration: "6 months (180 days)"
},
  ],
  selectedTab: "Upcoming", // default tab to sync with MyBooking.tsx
};

// Create fast context
export const {
  Provider: MyBookingProvider,
  useSelector: useMyBookingSelector,
  useCommit: useMyBookingCommit,
  useLazySelector: useMyBookingLazySelector,
  createSelector: createMyBookingSelector,
} = createFastContext<IMyBookingState>(initialBookingState);
