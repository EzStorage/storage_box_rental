import { useNavigate } from "react-router-dom";
import { ReduceFlowCommit, ReduceFlowSelector } from "./Context";
import { fakeRequest } from "src/services/mockHttp";

export function useReduceTimeController() {
    const commit = ReduceFlowCommit();
    const navigate = useNavigate();
    const state = ReduceFlowSelector(s => s);
    const open = () => commit({ open: true });
    const close = () =>
        commit({
            open: false,
            date: "",
            isLoading: false,
        });

    const handleProceed = async () => {
        commit(prev => ({ ...prev, isLoading: true }));
        try {
            await fakeRequest({ resolve: () => ({}) });
            navigate("/reduce_time/success");
        } catch (error) {
            console.error("Reduce Time Failed", error);
        } finally {
            commit(prev => ({ ...prev, isLoading: false }));
        }
    };

    return { open, close, handleProceed };
}
