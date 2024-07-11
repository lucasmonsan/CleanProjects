import { useNavigate } from "react-router-dom";
import { Main } from "../components/containers/Main";
import { Section } from "../components/containers/Section";
import { Img } from "../components/elements/Img";
import { Title } from "../components/elements/Title";
import { Text } from "../components/elements/Text";
import { Button } from "../components/elements/Button";

export const Welcome = () => {
  const navigate = useNavigate();
  var link = "https://images.pexels.com/photos/3662838/pexels-photo-3662838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <Main align="flex-end">
      <Img src={link} alt="Imagem de comida no fundo da tela" z="-1" position="fixed" width="100%" height="100%" />

      <Section animation="zoom" delay={1}>
        <Title size="h4" color="color1">
          Bem vindo(a) ao
        </Title>
        <Title size="h1" align="center" width="100%" color="color1">
          Whallet!
        </Title>
        <Text align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam impedit eveniet iste nostrum architecto exercitationem.</Text>
        <Button width="100%" onClick={() => navigate("/login")}>
          Vamos começar!
        </Button>
      </Section>
    </Main>
  );
};
