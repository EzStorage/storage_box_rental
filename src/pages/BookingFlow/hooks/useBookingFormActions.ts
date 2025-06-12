import { IBookingForm, useBookingCommit } from "../context";

export function useBookingFormActions() {
    const commit = useBookingCommit();

    const handleChangeField = (field: keyof IBookingForm, value: string | number) => {
        commit(prev => ({
            form: {
                ...prev.form,
                [field]: value,
            },
        }));
    };

    const handleChangeDeliveryField = (
        field: keyof IBookingForm["delivery"],
        value: string | number | Date,
    ) => {
        commit(prev => ({
            form: {
                ...prev.form,
                delivery: {
                    ...prev.form.delivery,
                    [field]: value,
                },
            },
        }));
    };

    const handleChangePickupField = (
        field: keyof IBookingForm["pickup"],
        value: string | number | Date,
    ) => {
        commit(prev => ({
            form: {
                ...prev.form,
                pickup: {
                    ...prev.form.pickup,
                    [field]: value,
                },
            },
        }));
    };

    const handleChangeReturnField = (
        field: keyof IBookingForm["return"],
        value: string | number | Date,
    ) => {
        commit(prev => ({
            form: {
                ...prev.form,
                return: {
                    ...prev.form.return,
                    [field]: value,
                },
            },
        }));
    };

    const validateField = (): boolean => {
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
        handleChangeDeliveryField,
        handleChangePickupField,
        handleChangeReturnField,
        validateField,
        handleSubmit,
        handleError,
    };
}
