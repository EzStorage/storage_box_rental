import { createFastContext } from "../../../../helpers/createFastContext";

export type ReduceFlowStore = {
    open: boolean;
    date: string;
    isLoading: boolean;
};

const initialState: ReduceFlowStore = {
    open: false,
    date: "",
    isLoading: false,
};

export const {
    Provider: ReduceFlowProvider,
    useSelector: ReduceFlowSelector,
    useCommit: ReduceFlowCommit,
    createSelector: createReduceFlowSelector,
} = createFastContext<ReduceFlowStore>(initialState);

export const selectReduceFlowOpen = createReduceFlowSelector([state => state.open], open => open);
