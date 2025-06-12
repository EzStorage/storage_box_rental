import { createFastContext } from "../../../helpers/createFastContext";

export type TimeType = "express" | "6HourSlot";

export interface ScheduleInfo {
    location: string;
    date: Date;
    timeType: TimeType;
    timeSlot: string;
}

export interface IBookingForm {
    bookingId: string;
    productId: string;
    quantity: number;
    commitmentPeriod: string;
    deliveryLocation: string;
    delivery: ScheduleInfo;
    pickup: ScheduleInfo;
    return: ScheduleInfo;
    emptyDuration: number;
}

export interface IBookingState {
    step: number;
    errorMessage?: Record<string, string>;
    form: IBookingForm;
}

const initalBookingState: IBookingState = {
    form: {
        bookingId: "",
        productId: "",
        quantity: 2,
        commitmentPeriod: "1M",
        deliveryLocation: "",
        delivery: {
            location: "",
            date: new Date(),
            timeType: "6HourSlot",
            timeSlot: "8am-2pm",
        },
        pickup: {
            location: "",
            date: new Date(),
            timeType: "6HourSlot",
            timeSlot: "8am-2pm",
        },
        return: {
            location: "",
            date: new Date(),
            timeType: "6HourSlot",
            timeSlot: "8am-2pm",
        },
        emptyDuration: 7,
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
