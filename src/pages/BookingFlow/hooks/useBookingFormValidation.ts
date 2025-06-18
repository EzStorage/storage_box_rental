import { useBookingSelector } from "../context";

export function useBookingFormValidation() {
    const step = useBookingSelector(state => state.step);
    const validateFirstStep = () => {
        return true; // Placeholder for actual validation logic
    };
    const validateSecondStep = () => {
        return true; // Placeholder for actual validation logic
    };
    const validateThirdStep = () => {
        return true; // Placeholder for actual validation logic
    };
    const validateFourthStep = () => {
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
