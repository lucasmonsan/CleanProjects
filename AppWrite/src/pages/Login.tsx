import { FormEvent, useState } from "react";
import { account } from "../api/appwrite"; // Importe o cliente do AppWrite aqui
import { Main } from "../components/containers/Main";
import { Section } from "../components/containers/Section";
import { Img } from "../components/elements/Img";
import { Title } from "../components/elements/Title";
import { Form } from "../components/containers/Form";
import { Input } from "../components/elements/Input";
import { Button } from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { Text } from "../components/elements/Text";
import { Div } from "../components/containers/Div";
import { validateEmail, validatePassword } from "../utils/inputValidations";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    } else if (!validatePassword(password)) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return;
    } else {
      try {
        const response = await account.createEmailPasswordSession(email, password);
        console.log("Login successful!", response);
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  };

  const handleSocialLogin = async (name: string) => await alert(name);

  const handleLogout = async () => await account.deleteSessions();

  return (
    <Main align="center" gap="space4">
      <Section>
        <Img src="./logo.svg" alt="Logo do Whallet!" width="12rem" />
        <Title width="100%" align="center" size="h3">
          Fazer Login
        </Title>
      </Section>

      <Form onSubmit={handleLogin} align="center">
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} width="100%" />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} width="100%" />
        <Button variant="transparent" size="strong" height="2.5rem" onClick={handleLogout}>
          Esqueci a senha
        </Button>
        <Button onClick={handleLogout} width="100%">
          Entrar
        </Button>
      </Form>

      <Section gap="space2">
        <Div gap="space2" width="95%">
          <hr style={{ flex: 1 }} />
          <Title size="h6">ou</Title>
          <hr style={{ flex: 1 }} />
        </Div>
        <Button variant="opaque" onClick={() => handleSocialLogin("facebook")}>
          <Img src="./facebook.svg" alt="Logo do Whallet!" height="100%" />
        </Button>
        <Button variant="opaque" onClick={() => handleSocialLogin("google")}>
          <Img src="./google.svg" alt="Logo do Whallet!" height="100%" />
        </Button>
        <Button variant="opaque" onClick={() => handleSocialLogin("apple")}>
          <Img src="./apple.svg" alt="Logo do Whallet!" height="100%" />
        </Button>
        <Button variant="transparent" width="100%" onClick={() => navigate("/signup")}>
          <Text>Não tem conta?</Text>
          <Title color="color1">Cadastre-se!</Title>
        </Button>
      </Section>
    </Main>
  );
};
