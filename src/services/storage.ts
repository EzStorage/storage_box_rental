function get(key: string): null | string;
function get<T>(key: string, parser: (value: string) => T): null | T;
function get<T>(key: string, parser?: (value: string) => T) {
    const localValue = localStorage.getItem(key);

    if (!localValue) {
        return null;
    }

    if (!parser) {
        return localValue;
    }

    return parser(localValue);
}

export const storage = {
    get,

    set(key: string, value: any) {
        if (typeof value === "function") {
            throw Error("Cannot set a function as value in LocalStorage");
        }

        let storeValue = value;

        if (typeof storeValue === "object") {
            storeValue = JSON.stringify(value);
        }

        localStorage.setItem(key, storeValue);
    },

    remove(key: string) {
        localStorage.removeItem(key);
    },

    clear() {
        localStorage.clear();
    },

    defaultParser<T>(value: string) {
        return JSON.parse(value) as T;
    },
};
