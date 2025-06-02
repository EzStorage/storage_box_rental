import { useBookingCommit } from "../context";

export function useBookingFormActions() {
    const commit = useBookingCommit();

    const handleChangeField = (field: string, value: string) => {
        commit({ [field]: value });
    };

    const validateField = (field: string, value: string): boolean => {
        // Example validation logic
        return true;
    };

    const handleSubmit = async () => {
        try {
            // Simulate form submission
            console.log("Submitting form with data:", {
                bookingId: "12345", // Example booking ID
                // Add other fields as needed
            });
            // Here you would typically call an API to submit the data
        } catch (error) {
            console.error("Failed to submit form:", error);
        }
    };

    const handleError = () => {
        return "Error";
    };

    return {
        handleChangeField,
        validateField,
        handleSubmit,
        handleError,
    };
}
