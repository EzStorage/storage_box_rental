import React from "react";
import { SectionHeaderText } from "../styles";

export const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <SectionHeaderText>{children}</SectionHeaderText>
);