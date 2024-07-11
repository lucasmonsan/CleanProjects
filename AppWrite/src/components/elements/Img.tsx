import { FC } from "react";
import styled from "styled-components";

interface ImgProps {
  src: string;
  alt: string;
  z?: string;
  position?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const Img: FC<ImgProps> = ({ src, alt, z, position, width, height, className }) => {
  return <ImgSC src={src} alt={alt} z={z} position={position} width={width} height={height} className={className} />;
};

const ImgSC = styled.img<ImgProps>`
  z-index: ${(props) => props.z};
  position: ${(props) => props.position};
  top: 0;
  left: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
`;
