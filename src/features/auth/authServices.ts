import axios from "axios";
import { VerifyOTPPayload } from "src/types/auth.type";

export const postOtp = async (phoneNumber: string, otp: string[]): Promise<VerifyOTPPayload> => {
    if (otp.join("") === "123456") {
        return {
            data: {
                user: {
                    id: "1",
                    name: "Nhi Nguyen",
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
