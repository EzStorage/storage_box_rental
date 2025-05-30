import { BulkPricingTier } from "../types/product.type";

export function calculateUnitPrice(quantity: number, tiers: BulkPricingTier[] = []): number {
  const tier =
    tiers.find(tier => quantity >= tier.min && quantity < tier.max) || tiers[tiers.length - 1];

  return tier?.unitPrice ?? 0;
}
