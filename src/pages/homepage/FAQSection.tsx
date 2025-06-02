import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useTheme,
} from "@mui/material";


import {
  FAQContainer,
  FAQHeading,
  QuestionText,
  AnswerText,
} from "./homepage.styles";
import { ChevronDownIcon } from "../../components/Icons";

const FAQSection: React.FC = () => {
  const theme = useTheme();

  
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

 
  const detailsRef = useRef<HTMLDivElement | null>(null);

const faqs = [
  {
    question: "How does the storage service work?",
    answer:
      "You choose your storage size and duration, complete the booking online, and deliver your items to our secure facility.",
  },
  {
    question: "Is there a minimum storage duration?",
    answer:
      "Yes, the minimum storage duration is one month, but you can extend or reduce it anytime based on your needs.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your storage plan at any time by contacting our support team.",
  },
  {
    question: "What happens if my storage booking is about to expire?",
    answer:
      "We will notify you in advance to renew or extend your booking. If you do not take action, your items may be subject to removal according to our policy.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your booking up to 48 hours before the scheduled start date with a full refund. After that, cancellation fees may apply.",
  },
  {
    question: "Can I add multiple users to manage my storage?",
    answer:
      "Yes, you can add authorized users to manage your storage account for easy access and management.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is done monthly based on your storage size and duration, with convenient online payment options.",
  },
  {
    question: "Are my items stored safely?",
    answer:
      "We use state-of-the-art security systems including CCTV, alarms, and restricted access to keep your items safe.",
  },
  {
    question: "What items are not allowed in storage?",
    answer:
      "Hazardous materials, perishable goods, flammable items, and illegal products are strictly prohibited in our storage units.",
  },
];


 
  
  return (
    <FAQContainer sx={{ padding: "2rem 1rem",color:"#F9F9FA" }}>
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
          <FAQHeading style={{marginLeft: "40px"}}>Frequently asked</FAQHeading>
          <FAQHeading style={{ marginBottom: "12px",marginLeft: "40px" }}>
            <span>questions</span>
          </FAQHeading>
          <AnswerText style={{fontSize:"1.9rem",marginLeft: "40px"}}>
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
    expandIcon={
      <ChevronDownIcon/>
    }
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
    sx={{ padding: "8px 0" }}      // tighter spacing inside answer
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
      >
        
      </Box>
    </FAQContainer>
  );
};

export default FAQSection;
