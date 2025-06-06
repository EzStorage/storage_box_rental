import { formatAmount } from "@helpers/amount";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { PRODUCTS } from "src/constants/product.constants";
import { Product } from "src/types/product.type";
import {
    BulkPricingRowBody,
    BulkPricingRowHead,
    BulkPricingTableContainer,
} from "./BulkPricingDialog.styles";

export function BulkPricingTable() {
    const product: Product = PRODUCTS.find(p => p.id === "standard-box") || PRODUCTS[0];

    return (
        <BulkPricingTableContainer>
            <Table>
                <BulkPricingRowHead>
                    <TableRow>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Unit Price</TableCell>
                    </TableRow>
                </BulkPricingRowHead>
                <BulkPricingRowBody>
                    {(product.bulkPricingTiers ?? []).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {row.min} - {row.max}
                            </TableCell>
                            <TableCell>{formatAmount(row.unitPrice)}</TableCell>
                        </TableRow>
                    ))}
                </BulkPricingRowBody>
            </Table>
        </BulkPricingTableContainer>
    );
}
