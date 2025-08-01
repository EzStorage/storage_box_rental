import MyButton from "@components/Button/MyButton";
import {
    CheckoutFooterActions,
    CheckoutFooterAddCardIconButton,
    CheckoutFooterContainer,
    CheckoutFooterPricing,
    CheckoutFooterTitle,
} from "./CheckoutFooter.styles";
import ShopCartIcon from "@components/Icons/ShopCartIcon";
import { useTheme } from "@mui/material";
import { useBookingCommit, useBookingSelector } from "@pages/BookingFlow/context";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { useMemo } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { formatAmount } from "@helpers/amount";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { useScreenSize } from "@hooks/useScreenSize";
import { DURATION_PLANS } from "@pages/BookingFlow/constants";
import { differenceInDays } from "date-fns";
import { useBookingFormValidation } from "@pages/BookingFlow/hooks/useBookingFormValidation";

export function CheckoutFooter() {
    const theme = useTheme();
    const { isDesktop } = useScreenSize();
    const { validateForm } = useBookingFormValidation();

    const commit = useBookingCommit();
    const step = useBookingSelector(state => state.step);
    const quantity = useBookingSelector(state => state.form.quantity);
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    const differenceDays =
        typeof commitmentPeriod === "object" &&
        commitmentPeriod !== null &&
        differenceInDays(commitmentPeriod.endDate, commitmentPeriod.startDate);

    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const plans = DURATION_PLANS.find(m => m.id === commitmentPeriod);
    const months = (Number(plans?.days ?? differenceDays) || 0) / 30;
    const totalAmount = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []) * months * quantity,
        [quantity, months, product.bulkPricingTiers],
    );

    const handleNext = () => {
        if (!validateForm()) {
            return;
        }
        const nextStep = step + 1;

        commit({ step: nextStep });

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    const handleBack = () => {
        const nextStep = step - 1;

        commit({ step: nextStep });

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    const AddToCardButton = () => {
        if (!isDesktop) {
            return (
                <CheckoutFooterAddCardIconButton>
                    <ShopCartIcon width={20} color={theme.palette.textCustom.greyBase} />
                </CheckoutFooterAddCardIconButton>
            );
        }
        return (
            <MyButton
                variantType="secondary"
                fullWidth
                startIcon={<ShopCartIcon width={20} color={theme.palette.textCustom.greyBase} />}
            >
                {isDesktop && "Add to cart"}
            </MyButton>
        );
    };

    return (
        <CheckoutFooterContainer>
            <div>
                <div>
                    <CheckoutFooterTitle>Total amount</CheckoutFooterTitle>
                    <CheckoutFooterPricing>{formatAmount(totalAmount)}</CheckoutFooterPricing>
                </div>
                <CheckoutFooterActions>
                    {step === 1 ? (
                        <AddToCardButton />
                    ) : (
                        <MyButton
                            variantType="back"
                            fullWidth
                            startIcon={isDesktop && <IoChevronUp />}
                            onClick={handleBack}
                        >
                            Back
                        </MyButton>
                    )}

                    {step !== 5 ? (
                        <MyButton
                            variantType="primary"
                            fullWidth
                            endIcon={isDesktop && <IoChevronDown />}
                            onClick={handleNext}
                            disabled={!validateForm()}
                        >
                            Next
                        </MyButton>
                    ) : (
                        <MyButton variantType="primary" fullWidth>
                            {!isDesktop ? "Checkout" : "Go to checkout"}
                        </MyButton>
                    )}
                </CheckoutFooterActions>
            </div>
        </CheckoutFooterContainer>
    );
}
