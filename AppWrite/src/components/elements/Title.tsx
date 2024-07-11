import { FC, ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  size?: string;
  align?: string;
  color?: string;
  width?: string;
  height?: string;
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ size, align, color, width, height, children }) => {
  return (
    <StrongSC color={color} align={align} size={size} width={width} height={height} className={size}>
      {children}
    </StrongSC>
  );
};

const StrongSC = styled.strong<TitleProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  font-family: var(--family2);
  color: var(--${(props) => props.color || "text-color"});
  font-size: var(--${(props) => props.size || "strong"});

  &.h1 {
    line-height: 3.25rem;
  }
  &.h2 {
    line-height: 3.25rem;
  }
  &.h3 {
    line-height: 3.25rem;
  }
  &.h4 {
    line-height: 2rem;
  }
`;
