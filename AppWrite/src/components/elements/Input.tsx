import styled from "styled-components";
import { FC, ChangeEvent } from "react";
import { Img } from "./Img";

interface CompProps {
  variant?: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  width?: string;
  height?: string;
}

interface LabelProps {
  width?: string;
  height?: string;
}

export const Input: FC<CompProps> = ({ variant, placeholder, onChange, type = "text", width, height }) => {
  return variant === "transparent" ? (
    <LabelSC width={width} height={height}>
      <Img src={`./${type}.svg`} alt="" height="2rem" />
      <InputSC type={type} placeholder={placeholder} onChange={onChange} />
    </LabelSC>
  ) : (
    <LabelSC width={width} height={height}>
      <Img src={`./${type}.svg`} alt="" height="2rem" />
      <InputSC type={type} placeholder={placeholder} onChange={onChange} />
    </LabelSC>
  );
};

const LabelSC = styled.label<LabelProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space1);
  width: ${(props) => props.width || "auto"};
  min-height: ${(props) => props.height || "3.5rem"};
  max-height: ${(props) => props.height || "3.5rem"};
  padding: 0 var(--space2);
  border: solid 3px var(--border-color);
  border-radius: var(--radius2);
  background: var(--comp-color);
  transition: border var(--fast) ease-in-out;

  &:focus-within {
    border: solid 3px var(--color1);
  }
`;

const InputSC = styled.input`
  outline: none;
  flex-grow: 1;
  width: 100%;
  font-family: var(--family2);
  font-size: var(--span);
  font-weight: 500;
  color: var(--text-color);
  border: none;
  background-color: transparent;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--comp-color) inset !important;
    -webkit-text-fill-color: var(--text-color) !important;
  }
`;
