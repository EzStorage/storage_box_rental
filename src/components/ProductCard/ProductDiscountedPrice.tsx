import { ProductDiscountedPriceContainer } from "./ProductCard.styles";

import { ReactNode } from "react";

export function ProductDiscountedPrice({ children }: { children: ReactNode }) {
    return <ProductDiscountedPriceContainer>{children}</ProductDiscountedPriceContainer>;
}
