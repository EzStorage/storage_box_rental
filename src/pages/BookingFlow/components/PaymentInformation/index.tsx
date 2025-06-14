import {
    PaymentInformationBoxFeeContainer,
    PaymentInformationContainer,
    PaymentInformationDeliveryFeeContainer,
    PaymentInformationDeliveryFeeItem,
    PaymentInformationTitle,
} from "./PaymentInformation.styles";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { useMemo } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { formatAmount } from "@helpers/amount";
import { DURATION_PLANS } from "@pages/BookingFlow/constants";
import { useScreenSize } from "@hooks/useScreenSize";
import { differenceInDays } from "date-fns";

export function PaymentInformation() {
    const { isDesktop } = useScreenSize();

    const quantity = useBookingSelector(state => state.form.quantity);
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    const differenceDays =
        typeof commitmentPeriod === "object" &&
        typeof commitmentPeriod !== null &&
        differenceInDays(commitmentPeriod.endDate, commitmentPeriod.startDate);
    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const plans = DURATION_PLANS.find(m => m.id === commitmentPeriod);
    const months = (Number(plans?.days ?? differenceDays) || 0) / 30;

    const unitPrice = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []),
        [quantity, product.bulkPricingTiers],
    );
    const totalAmount = useMemo(() => unitPrice * months * quantity, [quantity, months, unitPrice]);

    return (
        <>
            {!isDesktop && <PaymentInformationTitle>Payment Information</PaymentInformationTitle>}{" "}
            <PaymentInformationContainer>
                <PaymentInformationBoxFeeContainer>
                    <div>
                        <div>Box storage fee</div>
                        <div>{formatAmount(totalAmount)}</div>
                    </div>
                    <div>
                        {formatAmount(unitPrice)} x {quantity} boxes x{" "}
                        {plans
                            ? `${plans.title} (${plans.days} ${plans.days <= 1 ? "day" : "days"})`
                            : `${typeof differenceDays === "number" ? `${differenceDays} ${differenceDays <= 1 ? "day" : "days"}` : ""}`}
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
