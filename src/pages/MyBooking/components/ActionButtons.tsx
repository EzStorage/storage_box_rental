import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  GreyButton,
  PlainGreyButton,
  PrimaryButton,
  ButtonRow,
  MobileActionBox,
} from "../styles";
import { BookingStatus } from "../../../constants/Enums";
import { CancelModal } from "./CancelModal"; // adjust path if needed

interface Props {
  status: BookingStatus;
}

export const ActionButtons = ({ status }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [cancelModalOpen, setCancelModalOpen] = useState(false);

  const handleRequestCancel = () => {
    setCancelModalOpen(true); // ✅ open modal
  };

  const content = (() => {
    switch (status) {
      case BookingStatus.AwaitingPickup:
      case BookingStatus.BoxToBeDelivered:
        return (
          <GreyButton fullWidth onClick={handleRequestCancel}>
            Request Cancel
          </GreyButton>
        );

      case BookingStatus.Stored:
        return (
          <ButtonRow>
            <PlainGreyButton fullWidth>
              Reduce the storage date
            </PlainGreyButton>
            <PrimaryButton variant="contained" fullWidth>
              Renew Storage
            </PrimaryButton>
          </ButtonRow>
        );

      case BookingStatus.Returned:
        return (
          <PlainGreyButton fullWidth>
            Rate your booking
          </PlainGreyButton>
        );

      case BookingStatus.Cancelled:
        return (
          <PrimaryButton variant="contained" fullWidth>
            Book Again
          </PrimaryButton>
        );

      default:
        return null;
    }
  })();

  return (
    <>
      {isMobile ? (
        <MobileActionBox>{content}</MobileActionBox>
      ) : (
        content
      )}

      {/* ✅ Show modal when triggered */}
      <CancelModal open={cancelModalOpen} onClose={() => setCancelModalOpen(false)} />
    </>
  );
};
