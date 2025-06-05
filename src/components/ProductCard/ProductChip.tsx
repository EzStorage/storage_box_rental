import { ProductChipContainer } from "./ProductCard.styles";

type ProductChipProps = {
    children?: React.ReactNode;
    label?: string;
};

export function ProductChip({ children, label }: ProductChipProps) {
    return <ProductChipContainer label={children || label} />;
}
