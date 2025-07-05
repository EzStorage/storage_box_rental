import { TEXT_CUSTOM } from "src/constants/palette";
import {
    AddressText,
    BoldText,
    BorderBox,
    DimensionText,
    IDText,
    LabelRow,
    LabelText,
    ResponsivePaper,
    StatusText,
    StyledBoxChip,
    TimeText,
    ValueColumn,
    VerticalDivider,
} from "../PaymentStatus.styles";
import { ResponsiveFlexBox } from "@pages/Homepage/Homepage.styles";
import Standard from "@assets/standard-box.png";
import { Box, Divider, Stack } from "@mui/material";

const boxSteps = [
    { label: "Empty Box Dropoff" },
    { label: "Packed Box Pickup" },
    { label: "Packed Box Dropoff" },
];

export function PaymentContent({ success = false }: { success?: boolean }) {
    const title = success ? "Paid" : "Payment Failed";
    const titleColor = success ? TEXT_CUSTOM.SUCCESS : TEXT_CUSTOM.DANGER;

    return (
        <ResponsivePaper>
            <IDText>
                <span>Booking ID: 234KHHK</span>
                <VerticalDivider />
                <StatusText style={{ color: titleColor }}>{title}</StatusText>
            </IDText>

            <BorderBox>
                <ResponsiveFlexBox>
                    <img
                        src={Standard}
                        alt="Standard Box"
                        width={80}
                        height={80}
                        style={{ objectFit: "contain" }}
                    />
                    <Box>
                        <BoldText style={{ fontSize: 18 }}>Standard Box</BoldText>
                        <Stack direction="row" spacing={0.8} mt={0.5}>
                            <StyledBoxChip label="60 x 40 x 31cm" />
                            <StyledBoxChip label="Max 20kg" />
                        </Stack>
                        <DimensionText>2 boxes × 6 months</DimensionText>
                    </Box>
                </ResponsiveFlexBox>

                {boxSteps.map((item, index) => (
                    <Box key={index} sx={{ mb: 1 }}>
                        <LabelRow>
                            <LabelText>{item.label}</LabelText>

                            <ValueColumn>
                                <AddressText>123 Changi, Singapore</AddressText>
                                <TimeText>Wed, 24 Sep 2025 · 6-hour slot · 8am - 2pm</TimeText>
                            </ValueColumn>
                        </LabelRow>
                        {index < 2 && <Divider sx={{ backgroundColor: "#EBECF0", my: 1 }} />}
                    </Box>
                ))}
            </BorderBox>
        </ResponsivePaper>
    );
}
