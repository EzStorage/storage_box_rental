import { ProductImage } from "@components/ProductCard/ProductImage";
import { ProductTitle } from "@components/ProductCard/ProductTitle";
import { PRODUCTS } from "src/constants/product.constants";
import { Product } from "src/types/product.type";
import {
    ProductCardContainer,
    ProductChipContainer,
    ProductDescription,
    ProductInfoContainer,
} from "./BookingInformation.styles";
import { ProductChip } from "@components/ProductCard/ProductChip";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { DURATION_PLANS } from "@pages/BookingFlow/constants";
import { differenceInDays } from "date-fns";

export function BookingProductCard() {
    const quantity = useBookingSelector(state => state.form.quantity);
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    const differenceDays =
        typeof commitmentPeriod === "object" &&
        typeof commitmentPeriod !== null &&
        differenceInDays(commitmentPeriod.endDate, commitmentPeriod.startDate);
    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];
    const plans = DURATION_PLANS.find(m => m.id === commitmentPeriod);

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
                <ProductDescription>
                    {quantity} boxes x{" "}
                    {plans
                        ? `${plans.title} (${plans.days} ${plans.days <= 1 ? "day" : "days"})`
                        : `${typeof differenceDays === "number" ? `${differenceDays} ${differenceDays <= 1 ? "day" : "days"}` : ""}`}
                </ProductDescription>
            </ProductInfoContainer>
        </ProductCardContainer>
    );
}
