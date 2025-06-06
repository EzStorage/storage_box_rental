import { Button } from "@components/Button";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material";
import {
    BulkPricingCloseButton,
    BulkPricingDialogContainer,
    BulkPricingDialogTitle,
} from "./BulkPricingDialog.styles";
import CloseIcon from "@components/Icons/CloseIcon";
import { BulkPricingTable } from "./BulkPricingTable";

interface BulkPricingDialogProps {
    open: boolean;
    onClose: () => void;
}

export function BulkPricingDialog({ open, onClose }: BulkPricingDialogProps) {
    return (
        <BulkPricingDialogContainer open={open} onClose={onClose}>
            <BulkPricingCloseButton onClick={onClose}>
                <CloseIcon />
            </BulkPricingCloseButton>

            <BulkPricingDialogTitle>
                <h1>Bulk discount tiers</h1>
                <p>Buy more, save more</p>
            </BulkPricingDialogTitle>

            <DialogContent>
                <BulkPricingTable />
            </DialogContent>
        </BulkPricingDialogContainer>
    );
}
