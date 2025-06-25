import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { useMemo, useState } from "react";
import { PRODUCTS } from "src/constants/product.constants";
import { Product } from "src/types/product.type";
import {
    ProductCardContainer,
    ProductChipContainer,
    ProductDiscountedPeriod,
    ProductShowBulkPricing,
} from "./CardHero.styles";
import { ProductImage } from "@components/ProductCard/ProductImage";
import { ProductTitle } from "@components/ProductCard/ProductTitle";
import { ProductChip } from "@components/ProductCard/ProductChip";
import { ProductOriginalPrice } from "@components/ProductCard/ProductOriginalPrice";
import { ProductDiscountedPrice } from "@components/ProductCard/ProductDiscountedPrice";
import { BulkPricingDialog } from "@components/BulkPricingDialog";
import { formatAmount } from "@helpers/amount";

interface ProductCardProps {
    productId: string;
    quantity: number;
}

export function ProductCard({ productId, quantity }: ProductCardProps) {
    const [openDialog, setOpenDialog] = useState(false);

    const product: Product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

    const unitPrice = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []),
        [quantity, product.bulkPricingTiers],
    );

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
