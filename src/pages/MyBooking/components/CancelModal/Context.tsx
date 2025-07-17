import { createFastContext } from "../../../../helpers/createFastContext";

export type CancelModalStore = {
    open: boolean;
    reason: string;
    details: string;
    isLoading: boolean;
};

const initialState: CancelModalStore = {
    open: false,
    reason: "",
    details: "",
    isLoading: false,
};

export const {
    Provider: CancelModalProvider,
    useSelector: useCancelModalSelector,
    useCommit: useCancelModalCommit,
    createSelector: createCancelModalSelector,
} = createFastContext<CancelModalStore>(initialState);

export const selectCancelModalOpen = createCancelModalSelector([state => state.open], open => open);
