import { createFastContext } from "../../../helpers/createFastContext";

type DeliveryType = "Express" | "6-Hour slot";

interface ScheduleInfo {
    location: string;
    date: string;
    type: DeliveryType;
    time: string;
}

export interface IBookingState {
    bookingId: string;
    productId: string;
    quantity: number;
    commitmentPeriod: string;
    deliveryLocation: string;
    delivery: ScheduleInfo;
    pickup: ScheduleInfo;
    return: ScheduleInfo;
    step: number;
    errorMessage?: Record<string, string>;
}

const initalBookingState: IBookingState = {
    bookingId: "",
    productId: "",
    quantity: 2,
    commitmentPeriod: "1month",
    deliveryLocation: "",
    delivery: {
        location: "",
        type: "Express",
        date: "",
        time: "",
    },
    pickup: {
        location: "",
        type: "Express",
        date: "",
        time: "",
    },
    return: {
        location: "",
        type: "Express",
        date: "",
        time: "",
    },
    step: 1,
    errorMessage: {},
};

export const {
    Provider: BookingProvider,
    useSelector: useBookingSelector,
    useCommit: useBookingCommit,
    useLazySelector: useBookingLazySelector,
    createSelector: createBookingSelector,
} = createFastContext<IBookingState>(initalBookingState);
