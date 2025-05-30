import { Product } from "../types/product.type";
import standarBox from "../assets/standard-box.png";

export const PRODUCTS: Product[] = [
  {
    id: "standard-box",
    name: "Standard Box",
    dimensions: "60 x 40 x 31cm",
    maxWeightKg: 20,
    originalPrice: 100,
    image: standarBox,
    tax: 10,
    bulkPricingTiers: [
      { min: 1, max: 5, unitPrice: 95 },
      { min: 5, max: 10, unitPrice: 92 },
      { min: 10, max: 15, unitPrice: 90 },
      { min: 15, max: 20, unitPrice: 88 },
      { min: 20, max: 25, unitPrice: 85 },
      { min: 25, max: 30, unitPrice: 83 },
      // { min: 30, max: 30, unitPrice: 83 },
    ],
  },
];
