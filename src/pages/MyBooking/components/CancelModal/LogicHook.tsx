import { useNavigate } from "react-router-dom";
import { useCancelModalCommit, useCancelModalSelector } from "./Context";
import { fakeRequest } from "src/services/mockHttp";

export function useCancelModalController() {
    const commit = useCancelModalCommit();
    const navigate = useNavigate();
    const state = useCancelModalSelector(s => s);
    const open = () => commit({ open: true });
    const close = () =>
        commit({
            open: false,
            reason: "",
            details: "",
            isLoading: false,
        });

    const handleProceed = async () => {
        commit(prev => ({ ...prev, isLoading: true }));
        try {
            await fakeRequest({ resolve: () => ({}) });
            navigate("/cancellation/success");
        } catch (error) {
            console.error("Cancellation failed", error);
        } finally {
            commit(prev => ({ ...prev, isLoading: false }));
        }
    };

    return { open, close, handleProceed };
}
