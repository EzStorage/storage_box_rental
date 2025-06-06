import { ProductImage } from "@components/ProductCard/ProductImage";
import {
    ProductCardContainer,
    ProductChipContainer,
    ProductDiscountedPeriod,
    ProductShowBulkPricing,
} from "./FirstStep.styles";
import { ProductTitle } from "@components/ProductCard/ProductTitle";
import { ProductChip } from "@components/ProductCard/ProductChip";
import { ProductOriginalPrice } from "@components/ProductCard/ProductOriginalPrice";
import { ProductDiscountedPrice } from "@components/ProductCard/ProductDiscountedPrice";
import { PRODUCTS } from "src/constants/product.constants";
import { Product } from "src/types/product.type";
import { formatAmount } from "@helpers/amount";
import { useBookingSelector } from "@pages/booking/context";
import { useMemo } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";

export function FirstStepProductCard() {
    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const quantity = useBookingSelector(state => state.quantity);
    const unitPrice = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []),
        [quantity, product.bulkPricingTiers],
    );

    return (
        <ProductCardContainer>
            <div>
                <ProductImage src={product.image} alt={product.id} />
            </div>
            <div>
                <ProductTitle>Standard Box</ProductTitle>
                <ProductChipContainer>
                    <ProductChip label={product.dimensions} />
                    <ProductChip label={`Max ${product.maxWeightKg}kg`} />
                </ProductChipContainer>
                <ProductOriginalPrice>{formatAmount(product.originalPrice)}</ProductOriginalPrice>
                <div>
                    <ProductDiscountedPrice>{formatAmount(unitPrice)}</ProductDiscountedPrice>
                    <ProductDiscountedPeriod>/month</ProductDiscountedPeriod>
                </div>
                <ProductShowBulkPricing>Show all bulk pricing</ProductShowBulkPricing>
            </div>
        </ProductCardContainer>
    );
}
