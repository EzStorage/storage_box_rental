// CancelModalForm.tsx
import {
  StyledDialogContent,
  ReasonLabel,
  StyledSelect,
  StyledTextField,
} from "../../styles";
import { MenuItem } from "@mui/material";
import { useCancelModalSelector, useCancelModalCommit } from "./Context";
import { GreyExpandUp } from "@components/Icons/GreyExpandUp";
import { GreyExpandDown } from "@components/Icons/GreyExpandDown";
import { SelectChangeEvent } from "@mui/material";

export const CancelModalForm = () => {
  const reason = useCancelModalSelector((state) => state.reason);
  const details = useCancelModalSelector((state) => state.details);
  const selectOpen = useCancelModalSelector((state) => state.selectOpen);
  const commit = useCancelModalCommit();

  const handleReasonChange = (e: SelectChangeEvent<string>) => {
    commit({ reason: e.target.value });
  };

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    commit({ details: e.target.value });
  };
  const handleSelectOpen = () => {
        commit({ selectOpen: true });
    };

    const handleSelectClose = () => {
        commit({ selectOpen: false });
    };

  return (
    <>

      <StyledSelect
        fullWidth
        displayEmpty
        value={reason}
        onChange={handleReasonChange}
        onOpen={handleSelectOpen}
onClose={handleSelectClose}
        IconComponent={selectOpen ? GreyExpandUp : GreyExpandDown}
      >
        <MenuItem value="" disabled>
          Select reason
        </MenuItem>
        <MenuItem value="Changed mind">Changed mind</MenuItem>
        <MenuItem value="Wrong date">Booked wrong date</MenuItem>
      </StyledSelect>

      <StyledTextField
        fullWidth
        multiline
        minRows={4}
        placeholder="Tell us more your reason"
        value={details}
        onChange={handleDetailsChange}
      />
      </>
    
  );
};
