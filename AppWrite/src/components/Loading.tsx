import { FC } from "react";
import styled from "styled-components";

interface LoadingProps {
  style?: object;
}

export const Loading: FC<LoadingProps> = ({ style }) => {
  return (
    <DivSC style={style}>
      <span />
    </DivSC>
  );
};

const DivSC = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  opacity: 1;
  background-color: var(--bg-color);
  transition: opacity 0.5s ease-in-out;

  span {
    content: " ";
    border: 5px solid var(--color1);
    border-radius: 30px;
    height: 30px;
    left: 50%;
    margin: -15px 0 0 -15px;
    opacity: 0;
    position: absolute;
    top: 50%;
    width: 30px;
    animation: pulse 1s ease-out;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;
