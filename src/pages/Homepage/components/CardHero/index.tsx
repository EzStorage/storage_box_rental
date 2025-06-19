import { useTheme } from "@mui/material";
import { ProductCard } from "./ProductCard";
import {
    CardHeroActionsContainer,
    CardHeroContainer,
    CardHeroPricingBreakdown,
} from "./CardHero.styles";
import { useMemo, useState } from "react";
import { BoxCounter } from "@components/BoxCounter";
import { formatAmount } from "@helpers/amount";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { Product } from "src/types/product.type";
import { PRODUCTS } from "src/constants/product.constants";
import { useScreenSize } from "@hooks/useScreenSize";
import MyButton from "@components/Button/MyButton";
import ShopCartIcon from "@components/Icons/ShopCartIcon";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { Link } from "react-router";
import { addToCart } from "src/redux/auth/cartSlice";

interface CardHeroProps {
    productId?: string;
}

export default function CardHero({ productId = "standard-box" }: CardHeroProps) {
    const theme = useTheme();
    const { isDesktop } = useScreenSize();
    const dispatch = useAppDispatch();

    const [quantity, setQuantity] = useState(2);
    const user = useAppSelector(state => state.auth.user);

    const product: Product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

    const unitPrice = useMemo(
        () => calculateUnitPrice(quantity, product.bulkPricingTiers ?? []),
        [quantity, product.bulkPricingTiers],
    );
    const discountedPrice = useMemo(() => unitPrice * quantity, [unitPrice, quantity]);
    const originalPrice = useMemo(() => product.originalPrice * quantity, [product, quantity]);

    const tax = (product.tax * discountedPrice) / 100;
    const total = discountedPrice + tax;

    const handleQuantity = (value: number) => {
        setQuantity(value);
    };

    return (
        <CardHeroContainer isLogin={user !== null}>
            <ProductCard productId={productId} quantity={quantity} />
            <BoxCounter value={quantity} onChange={handleQuantity} />

            <CardHeroPricingBreakdown>
                {isDesktop ? (
                    <>
                        <div>
                            <p>
                                {formatAmount(unitPrice)} x {quantity} boxes
                            </p>
                            <p>{formatAmount(discountedPrice)}</p>
                        </div>
                        <div>
                            <p>Tax and fees</p>
                            <p>{formatAmount(tax)}</p>
                        </div>
                        <div>
                            <p>Discount</p>
                            <p className="discount">
                                {formatAmount(-(originalPrice - discountedPrice))}
                            </p>
                        </div>
                        <div>
                            <p className="total">Total amount</p>
                            <p className="total">{formatAmount(total)}</p>
                        </div>
                    </>
                ) : (
                    <div>
                        <p className="total">Total amount</p>
                        <p className="total">{formatAmount(total)}</p>
                    </div>
                )}
            </CardHeroPricingBreakdown>

            <CardHeroActionsContainer isLogin={user !== null}>
                <MyButton
                    variantType="secondary"
                    fullWidth
                    startIcon={
                        <ShopCartIcon width={20} color={theme.palette.textCustom.greyBase} />
                    }
                    onClick={() => dispatch(addToCart({ product, quantity }))}
                >
                    Add to cart
                </MyButton>
                <Link to="/booking">
                    <MyButton variantType="primary" fullWidth>
                        Book now
                    </MyButton>
                </Link>
            </CardHeroActionsContainer>
        </CardHeroContainer>
    );
}
