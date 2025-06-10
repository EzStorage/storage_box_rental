import { useMediaQuery, useTheme } from "@mui/material";
import {
    PaymentInformationBoxFeeContainer,
    PaymentInformationContainer,
    PaymentInformationDeliveryFeeContainer,
    PaymentInformationDeliveryFeeItem,
    PaymentInformationTitle,
} from "./PaymentInformation.styles";
import { useBookingSelector } from "@pages/booking/context";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { DURATION_PLANS } from "../DurationSelector/constants";
import { useMemo } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { formatAmount } from "@helpers/amount";

export function PaymentInformation() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    const quantity = useBookingSelector(state => state.form.quantity);
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);

    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const plans = DURATION_PLANS.find(m => m.id === commitmentPeriod);
    const month = (plans?.days ?? 0) / 30;

    const unitPrice = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []),
        [quantity, product.bulkPricingTiers],
    );

    const totalAmount = useMemo(
        () => unitPrice * month * quantity,
        [quantity, month, product.bulkPricingTiers, unitPrice],
    );

    return (
        <>
            {isMobile && <PaymentInformationTitle>Payment Information</PaymentInformationTitle>}{" "}
            <PaymentInformationContainer>
                <PaymentInformationBoxFeeContainer>
                    <div>
                        <div>Box storage fee</div>
                        <div>{formatAmount(totalAmount)}</div>
                    </div>
                    <div>
                        {formatAmount(unitPrice)} x {quantity} boxes x {plans?.title} ({plans?.days}{" "}
                        days)
                    </div>
                </PaymentInformationBoxFeeContainer>

                <PaymentInformationDeliveryFeeContainer>
                    <div>Delivery fee</div>
                    <div>
                        <PaymentInformationDeliveryFeeItem>
                            <div>Empty Box Drop-off fee</div>
                            <div>{formatAmount(5.99)}</div>
                        </PaymentInformationDeliveryFeeItem>
                        <PaymentInformationDeliveryFeeItem>
                            <div>Packed Box Pick-up fee</div>
                            <div>{formatAmount(0)}</div>
                        </PaymentInformationDeliveryFeeItem>
                        <PaymentInformationDeliveryFeeItem>
                            <div>Packed box drop-off fee</div>
                            <div>{formatAmount(12.99)}</div>
                        </PaymentInformationDeliveryFeeItem>
                    </div>
                </PaymentInformationDeliveryFeeContainer>
            </PaymentInformationContainer>
        </>
    );
}
