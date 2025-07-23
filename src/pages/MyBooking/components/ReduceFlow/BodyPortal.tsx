import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const BodyPortal = ({ children }: { children: React.ReactNode }) => {
    const elRef = useRef<HTMLDivElement | null>(null);

    if (!elRef.current && typeof document !== "undefined") {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const el = elRef.current!;
        document.body.appendChild(el);

        return () => {
            document.body.removeChild(el);
        };
    }, []);

    if (!elRef.current) return null;
    return createPortal(children, elRef.current);
};
