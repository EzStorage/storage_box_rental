import { createFastContext } from "../../../helpers/createFastContext";

interface IBookingState {
    bookingId: string;
    receieverName?: string;
    step: number;
    errorMessage?: Record<string, string>;
}

const initalBookingState: IBookingState = {
    bookingId: "",
    step: 1,
};

export const {
    Provider: BookingProvider,
    useSelector: useBookingSelector,
    useCommit: useBookingCommit,
    useLazySelector: useBookingLazySelector,
    createSelector: createBookingSelector,
} = createFastContext<IBookingState>(initalBookingState);
