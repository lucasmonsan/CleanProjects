import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
  style?: object;
  animation?: string;
}

const hide = { opacity: 0 };
const show = { opacity: 1 };
const fast = { duration: 0.25 };
const slow = { duration: 0.5 };

export const Section: FC<ContainerProps> = ({ children, animation, style }) => {
  return (
    <motion.section
      initial={animation === "bottom" ? { ...hide, y: 128 } : hide}
      whileInView={animation === "bottom" ? { ...show, y: 0 } : show}
      exit={animation === "bottom" ? { ...hide, y: 128 } : hide}
      transition={fast}
      style={style}
    >
      {children}
    </motion.section>
  );
};

export const Div: FC<ContainerProps> = ({ children }) => {
  return (
    <motion.div id="Container" initial={hide} whileInView={show} exit={hide} transition={slow}>
      {children}
    </motion.div>
  );
};

export const Main: FC<ContainerProps> = ({ children }) => {
  return (
    <motion.main id="Container" initial={hide} animate={show} exit={hide} transition={slow}>
      {children}
    </motion.main>
  );
};
