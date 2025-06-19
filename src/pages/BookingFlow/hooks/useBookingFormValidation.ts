import { useBookingSelector } from "../context";

export function useBookingFormValidation() {
    const step = useBookingSelector(state => state.step);
    const deliveryLocation = useBookingSelector(state => state.form.delivery.location);
    const pickupLocation = useBookingSelector(state => state.form.pickup.location);
    const returnLocation = useBookingSelector(state => state.form.return.location);

    const validateFirstStep = () => {
        return true; // Placeholder for actual validation logic
    };
    const validateSecondStep = () => {
        return true; // Placeholder for actual validation logic
    };
    const validateThirdStep = () => {
        if (!deliveryLocation) return false;
        return true; // Placeholder for actual validation logic
    };
    const validateFourthStep = () => {
        if (!pickupLocation || !returnLocation) return false;
        return true; // Placeholder for actual validation logic
    };
    const validateFifthStep = () => {
        return true; // Placeholder for actual validation logic
    };

    const validateForm = () => {
        switch (step) {
            case 1:
                return validateFirstStep();
            case 2:
                return validateSecondStep();
            case 3:
                return validateThirdStep();
            case 4:
                return validateFourthStep();
            case 5:
                return validateFifthStep();
            default:
                return false;
        }
    };

    return {
        validateForm,
    };
}
