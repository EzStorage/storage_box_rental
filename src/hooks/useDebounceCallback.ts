import { type DependencyList, useCallback, useRef } from "react";
import { useInstantValue } from "./useInstantValue";

type Callback = (...arg: any[]) => any;

export function useDebounceCallback<T extends Callback>(
    callback: T,
    timeout?: number,
    dependencies?: DependencyList,
) {
    const timeoutValue = timeout ?? 250;
    const timeoutRef = useRef<number>(undefined);
    const callbackRef = useInstantValue(callback);

    // biome-ignore lint/correctness/useExhaustiveDependencies: legacy
    const debounceCallback = useCallback(
        (...args: Parameters<T>) => {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = window.setTimeout(() => {
                callbackRef.current?.(...args);
            }, timeoutValue);
        },
        dependencies || [callbackRef, timeoutValue],
    );

    return debounceCallback;
}
