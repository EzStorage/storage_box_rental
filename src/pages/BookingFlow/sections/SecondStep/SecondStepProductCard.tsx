import { ProductImage } from "@components/ProductCard/ProductImage";
import {
    ProductCardContainer,
    ProductChipContainer,
    ProductDescription,
    ProductDivider,
    ProductEstimateFeeContainer,
    ProductEstimateFeePricing,
    ProductEstimateFeeTitle,
    ProductInfoContainer,
} from "./SecondStep.styles";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { ProductTitle } from "@components/ProductCard/ProductTitle";
import { ProductChip } from "@components/ProductCard/ProductChip";
import { ProductOriginalPrice } from "@components/ProductCard/ProductOriginalPrice";
import { ProductDiscountedPrice } from "@components/ProductCard/ProductDiscountedPrice";
import { formatAmount } from "@helpers/amount";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { useMemo } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { DURATION_PLANS } from "@pages/BookingFlow/constants";
import { differenceInDays } from "date-fns";

export function SecondStepProductCard() {
    const quantity = useBookingSelector(state => state.form.quantity);
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);

    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const differenceDays =
        typeof commitmentPeriod === "object" &&
        commitmentPeriod !== null &&
        differenceInDays(commitmentPeriod.endDate, commitmentPeriod.startDate);
    const plans = DURATION_PLANS.find(m => m.id === commitmentPeriod);
    const months = (Number(plans?.days ?? differenceDays) || 0) / 30;

    const unitPrice = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []),
        [quantity, product.bulkPricingTiers],
    );

    return (
        <ProductCardContainer>
            <div>
                <ProductImage src={product.image} alt={product.id} />
            </div>
            <ProductInfoContainer>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductChipContainer>
                    <ProductChip label={product.dimensions} />
                    <ProductChip label={`Max ${product.maxWeightKg}kg`} />
                </ProductChipContainer>
                <ProductEstimateFeeContainer>
                    <ProductEstimateFeeTitle>Estimate fees</ProductEstimateFeeTitle>
                    <ProductEstimateFeePricing>
                        <ProductOriginalPrice>
                            {formatAmount(product.originalPrice * quantity * months)}
                        </ProductOriginalPrice>
                        <ProductDiscountedPrice>
                            {formatAmount(unitPrice * quantity * months)}
                        </ProductDiscountedPrice>
                    </ProductEstimateFeePricing>
                </ProductEstimateFeeContainer>
                <ProductDivider />
                <ProductDescription>
                    {formatAmount(unitPrice)} x {quantity} boxes x{" "}
                    {plans
                        ? `${plans.title} (${plans.days} ${plans.days <= 1 ? "day" : "days"})`
                        : `${typeof differenceDays === "number" ? `${differenceDays} ${differenceDays <= 1 ? "day" : "days"}` : ""}`}
                </ProductDescription>
            </ProductInfoContainer>
        </ProductCardContainer>
    );
}
