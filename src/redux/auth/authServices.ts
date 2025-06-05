import { VerifyOTPPayload } from "src/types/auth.type";

export const postOtp = async (phoneNumber: string, otp: string[]): Promise<VerifyOTPPayload> => {
    if (otp.join("") === "123456") {
        return {
            data: {
                user: {
                    id: "1",
                    name: "Nhi Nguyen",
                    phone: phoneNumber,
                    upcomingBooking: 0,
                    storedBooking: 6,
                    historyBooking: 12,
                },
                token: "12345",
            },
        };
    }
    throw {
        response: {
            status: 401,
            data: {
                message: "Invalid OTP code",
            },
        },
    };
};
