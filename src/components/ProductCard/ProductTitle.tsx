import { ProductTitleContainer } from "./ProductCard.styles";

type ProductTitleProps = {
    children?: React.ReactNode;
};

export function ProductTitle({ children }: ProductTitleProps) {
    return <ProductTitleContainer>{children}</ProductTitleContainer>;
}
