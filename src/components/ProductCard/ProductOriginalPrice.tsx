import { ProductOriginalPriceContainer } from "./ProductCard.styles";

import { ReactNode } from "react";

export function ProductOriginalPrice({ children }: { children: ReactNode }) {
    return <ProductOriginalPriceContainer>{children}</ProductOriginalPriceContainer>;
}
