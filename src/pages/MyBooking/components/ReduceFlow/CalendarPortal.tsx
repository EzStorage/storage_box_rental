import React from "react";
import { Box } from "@mui/material";
import { DatePicker } from "@pages/BookingFlow/components/DatePicker";
import { BodyPortal } from "./BodyPortal";
export const CalendarWithPortal = () => {
    const anchorRef = React.useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [anchorPos, setAnchorPos] = React.useState({ top: 0, left: 0 });

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    React.useEffect(() => {
        if (open && anchorRef.current) {
            const rect = anchorRef.current.getBoundingClientRect();
            setAnchorPos({
                top: rect.bottom + window.scrollY + 8,
                left: rect.left + window.scrollX,
            });
        }
    }, [open]);

    const handleDateChange = (date: Date) => {
        console.log("Selected date:", date.toISOString());
        setOpen(false);
    };

    return (
        <>
            <Box ref={anchorRef} sx={{ position: "relative", zIndex: 10 }}>
                <Box
                    onClick={handleToggle}
                    sx={{
                        width: 240,
                        height: 40,
                        border: "1px solid #ccc",
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                >
                    Select Date
                </Box>
            </Box>

            {open && (
                <BodyPortal>
                    <Box
                        sx={{
                            position: "absolute",
                            top: `${anchorPos.top}px`,
                            left: `${anchorPos.left}px`,
                            zIndex: 1500,
                            backgroundColor: "white",
                            boxShadow: 2,
                            borderRadius: 2,
                        }}
                    >
                        <DatePicker onChange={handleDateChange} />
                    </Box>
                </BodyPortal>
            )}
        </>
    );
};
