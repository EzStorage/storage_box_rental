import { useNavigate } from "react-router-dom";
import { useReduceFlowCommit, useReduceFlowSelector } from "./Context";
import { fakeRequest } from "src/services/mockHttp";

export function useReduceTimeController() {
    const commit = useReduceFlowCommit();
    const navigate = useNavigate();
    const state = useReduceFlowSelector(s => s);
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
            navigate("/reduce/success");
        } catch (error) {
            console.error("Reduce Time Failed", error);
        } finally {
            commit(prev => ({ ...prev, isLoading: false }));
        }
    };

    return { open, close, handleProceed };
}
