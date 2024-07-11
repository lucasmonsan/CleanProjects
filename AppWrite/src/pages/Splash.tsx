import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../components/containers/Main";
import { Img } from "../components/elements/Img";
import { Title } from "../components/elements/Title";

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("notFirst", "true");
      navigate("/welcome");
    }, 3000);
  }, []);

  return (
    <Main align="center">
      <Img src="./logo.svg" alt="Logo do Whallet!" width="8rem" />
      <Title size="h4">Whallet!</Title>
    </Main>
  );
};
