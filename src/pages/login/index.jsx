import LogoImage from '@images/logo.png';
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
      <Logo src={LogoImage} alt="Logo" />
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
