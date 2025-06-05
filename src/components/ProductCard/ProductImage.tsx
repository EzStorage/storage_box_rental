import { ProductImageContainer } from "./ProductCard.styles";

type ProductImageProps = {
    src: string;
    alt: string;
};

export function ProductImage({ src, alt }: ProductImageProps) {
    return (
        <ProductImageContainer>
            <img src={src} alt={alt} />
        </ProductImageContainer>
    );
}
