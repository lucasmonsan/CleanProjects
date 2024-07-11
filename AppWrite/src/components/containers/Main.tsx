import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface MainProps {
  align?: string;
  gap?: string;
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ align, gap, children }) => {
  const { pathname } = useLocation();

  const handlePadding = () => {
    if (pathname === "/welcome" || pathname === "/login" || pathname === "/signup") {
      return "noPadding";
    } else {
      return "";
    }
  };

  return (
    <MainSC initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} align={align} gap={gap} className={handlePadding()}>
      {children}
    </MainSC>
  );
};

const MainSC = styled(motion.main)<MainProps>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.align || "flex-start"};
  gap: var(--${(props) => props.gap || "space1"});
  width: 100%;
  min-height: 100dvh;
  max-height: 100dvh;
  padding: calc(var(--height) + var(--space2)) var(--space4);

  &.noPadding {
    padding: var(--space4);
  }
`;
