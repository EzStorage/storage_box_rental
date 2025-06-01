import { useCallback, useLayoutEffect, useMemo, useState } from "react";

import { StorageHandleEvent } from "./interface";

import "./overrideStorageBehavior";
import { parseString } from "../../helpers/parser";

export enum StorageType {
    Local = "local",
    Session = "session",
}

const getStorage = (type: StorageType) =>
    type === StorageType.Session ? sessionStorage : localStorage;

export function useStorage<T = string>(
    type: StorageType,
    key: string,
): [T | null, (value?: T | null) => void] {
    const [localValue, setLocalValue] = useState(() => getStorage(type).getItem(key));

    const isSession = type === StorageType.Session;

    const parsedLocalValue = useMemo<T | null>(() => parseString<T>(localValue), [localValue]);

    const storage = useMemo(() => getStorage(type), [type]);

    const eventPrefix = useMemo(
        () => (isSession ? StorageHandleEvent.SessionChange : StorageHandleEvent.LocalChange),
        [isSession],
    );

    const eventClear = useMemo(
        () => (isSession ? StorageHandleEvent.SessionClear : StorageHandleEvent.LocalClear),
        [isSession],
    );

    const eventTrigger = useMemo(() => `${eventPrefix}${key}`, [eventPrefix, key]);

    const setValue = useCallback(
        (value?: T | null) => {
            if (value) {
                const savedValue = typeof value === "string" ? value : JSON.stringify(value);

                storage.setItem(key, savedValue);
            } else {
                storage.removeItem(key);
            }
        },
        [storage, key],
    );

    useLayoutEffect(() => {
        const handleChange = (evt: any) => {
            setLocalValue(evt.detail);
        };

        const handleClear = () => {
            setLocalValue(null);
        };

        const handleStorageChange = (evt: any) => {
            const { storageArea, newValue, oldValue, key: storageKey } = evt as StorageEvent;

            if (storageArea === storage && key === storageKey && newValue !== oldValue) {
                setLocalValue(newValue);
            }
        };

        document.addEventListener(eventTrigger, handleChange);
        document.addEventListener(eventClear, handleClear);
        window.addEventListener("storage", handleStorageChange);

        return () => {
            document.removeEventListener(eventTrigger, handleChange);
            document.removeEventListener(eventClear, handleClear);
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [eventTrigger, eventClear, storage, key]);

    return [parsedLocalValue, setValue];
}

export function useLocalStorage<T = string>(key: string) {
    return useStorage<T>(StorageType.Local, key);
}

export function useSessionStorage<T = string>(key: string) {
    return useStorage<T>(StorageType.Session, key);
}
