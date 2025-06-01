import { Box, Chip, Divider, Grid, IconButton, Stack, useTheme } from "@mui/material";
import {
    CardHeroContainer,
    CardHeroImage,
    CardHeroPricingBreakdown,
    CardHeroQuality,
    ProductInfo,
} from "./Homepage.styles";
import { useMemo, useState } from "react";
import { PRODUCTS } from "../../constants/product.constants";
import { Product } from "../../types/product.type";
import { calculateUnitPrice } from "../../helpers/calculateUnitPrice";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import MyButton from "../../components/button/MyButton";

interface CardHeroProps {
    productId?: string;
}

const CardHero: React.FC<CardHeroProps> = ({ productId = "standard-box" }) => {
    const theme = useTheme();
    const [quantity, setQuantity] = useState(2);
    const [showBulkPricing, setShowBulkPricing] = useState(false);

    const product: Product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    const discount = 10;

    const getUnitPrice = useMemo(() => {
        return calculateUnitPrice(quantity, product.bulkPricingTiers ?? []);
    }, [quantity, product.bulkPricingTiers]);

    const subtotal = getUnitPrice * quantity;
    const tax = product.tax;
    const total = subtotal + tax - discount;

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <CardHeroContainer>
            <Stack direction="row" sx={{ mb: { xs: "16px", lg: "20px" } }}>
                <CardHeroImage>
                    <img src={product.image} alt={product.id} />
                </CardHeroImage>
                <ProductInfo spacing={"12px"}>
                    <Stack spacing={"4px"}>
                        <h3>{product.name}</h3>
                        <Stack direction="row" spacing={"6px"} alignItems="center">
                            <Chip label={product.dimensions} className="chip-row" />
                            <Chip label={`Max ${product.maxWeightKg}kg`} className="chip-row" />
                        </Stack>
                    </Stack>

                    <Stack>
                        <p className="original-price">S${product.originalPrice.toFixed(2)}</p>
                        <p className="discounted-price">
                            <span>S${getUnitPrice.toFixed(2)}</span>
                            <span>/month</span>
                        </p>
                        <div className="bulk-button" onClick={() => setShowBulkPricing(true)}>
                            Show all bulk pricing
                        </div>
                    </Stack>
                </ProductInfo>
            </Stack>

            <Divider sx={{ background: theme.palette.outline.greyLow }} />

            <CardHeroQuality>
                <p>Number of box</p>
                <Stack direction="row" alignItems="center" spacing={"20px"}>
                    <IconButton onClick={decrementQuantity}>
                        <IoRemoveOutline color={theme.palette.textCustom.greyMed} />
                    </IconButton>
                    <span>{quantity}</span>
                    <IconButton onClick={incrementQuantity}>
                        <IoAddOutline color={theme.palette.textCustom.greyMed} />
                    </IconButton>
                </Stack>
            </CardHeroQuality>

            <Divider sx={{ background: theme.palette.outline.greyLow }} />

            <CardHeroPricingBreakdown spacing={"8px"}>
                <Box>
                    <p>
                        S${getUnitPrice.toFixed(2)} x {quantity} boxes
                    </p>
                    <p>S${subtotal.toFixed(2)}</p>
                </Box>
                <Box>
                    <p>Tax and fees</p>
                    <p>S${tax.toFixed(2)}</p>
                </Box>
                <Box>
                    <p>Discount</p>
                    <p className="discount">-S${discount.toFixed(2)}</p>
                </Box>
                <Box>
                    <p className="total">Total amount</p>
                    <p className="total">S${total.toFixed(2)}</p>
                </Box>
            </CardHeroPricingBreakdown>

            <Grid container direction="row" spacing={"16px"}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <MyButton
                        variantType="secondary"
                        sx={{ width: "100%" }}
                        startIcon={<FiShoppingCart />}
                    >
                        Add to cart
                    </MyButton>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <MyButton variantType="primary" sx={{ width: "100%" }}>
                        Book now
                    </MyButton>
                </Grid>
            </Grid>
        </CardHeroContainer>
    );
};
export default CardHero;
