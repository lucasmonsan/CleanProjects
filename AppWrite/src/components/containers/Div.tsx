import { FC, ReactNode } from "react";
import styled from "styled-components";

interface DivProps {
  align?: string;
  gap?: string;
  width?: string;
  children: ReactNode;
}

export const Div: FC<DivProps> = ({ align, gap, width, children }) => {
  return (
    <DivSC align={align} gap={gap} width={width}>
      {children}
    </DivSC>
  );
};

const DivSC = styled.div<DivProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.align || "flex-start"};
  gap: var(--${(props) => props.gap || "space1"});
  width: ${(props) => props.width || "auto"};
`;
