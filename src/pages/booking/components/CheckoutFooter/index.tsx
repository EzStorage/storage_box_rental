import MyButton from "@components/Button/MyButton";
import {
    CheckoutFooterActions,
    CheckoutFooterAddCardIconButton,
    CheckoutFooterContainer,
    CheckoutFooterPricing,
    CheckoutFooterTitle,
} from "./CheckoutFooter.styles";
import ShopCartIcon from "@components/Icons/ShopCartIcon";
import { useMediaQuery, useTheme } from "@mui/material";
import { useBookingCommit, useBookingSelector } from "@pages/booking/context";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { useMemo } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { DURATION_PLANS } from "../DurationSelector/constants";
import { formatAmount } from "@helpers/amount";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

export function CheckoutFooter() {
    const theme = useTheme();

    const commit = useBookingCommit();
    const step = useBookingSelector(state => state.step);
    const quantity = useBookingSelector(state => state.form.quantity);
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);

    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const month = (DURATION_PLANS.find(m => m.id === commitmentPeriod)?.days ?? 0) / 30;

    const totalAmount = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []) * month * quantity,
        [quantity, month, product.bulkPricingTiers],
    );

    const handleStep = (value: number) => {
        commit({ step: value });
    };

    const AddToCardButton = () => {
        if (isMobile) {
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
                {!isMobile && "Add to cart"}
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
                            startIcon={!isMobile && <IoChevronUp />}
                            onClick={() => handleStep(step - 1)}
                        >
                            Back
                        </MyButton>
                    )}

                    {step !== 5 ? (
                        <MyButton
                            variantType="primary"
                            fullWidth
                            endIcon={!isMobile && <IoChevronDown />}
                            onClick={() => handleStep(step + 1)}
                        >
                            Next
                        </MyButton>
                    ) : (
                        <MyButton variantType="primary" fullWidth>
                            Go to checkout
                        </MyButton>
                    )}
                </CheckoutFooterActions>
            </div>
        </CheckoutFooterContainer>
    );
}
