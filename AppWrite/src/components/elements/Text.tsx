import { FC, ReactNode } from "react";
import styled from "styled-components";

interface TextProps {
  size?: string;
  align?: string;
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  children: ReactNode;
}

export const Text: FC<TextProps> = ({ size, align, color, width, height, className, children }) => {
  return (
    <PSC color={color} align={align} size={size} width={width} height={height} className={className}>
      {children}
    </PSC>
  );
};

const PSC = styled.p<TextProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  font-family: var(--family2);
  color: var(--${(props) => props.color || "text-color"});
  font-size: var(--${(props) => props.size || "span"});
  text-shadow: var(--shadow1);
`;
