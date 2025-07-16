import { useNavigate } from "react-router-dom";
import { useCancelModalCommit } from "./Context";
import { fakeRequest } from "src/services/mockHttp";

export function useCancelModalController() {
    const commit = useCancelModalCommit();
    const navigate = useNavigate();

    const open = () => commit(prev => ({ ...prev, open: true }));
    const close = () => commit(prev => ({ ...prev, open: false }));

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

