export interface User {
    id: string;
    name: string;
    phone: string;
    upcomingBooking: number;
    storedBooking: number;
    historyBooking: number;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export type VerifyOTPPayload = {
    data: {
        user: User;
        token: string;
    };
};
