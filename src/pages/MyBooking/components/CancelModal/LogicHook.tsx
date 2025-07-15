import { useNavigate } from "react-router-dom";
import { useCancelModalCommit } from "./Context";
import { fakeRequest } from "src/services/mockHttp";

export const useCancelModalLogic = () => {
    const commit = useCancelModalCommit();
    const navigate = useNavigate();

    const open = () => commit({ open: true });
    const close = () => commit({ open: false });

    const handleProceed = async () => {
        commit({ isLoading: true });
        try {
            await fakeRequest({ resolve: () => ({}) });
            navigate("/cancellation/success");
        } catch (error) {
            console.error("Cancellation failed", error);
        } finally {
            commit({ isLoading: false });
        }
    };

    return { open, close, handleProceed };
};
export function useCancelModalActions() {
    const commit = useCancelModalCommit();

    const openModal = () => {
        commit(prev => ({ ...prev, open: true }));
    };

    const closeModal = () => {
        commit(prev => ({ ...prev, open: false }));
    };

    return { openModal, closeModal };
}
