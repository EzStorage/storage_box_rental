import { StorageHandleEvent } from "./interface";

function triggerCustomEvent(
    storageThis: Storage,
    eventName: {
        local: string;
        session: string;
    },
    detail?: any,
) {
    let customEvent: CustomEvent | null = null;

    if (storageThis === window.localStorage) {
        customEvent = new CustomEvent(eventName.local, { detail });
    } else if (storageThis === window.sessionStorage) {
        customEvent = new CustomEvent(eventName.session, { detail });
    }

    if (customEvent) {
        document.dispatchEvent(customEvent);
    }
}

// Handle Storage Set Item
const originalSetItem = Storage.prototype.setItem;
Storage.prototype.setItem = function (...args) {
    const [key, value] = args;

    originalSetItem.apply(this, args);

    triggerCustomEvent(
        this,
        {
            local: `${StorageHandleEvent.LocalChange}${key}`,
            session: `${StorageHandleEvent.SessionChange}${key}`,
        },
        value,
    );
};

// Handle Storage Remove Item
const originalRemoveItem = Storage.prototype.removeItem;
Storage.prototype.removeItem = function (...args) {
    const [key] = args;

    originalRemoveItem.apply(this, args);

    triggerCustomEvent(
        this,
        {
            local: `${StorageHandleEvent.LocalChange}${key}`,
            session: `${StorageHandleEvent.SessionChange}${key}`,
        },
        null,
    );
};

// Handle Storage Clear Items
const originalClearItems = Storage.prototype.clear;
Storage.prototype.clear = function (...args) {
    originalClearItems.apply(this, args);

    triggerCustomEvent(this, {
        local: StorageHandleEvent.LocalClear,
        session: StorageHandleEvent.SessionClear,
    });
};
