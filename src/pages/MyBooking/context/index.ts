import { createFastContext } from "@helpers/createFastContext";

interface IMyBooking {
    bookingId: string;
}

interface IMyBookingState {
    data: IMyBooking[];
}

const initialMyBookingState: IMyBookingState = {
    data: [],
};

export const {
    Provider: MyBookingProvider,
    useCommit: useMyBookingCommit,
    useSelector: useMyBookingSelector,
    useLazySelector: useMyBookingLazySelector,
} = createFastContext(initialMyBookingState);
