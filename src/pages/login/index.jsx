import { useState } from "react";
import ViewMain from "@components/view/viewMain";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import LogoImage from '@images/logo.png';


import { toast } from "react-toastify";

import {
  Container,
  Card,
  Title,
  Label,
  Input,
  RegisterText,
  Logo
} from "./styled";

import UserAPI from "../../service/user/user";

const api = new UserAPI();

export default function Login() {
  const path = ["Login"];
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      toast.warn("Preencha o e-mail e senha antes de entrar");
      return;
    }

    const response = await api.login({ email, password });

    if (response.status === 404) {
      toast.error("Credenciais inválidas");
      return;
    }

    if (response.status !== 200) {
      toast.error(response.error || "Erro inesperado");
      return;
    }

    Cookies.set("user-logged-client", JSON.stringify(response.data), {
      expires: 7
    });

    toast.success("Login efetuado com sucesso!");
    navigation("/");
  };

  return (
      <Container>
        <Logo src={LogoImage} alt="Logo" />

        <Card>
          <Title>Login</Title>

          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <RegisterText>
            Não tem uma conta ainda? <Link to="/register">Cadastre-se</Link>
          </RegisterText>

          <button
            style={{
              width: "100%",
              height: "42px",
              background: "#1a49ff",
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px"
            }}
            onClick={handleLogin}
          >
            Entrar
          </button>
        </Card>
      </Container>
  );
}
