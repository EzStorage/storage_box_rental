import ArrowLeftIcon from "@components/Icons/ArrowLeftIcon";
import { IconButton } from "@mui/material";
import { MHeaderContainer, MHeaderTitle } from "./MHeader.styles";
import { useNavigate } from "react-router";

export function MHeader() {
    const navigate = useNavigate();

    return (
        <MHeaderContainer>
            <IconButton onClick={() => navigate("/")}>
                <ArrowLeftIcon />
            </IconButton>
            <MHeaderTitle>Book your storage</MHeaderTitle>
        </MHeaderContainer>
    );
}
