import { FC, ReactNode, FormEvent } from "react";
import styled from "styled-components";

interface FormProps {
  onSubmit: (e: FormEvent) => Promise<void>;
  align?: string;
  children: ReactNode;
}

export const Form: FC<FormProps> = ({ onSubmit, align, children }) => {
  return (
    <FormSC onSubmit={onSubmit} align={align}>
      {children}
    </FormSC>
  );
};

const FormSC = styled.form<FormProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.align || "flex-start"};
  gap: var(--space1);
  width: 100%;
`;
