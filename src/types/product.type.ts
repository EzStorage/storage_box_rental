export interface BulkPricingTier {
  min: number;
  max: number;
  unitPrice: number;
}

export interface Product {
  id: string;
  name: string;
  dimensions: string;
  maxWeightKg: number;
  originalPrice: number;
  image: string;
  tax: number;
  bulkPricingTiers?: BulkPricingTier[];
}
