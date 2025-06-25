import { FAQS } from "@pages/Homepage/constants";
import { FAQAccordionContainer, FAQContainer, FAQHeader } from "./FAQ.styles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useState } from "react";
import { ChevronDownIcon } from "@components/Icons/ChevronDownIcon";

export function FAQ() {
    const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

    return (
        <FAQContainer id="faq">
            <FAQHeader>
                <h1>
                    Frequently asked
                    <br />
                    <span>questions</span>
                </h1>
                <p>Everything you need to know about storage, billing, and returns</p>
            </FAQHeader>

            <FAQAccordionContainer>
                {FAQS.map(({ question, answer }, index) => (
                    <Accordion
                        key={index}
                        expanded={expandedIndex === index}
                        onChange={(_, isExpanded) => setExpandedIndex(isExpanded ? index : false)}
                    >
                        <AccordionSummary expandIcon={<ChevronDownIcon />}>
                            {question}
                        </AccordionSummary>
                        <AccordionDetails>{answer}</AccordionDetails>
                    </Accordion>
                ))}
            </FAQAccordionContainer>
        </FAQContainer>
    );
}
