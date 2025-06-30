import React from "react";
import { Typography, Stack } from "@mui/material";
import { RetrieveBoxIcon } from "@components/Icons/BackupIcon";
import { ChevronRightCustomIcon } from "@components/Icons/ChevronRights";
import { FlexRow, RetrieveBoxText, RetrieveBoxCard as StyledRetrieveBoxCard } from "../styles";

export const RetrieveBox = () => (
    <StyledRetrieveBoxCard>
        <FlexRow>
            <RetrieveBoxIcon />
            <Stack spacing={0.5}>
                <Typography fontWeight={600} fontSize={14}>
                    Retrieve box and return
                </Typography>
                <RetrieveBoxText>I need to retrieve something from my box</RetrieveBoxText>
            </Stack>
        </FlexRow>
        <ChevronRightCustomIcon />
    </StyledRetrieveBoxCard>
);
