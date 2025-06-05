import { Request } from "./http";

export function getRandomInt(min: number, max: number) {
    const minVal = Math.ceil(min);
    const maxVal = Math.floor(max);
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

export function fakeRequest<T = any>(params: Request<T>) {
    return new Promise<T>((resolve, reject) => {
        window.setTimeout(
            () => {
                const willResolve = !params.failRate || Math.random() < 1 - params.failRate;

                if (willResolve) {
                    resolve(params.resolve());
                } else {
                    reject(params.reject?.());
                }
            },
            params.duration ?? getRandomInt(2000, 4000),
        );
    });
}
