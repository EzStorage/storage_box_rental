import {
    Container,
    Description,
    HeadingContainer,
    IconWrapper,
    Title,
} from "./ProcessResult.styles";
import { CheckCircleIcon } from "@components/Icons/CheckCircleIcon";
import { CrossCircleIcon } from "@components/Icons/CrossCircleIcon";
import { Navigate, useParams } from "react-router";
import { RESULT_TITLES } from "./constants";
import { ResultBody } from "./ResultBody";

const PROCESS_FLOW = [
    "payment",
    "change-time",
    "cancellation",
    "reduce",
    "renewal",
    "retrive-return",
] as const;
const STATUSES = ["success", "failed"] as const;

export function ProcessResult() {
    const params = useParams<{
        processFlow: (typeof PROCESS_FLOW)[number];
        status: (typeof STATUSES)[number];
    }>();
    if (
        !params.processFlow ||
        !params.status ||
        !PROCESS_FLOW.includes(params.processFlow as (typeof PROCESS_FLOW)[number]) ||
        !STATUSES.includes(params.status as (typeof STATUSES)[number])
    ) {
        return <Navigate to="/" replace />;
    }
    const { processFlow, status } = params;
    const success = status === "success";
    const title = RESULT_TITLES[`${processFlow}-${status}`];

    return (
        <Container>
            <IconWrapper>{success ? <CheckCircleIcon /> : <CrossCircleIcon />}</IconWrapper>
            <HeadingContainer>
                <Title>{title || null}</Title>
                {processFlow !== "cancellation" && (
                    <Description>
                        Thank you for your purchase! Your booking information will be sent to
                        <span> (+65) 1234 123 124</span>
                    </Description>
                )}
            </HeadingContainer>
            <ResultBody {...params} />
        </Container>
    );
}
