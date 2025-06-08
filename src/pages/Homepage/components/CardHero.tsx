import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import {
  CardHeroContainer,
  CardHeroImage,
  CardHeroPricingBreakdown,
  CardHeroQuality,
  ProductInfo,
} from "../Homepage.styles";
import { useMemo, useState } from "react";
import { PRODUCTS } from "../../../constants/product.constants";
import { Product } from "../../../types/product.type";
import { calculateUnitPrice } from "../../../utils/calculate-unit-price";
import { IoRemoveOutline, IoAddOutline } from "react-icons/io5";
import MyButton from "../../../components/Button/MyButton";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/auth/cartSlice";

interface CardHeroProps {
  productId?: string;
  
}

const CardHero: React.FC<CardHeroProps> = ({
  productId = "standard-box",
  
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1); 
  const [showBulkPricing, setShowBulkPricing] = useState(false);

  const product: Product =
    PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const discount = 10;

  const getUnitPrice = useMemo(() => {
    return calculateUnitPrice(quantity, product.bulkPricingTiers ?? []);
  }, [quantity, product.bulkPricingTiers]);

  const subtotal = getUnitPrice * quantity;
  const tax = product.tax;
  const total = subtotal + tax - discount;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

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
            <div
              className="bulk-button"
              onClick={() => setShowBulkPricing(true)}
              style={{ cursor: "pointer" }}
            >
              Show all bulk pricing
            </div>
          </Stack>
        </ProductInfo>
      </Stack>

      <Divider sx={{ background: theme.palette.outline.greyLow }} />

      
      <CardHeroQuality>
        <p>Number of boxes</p>
        <Stack direction="row" alignItems="center" spacing={"20px"}>
          <IconButton onClick={decrementQuantity} aria-label="Decrease quantity">
            <IoRemoveOutline color={theme.palette.textCustom.greyMed} />
          </IconButton>
          <span>{quantity}</span>
          <IconButton onClick={incrementQuantity} aria-label="Increase quantity">
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

      
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <MyButton
            variantType="secondary"
            sx={{ width: "100%" }}
            startIcon={<FiShoppingCart />}
            onClick={() => dispatch(addToCart({ product, quantity }))}

          >
            Add to cart
          </MyButton>
        </Grid>
        <Grid >
          <MyButton variantType="primary" sx={{ width: "100%" }}>
            Book now
          </MyButton>
        </Grid>
      </Grid>
    </CardHeroContainer>
  );
};

export default CardHero;
