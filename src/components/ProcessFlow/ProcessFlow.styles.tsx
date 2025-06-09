import styled from "@emotion/styled";

export const ProcessContainer = styled.div`
    position: relative;
`;

export const ProcessStepsDesktop = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.25rem;
`;

export const ProcessStepsMobile = styled.div`
    position: relative;
`;

export const HorizontalDottedLine = styled.div`
    position: absolute;
    top: 14px;
    left: 10%;
    right: 10%;
    height: 1px;
    z-index: 1;
    background: repeating-linear-gradient(
        to right,
        #c3c6cc 0px,
        #c3c6cc 2px,
        transparent 2px,
        transparent 4px
    );
`;

export const VerticalDottedLine = styled.div`
    position: absolute;
    left: 12px;
    top: 0px;
    bottom: 0px;
    width: 1px;
    z-index: 1;
    background: repeating-linear-gradient(
        to bottom,
        #c3c6cc 0px,
        #c3c6cc 2px,
        transparent 2px,
        transparent 4px
    );
`;

export const StepDesktop = styled.div`
    flex: 1;
    text-align: center;
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StepMobile = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    gap: 12px;
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const StepNumber = styled("div")(({ theme }) => ({
    fontSize: "26px",
    fontWeight: 600,
    lineHeight: "32px",
    letterSpacing: 0,
    color: theme.palette.textCustom.greyBase,

    position: "relative",
    display: "inline-block",
    zIndex: 3,
    background: theme.palette.background.paper,
    marginBottom: "24px",
    width: "fit-content",

    [theme.breakpoints.down("md")]: {
        fontSize: "22px",
        lineHeight: "28px",
        marginBottom: 0,
    },
}));

export const StepImage = styled("img")(({ theme }) => ({
    width: "auto",
    height: "auto",
    marginBottom: "32px",

    [theme.breakpoints.down("md")]: {
        maxWidth: "100px",
        maxHeight: "100px",
        objectFit: "contain",
        marginBottom: "12px",
    },
}));

export const StepTitle = styled("h3")(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: 0,
    color: theme.palette.text.primary,
    marginBottom: "4px",
}));

export const StepDescription = styled("p")(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: 0,
    color: theme.palette.text.secondary,
}));

export const StepContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
