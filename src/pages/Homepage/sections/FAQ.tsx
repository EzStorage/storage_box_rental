import React, { useState, useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, useTheme } from "@mui/material";

import { FAQContainer, FAQHeading, QuestionText, AnswerText } from "../Homepage.styles";
import { ChevronDownIcon } from "@components/Icons/ChevronDownIcon";
import { faqs } from "../constants";

const FAQSection: React.FC = () => {
    const theme = useTheme();

    const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

    const detailsRef = useRef<HTMLDivElement | null>(null);

    return (
        <FAQContainer sx={{ padding: "2rem 1rem", color: "#F9F9FA" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 6,
                    flexWrap: "wrap",
                }}
            >
                <Box sx={{ flex: 1, minWidth: 300 }}>
                    <FAQHeading style={{ marginLeft: "40px" }}>Frequently asked</FAQHeading>
                    <FAQHeading style={{ marginBottom: "12px", marginLeft: "40px" }}>
                        <span>questions</span>
                    </FAQHeading>
                    <AnswerText style={{ fontSize: "1.9rem", marginLeft: "40px" }}>
                        Everything you need to know about storage, billing, and returns.
                    </AnswerText>
                </Box>

                <Box sx={{ flex: 1, minWidth: 300 }}>
                    {faqs.map(({ question, answer }, index) => (
                        <Accordion
                            key={index}
                            expanded={expandedIndex === index}
                            onChange={(_, isExpanded) =>
                                setExpandedIndex(isExpanded ? index : false)
                            }
                            sx={{
                                boxShadow: "none",
                                borderBottom: `1px solid ${theme.palette.divider}`,
                                backgroundColor: "transparent",
                                width: "100%",
                                maxWidth: "592px",
                                minWidth: "320px",
                                paddingBottom: "16px",
                                marginBottom: "16px",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ChevronDownIcon />}
                                sx={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    minHeight: "48px",
                                    padding: 0,
                                }}
                            >
                                <QuestionText>{question}</QuestionText>
                            </AccordionSummary>
                            <AccordionDetails
                                ref={expandedIndex === index ? detailsRef : null}
                                sx={{ padding: "8px 0" }} // tighter spacing inside answer
                            >
                                <AnswerText>{answer}</AnswerText>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: "30px",
                    paddingTop: "15px",
                    textAlign: "center",
                }}
            ></Box>
        </FAQContainer>
    );
};

export default FAQSection;
