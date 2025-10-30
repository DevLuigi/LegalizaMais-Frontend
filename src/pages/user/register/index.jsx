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

  // Limita a quantidade máxima de caracteres permitidos
  const limitDocument = (value) => {
    // CPF → 11 dígitos / CNPJ → 14 dígitos
    const maxLength = personType === "JURIDICA" ? 14 : 11;
    return value.replace(/\D/g, "").slice(0, maxLength);
  };

  const limitDdd = (value) => value.replace(/\D/g, "").slice(0, 2);

  const limitPhone = (value) => value.replace(/\D/g, "").slice(0, 9);

  const limitCep = (value) => value.replace(/\D/g, "").slice(0, 8);


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

    if (!response || response.status !== 201) {
      const errorMessage =
        response?.message ||
        response?.error ||
        "Erro ao cadastrar usuário. Verifique os dados e tente novamente.";
      toast.error(errorMessage);
      return;
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
            <Input label="Nome" value={name} onChange={setName} placeholder="Digite seu nome completo" width="93%" />
            <Input label="E-mail" value={email} onChange={setEmail} placeholder="Digite seu email" width="93%" />
          </div>

          <div className="grid">
            <Input
              label="Documento"
              value={document}
              onChange={(v) => setDocument(limitDocument(v))}
              placeholder={personType === "JURIDICA" ? "Digite o CNPJ (Apenas números)" : "Digite o CPF (Apenas números)"}
              width="93%"
            />
            <InputSelect
              label="Tipo de pessoa"
              options={options}
              value={personType}
              onChange={setPersonType}
              width="35%"
            />
          </div>

          <div className="grid">
            <Input
              label="DDD"
              value={ddd}
              onChange={(v) => setDdd(limitDdd(v))}
              placeholder="Digite o DDD do seu telefone"
              width="50%"
            />
            <Input
              label="Telefone"
              value={phone}
              onChange={(v) => setPhone(limitPhone(v))}
              placeholder="Digite seu telefone (Apenas números)"
              width="93%"
            />
          </div>

          <div className="grid">
            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="Crie uma senha"
              width="93%" />

            <Input
              label="Confirmar Senha"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="Repita sua senha"
              width="93%" />
          </div>

          <h3>Endereço</h3>

          <div className="grid">
            <Input
              label="CEP"
              value={cep}
              onChange={(v) => {
                const formatted = limitCep(v);
                handleCepChange(formatted);
              }}
              placeholder="Digite seu cep (Apenas números)"
              width="93%"
            />
          </div>

          <div className="grid">
            <Input
              label="Complemento"
              value={addressComplement}
              onChange={setAddressComplement}
              placeholder="Apartamento, bloco, etc."
              width="93%"
            />

            <Input
              label="Número"
              value={addressNumber}
              onChange={setAddressNumber}
              placeholder="Número da residência"
              width="40%"
            />
          </div>

          <AddressBox>
            <p><strong>Localidade encontrada</strong></p>
            <p>{addressInfo || "Digite um CEP válido acima para buscar o endereço"}</p>
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
