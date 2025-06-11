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
import { useBookingCommit, useBookingSelector } from "@pages/booking/context";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { useEffect, useMemo } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { formatAmount } from "@helpers/amount";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { useScreenSize } from "@hooks/useScreenSize";
import { DURATION_PLANS } from "@pages/booking/constants";

export function CheckoutFooter() {
    const theme = useTheme();
    const { isDesktop } = useScreenSize();

    const commit = useBookingCommit();
    const step = useBookingSelector(state => state.step);
    const quantity = useBookingSelector(state => state.form.quantity);
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);

    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const month = (DURATION_PLANS.find(m => m.id === commitmentPeriod)?.days ?? 0) / 30;

    const totalAmount = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []) * month * quantity,
        [quantity, month, product.bulkPricingTiers],
    );

    const handleNext = () => {
        const nextStep = step + 1;
        commit({ step: nextStep });
        setTimeout(() => {
            const nextSection = document.getElementById(`step-${nextStep}`);
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.getBoundingClientRect().top + window.pageYOffset - 40,
                    behavior: "smooth",
                });
            }
        });
    };

    const handleBack = () => {
        const nextStep = step - 1;
        const nextSection = document.getElementById(`step-${nextStep}`);
        if (nextSection) {
            window.scrollTo({
                top: nextSection.getBoundingClientRect().top + window.pageYOffset - 40,
                behavior: "smooth",
            });
        }
        setTimeout(() => {
            commit({ step: nextStep });
        }, 500);
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
