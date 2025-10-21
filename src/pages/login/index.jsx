import React from "react";
import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Title,
  Label,
  Input,
  Button,
  SignupText,
} from "./styled";

export default function Login() {
  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <form>
          <Label>Email</Label>
          <Input type="email" placeholder="Digite seu email" />

          <Label>Senha</Label>
          <Input type="password" placeholder="Digite sua senha" />

          <SignupText>
            Não tem uma conta ainda? <a href="#">Cadastre-se</a>
          </SignupText>

          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </Container>
  );
}
