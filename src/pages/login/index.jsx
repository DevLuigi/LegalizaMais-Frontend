import React from "react";
import {
  Container,
  Card,
  Title,
  Label,
  Input,
  Button,
  SignupText,
  Logo,
  GroupLabelInput
} from "./styled";

export default function Login() {
  return (
    <Container>
      <Logo src="/assets/images/logo.png" alt="Logo" />
      <Card>
        <Title>Login</Title>
        <form>
          <GroupLabelInput>
            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu email" />
          </GroupLabelInput>

          <GroupLabelInput>
            <Label>Senha</Label>
            <Input type="password" placeholder="Digite sua senha" />
          </GroupLabelInput>

          <SignupText>
            Não tem uma conta ainda? <a href="#">Cadastre-se</a>
          </SignupText>

          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </Container>
  );
}
