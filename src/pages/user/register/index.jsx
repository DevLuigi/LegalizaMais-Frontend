import Button from "../../../components/button";
import ViewMain from "../../../components/view/viewMain";
import { Container } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../../components/input";
import { useState } from "react";
import { Background, Title, AddressBox, GroupButtons } from "./styled";
import CardBox from "../../../components/cardBox";
import InputSelect from "../../../components/inputSelect/index.jsx";

import UserAPI from "../../../service/user/user.js";
const api = new UserAPI();

export default function Register() {
  const navigate = useNavigate();

  // Estados
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [personType, setPersonType] = useState("");
  const [ddd, setDdd] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [addressComplement, setAddressComplement] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [addressInfo, setAddressInfo] = useState("");

  // Opções de tipo de pessoa (compatível com enum)
  const options = [
    { value: "FISICA", label: "Física" },
    { value: "JURIDICA", label: "Jurídica" },
  ];

  const handleCepChange = async (value) => {
    const cleanCep = value.replace(/\D/g, "");
    setCep(cleanCep);

    if (cleanCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();

        if (data.erro) {
          toast.error("CEP não encontrado!");
          setAddressInfo("");
          return;
        }

        setAddressInfo(`${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`);
        toast.success("Endereço encontrado!");
      } catch {
        toast.error("Erro ao buscar o CEP.");
      }
    } else {
      setAddressInfo("");
    }
  };

  const isInvalidEmail = () => !/^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  async function register() {
    // Validação simples
    if (!name || !document || !personType || !ddd || !phone || !email || !password || !confirmPassword || !cep || !addressComplement || !addressNumber) {
      toast.error("Preencha todos os campos!");
      return;
    }

    if (isInvalidEmail()) {
      toast.error("E-mail inválido!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }

    // Requisição para API
    const payload = {
      name,
      document,
      personType,
      ddd,
      phone,
      email,
      password,
      cep,
      addressComplement,
      addressNumber,
    };

    const response = await api.register(payload);
    console.log(response)

    if (response.status != 201) {
      toast.error("Erro ao cadastrar usuário!");
    }

    toast.success("Usuário cadastrado com sucesso!");
    navigate("/exemplo");
  }

  return (
    <Background>

      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: "100%"
      }}>
        <img
          src="/assets/images/logo.png"
          alt="Logo LegalizaMais"
          style={{ marginBottom: "1rem", marginTop: "2rem" }}
        />
      </div>

      <CardBox>
        <Container>
          <Title>Cadastro de Usuário</Title>

          <div className="grid">
            <Input label="Nome" value={name} onChange={setName} placeholder="Digite seu nome completo" />
            <Input label="E-mail" value={email} onChange={setEmail} placeholder="exemplo@dominio.com" />
          </div>

          <div className="grid">
            <Input
              label="Documento"
              value={document}
              onChange={setDocument}
              placeholder={personType === "JURIDICA" ? "Digite o CNPJ" : "Digite o CPF"}
            />
            <Input
              label="Tipo de pessoa"
              options={options}
              value={personType}
              onChange={setPersonType}
            />

          </div>

          <div className="grid">
            <Input label="DDD" value={ddd} onChange={setDdd} placeholder="Ex: 11" />
            <Input label="Telefone" value={phone} onChange={setPhone} placeholder="Ex: 91234-5678" />
          </div>

          <div className="grid">
            <Input label="Senha" type="password" value={password} onChange={setPassword} placeholder="Crie uma senha" />
            <Input label="Confirmar Senha" type="password" value={confirmPassword} onChange={setConfirmPassword} placeholder="Repita sua senha" />
          </div>

          <h3>Endereço</h3>

          <div className="grid">
            <Input label="CEP" value={cep} onChange={handleCepChange} placeholder="Ex: 01001-000" />
          </div>

          <div className="grid">
            <Input label="Complemento" value={addressComplement} onChange={setAddressComplement} placeholder="Apartamento, bloco, etc." />
            <Input label="Número" value={addressNumber} onChange={setAddressNumber} placeholder="Número da residência" />
          </div>

          <AddressBox>
            <p><strong>Localidade encontrada</strong></p>
            <p>{addressInfo || "Digite um CEP válido para buscar o endereço"}</p>
          </AddressBox>

          <GroupButtons>
            <Button color="blue" onClick={register}>Cadastrar</Button>
            <Button color="red" onClick={() => navigate("/")}>Cancelar</Button>
          </GroupButtons>
        </Container>
      </CardBox>
    </Background>
  );
}
