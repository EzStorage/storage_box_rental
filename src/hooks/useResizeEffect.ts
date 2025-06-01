import { useEffect } from "react";
import { useInstantValue } from "./useInstantValue";

export function useResizeEffect(callback?: () => void) {
    const callbackRef = useInstantValue(callback);

    useEffect(() => {
        let resizeTimeout: number | undefined;

        const handleResize = () => {
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(() => {
                callbackRef.current?.();
            }, 250);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.clearTimeout(resizeTimeout);
            window.removeEventListener("resize", handleResize);
        };
    }, [callbackRef]);
}
