export function parseString<T = any>(string?: string | null) {
    try {
        return JSON.parse(string as string) as T;
    } catch {
        return string as unknown as T;
    }
}
