import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface SectionProps {
  animation?: string;
  delay?: number;
  gap?: string;
  height?: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ animation = "fade", delay = 0, gap, height, children }) => {
  return animation === "bottom" ? (
    <SectionSC initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 128 }} transition={{ duration: 0.5, delay: delay }} gap={gap} height={height}>
      {children}
    </SectionSC>
  ) : animation === "zoom" ? (
    <SectionSC initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.75 }} transition={{ duration: 0.5, delay: delay }} gap={gap} height={height}>
      {children}
    </SectionSC>
  ) : (
    <SectionSC initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: delay }} gap={gap} height={height}>
      {children}
    </SectionSC>
  );
};

const SectionSC = styled(motion.section)<SectionProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--${(props) => props.gap || "space1"});
  width: 100%;
  height: ${(props) => props.height || "auto"};
`;
