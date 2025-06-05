import axios, { AxiosRequestConfig, isCancel } from "axios";
import { storage } from "./storage";

export interface IRequestConfig extends AxiosRequestConfig {
    ignoreToken?: boolean;
}

export class HttpClient {
    static isAbort = isCancel;

    private TokenStorageName: string;

    constructor(tokenName: string) {
        this.TokenStorageName = tokenName;
    }

    private getBearerToken = () => {
        const token = storage.get(this.TokenStorageName);

        return token && `Bearer ${token}`;
    };

    private getHeaders = (ignoreToken?: boolean, defaulHeaders?: AxiosRequestConfig["headers"]) => {
        const headers: AxiosRequestConfig["headers"] = { ...defaulHeaders };

        if (!ignoreToken) {
            headers.Authorization = this.getBearerToken();
        }

        headers["x-timezone"] = Intl.DateTimeFormat().resolvedOptions().timeZone;

        return headers;
    };

    private parseOptions = (options?: IRequestConfig) => {
        const { ignoreToken, ...requestOpts } = options || {};

        const opts: AxiosRequestConfig = {
            ...requestOpts,
            headers: this.getHeaders(ignoreToken, requestOpts.headers),
        };

        return opts;
    };

    get = async <T = any>(url: string, params?: Record<string, any>, options?: IRequestConfig) => {
        const { data } = await axios.get<T>(url, {
            ...this.parseOptions(options),
            params,
        });

        return data;
    };

    delete = async <T = any>(
        url: string,
        params?: Record<string, any>,
        options?: IRequestConfig,
    ) => {
        const { data } = await axios.delete<T>(url, {
            ...this.parseOptions(options),
            params,
        });

        return data;
    };

    post = async <T = any>(url: string, payload?: any, options?: IRequestConfig) => {
        const { data } = await axios.post<T>(url, payload, this.parseOptions(options));

        return data;
    };

    put = async <T = any>(url: string, payload?: any, options?: IRequestConfig) => {
        const { data } = await axios.put<T>(url, payload, this.parseOptions(options));

        return data;
    };

    patch = async <T = any>(url: string, payload?: any, options?: IRequestConfig) => {
        const { data } = await axios.patch<T>(url, payload, this.parseOptions(options));

        return data;
    };

    isAbort = isCancel;
}

export const http = new HttpClient("token");

export interface Request<T = any> {
    resolve: () => T | PromiseLike<T>;
    reject?: () => any;
    failRate?: number;
    duration?: number;
}

export interface Response<T> {
    data: T;
    error: null | any;
}

export function isAbortError(err: any): boolean {
    return http.isAbort(err);
}
