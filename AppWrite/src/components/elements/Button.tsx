import { FC, MouseEvent, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: string;
  size?: string;
  align?: string;
  color?: string;
  width?: string;
  height?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ variant, onClick, size, align, color, width, height, children }) => {
  return (
    <ButtonSC onClick={onClick} size={size} align={align} color={color} width={width} height={height} className={variant}>
      {children}
    </ButtonSC>
  );
};

const ButtonSC = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space1);
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "3.5rem"};
  padding: var(--space1) var(--space2);
  font-family: var(--family2);
  color: var(--${(props) => props.color || "text-color"});
  font-size: var(--${(props) => props.size || "h6"});
  font-weight: 600;
  text-align: ${(props) => props.align || "center"};
  border-radius: var(--radius1);
  border: solid 1px var(--color1);
  background-color: var(--color1);

  &.opaque {
    min-height: ${(props) => props.height || "3.5rem"};
    max-height: ${(props) => props.height || "3.5rem"};
    padding: var(--space1) var(--space3);
    border: solid 2px var(--border-color);
    border-radius: var(--radius2);
    background: var(--comp-color);
  }
  &.transparent {
    height: ${(props) => props.height || "auto"};
    padding: var(--space1);
    border: none;
    background-color: var(--transparent);
  }
`;
