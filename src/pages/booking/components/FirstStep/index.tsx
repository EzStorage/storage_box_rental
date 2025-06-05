import { ProductImage } from "@components/ProductCard/ProductImage";
import {
    StepContainer,
    StepHeaderProgress,
    StepHeaderTitle,
} from "../ProgressBooking/ProgressBooking.styles";
import {
    FirstStepAddDuration,
    FirstStepNoteContainer,
    FirstStepStorageTitle,
    ProductCardContainer,
    ProductChipContainer,
    ProductDiscountedPeriod,
    ProductList,
    ProductShowBulkPricing,
} from "./FirstStep.styles";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { ProductTitle } from "@components/ProductCard/ProductTitle";
import { ProductChip } from "@components/ProductCard/ProductChip";
import { ProductOriginalPrice } from "@components/ProductCard/ProductOriginalPrice";
import { formatAmount } from "@helpers/amount";
import { ProductDiscountedPrice } from "@components/ProductCard/ProductDiscountedPrice";
import InfoIcon from "@components/Icons/InfoIcon";
import { Note } from "@components/Note";
import { BoxCounter } from "@components/BoxCounter";
import { DurationSelector } from "@components/DurationSelector";
import { IoAddOutline } from "react-icons/io5";

export function FirstStep() {
    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];

    return (
        <StepContainer>
            <StepHeaderProgress>STEP 1 OF 5</StepHeaderProgress>
            <StepHeaderTitle>How many boxes do you want to store?</StepHeaderTitle>
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
                    <ProductOriginalPrice>
                        {formatAmount(product.originalPrice)}
                    </ProductOriginalPrice>
                    <div>
                        <ProductDiscountedPrice>{formatAmount(95)}</ProductDiscountedPrice>
                        <ProductDiscountedPeriod>/month</ProductDiscountedPeriod>
                    </div>
                    <ProductShowBulkPricing>Show all bulk pricing</ProductShowBulkPricing>
                </div>
            </ProductCardContainer>
            <FirstStepNoteContainer>
                <Note Icon={<InfoIcon color="#1943C1" width={"15px"} />}>
                    <h2>This service is only applicable for packing the following items</h2>
                    <ProductList>
                        <li>Item weighing &lt; 20kg each</li>
                        <li>Item measuring &lt; 1.8mm in any dimension</li>
                        <li>One person can carry</li>
                        <li>Maximum 20 items per order</li>
                    </ProductList>
                </Note>
            </FirstStepNoteContainer>
            <BoxCounter />
            <FirstStepStorageTitle>How long is your storage for?</FirstStepStorageTitle>
            <DurationSelector />
            <FirstStepAddDuration startIcon={<IoAddOutline />}>
                Custom Duration
            </FirstStepAddDuration>
        </StepContainer>
    );
}
