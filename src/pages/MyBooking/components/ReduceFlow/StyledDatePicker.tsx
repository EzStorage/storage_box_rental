import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 16px;
`;

const DateInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 16px;
    color: #1e1e1e;
    width: fit-content;
    cursor: pointer;
`;

const ProceedButton = styled.button<{ disabled: boolean }>`
    margin-top: 40px;
    width: 100%;
    background: ${({ disabled }) => (disabled ? "#eee" : "#e02020")};
    color: ${({ disabled }) => (disabled ? "#aaa" : "#fff")};
    border: none;
    padding: 14px 20px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const ContainerForm = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
  margin-bottom: 24px;
`;

export const BoxImg = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 16px;
`;

export const BoxDetails = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  margin-top: 4px;
`;

export const Chip = styled.span`
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: 600;
  color: #5b616d;
  font-size: 12px;
`;

export const BoxCount = styled.div`
  margin-top: 12px;
  font-weight: 600;
  color: #5b616d;
  font-size: 12px;
`;

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};