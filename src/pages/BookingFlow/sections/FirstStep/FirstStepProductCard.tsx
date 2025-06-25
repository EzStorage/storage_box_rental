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
import { useBookingSelector } from "@pages/BookingFlow/context";
import { useMemo, useState } from "react";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { BulkPricingDialog } from "@components/BulkPricingDialog";

export function FirstStepProductCard() {
    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const quantity = useBookingSelector(state => state.form.quantity);
    const unitPrice = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []),
        [quantity, product.bulkPricingTiers],
    );
    const [openDialog, setOpenDialog] = useState(false);

    const toggleBulkDialog = () => {
        setOpenDialog(prev => !prev);
    };

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
                <ProductShowBulkPricing onClick={toggleBulkDialog}>
                    Show bulk pricing
                </ProductShowBulkPricing>
            </div>
            <BulkPricingDialog open={openDialog} onClose={toggleBulkDialog} />
        </ProductCardContainer>
    );
}
