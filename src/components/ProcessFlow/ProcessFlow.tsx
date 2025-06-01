import { useMediaQuery, useTheme } from "@mui/material";
import {
    HorizontalDottedLine,
    ProcessContainer,
    ProcessStepsDesktop,
    ProcessStepsMobile,
    StepContent,
    StepDescription,
    StepDesktop,
    StepImage,
    StepMobile,
    StepNumber,
    StepTitle,
    VerticalDottedLine,
} from "./ProcessFlow.styles";

interface Step {
    number: string;
    image: string;
    title: string;
    description: string;
}

interface ProcessFlowProps {
    steps: Step[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <ProcessContainer>
            {!isMobile ? (
                // Desktop Layout
                <ProcessStepsDesktop>
                    <HorizontalDottedLine />
                    {steps.map((step, index) => (
                        <StepDesktop key={index}>
                            <StepNumber>{step.number}</StepNumber>
                            <StepImage src={step.image} alt={step.image} />
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </StepDesktop>
                    ))}
                </ProcessStepsDesktop>
            ) : (
                // Mobile Layout
                <ProcessStepsMobile>
                    <VerticalDottedLine />
                    {steps.map((step, index) => (
                        <StepMobile key={index}>
                            <StepNumber>{step.number}</StepNumber>
                            <StepContent>
                                <StepImage src={step.image} alt={step.image} />
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                            </StepContent>
                        </StepMobile>
                    ))}
                </ProcessStepsMobile>
            )}
        </ProcessContainer>
    );
};

export default ProcessFlow;
