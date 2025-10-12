import Button from "../../../components/button";
import ViewMain from "../../../components/view/viewMain";
import { Container } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../../components/input";
import { useState } from "react";
import { Background, Title, AddressBox, GroupButtons } from "./styled";
import CardBox from "../../../components/cardBox";

// Import do API
import UserAPI from "../../../service/user/user.js";
const api = new UserAPI();

export default function Register() {
    const path = ["Cadastro", "Cadastro de Usuário"]; // Caminho que vai aparecer no topo da tela

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


    const options = ["Física", "Jurídica"]; // Array para select

    const navigation = useNavigate();

    const isFormCompleted = Object.values(
        [name, document, personType, ddd, phone, email, password, confirmPassword, cep, addressComplement, addressNumber]
    ).every((value) => value.trim() !== "");

    const isInvalidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        return !emailRegex.test(email);
    }

    const isValidCPF = (cpf) => {
        cpf = cpf.replace(/[^\d]+/g, "");
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        let resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;
        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) resto = 0;
        return resto === parseInt(cpf.charAt(10));
    };

    const isValidCNPJ = (cnpj) => {
        cnpj = cnpj.replace(/[^\d]+/g, "");
        if (cnpj.length !== 14) return false;
        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado !== parseInt(digitos.charAt(0))) return false;
        tamanho++;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        return resultado === parseInt(digitos.charAt(1));
    };

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

                setAddressInfo(`${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}, ${data.cep}`);
                toast.success("Endereço encontrado com sucesso!");
            } catch (error) {
                console.error(error);
                toast.error("Erro ao buscar o CEP. Tente novamente!");
            }
        } else {
            setAddressInfo("");
        }
    };

    async function register() {
        if (!isFormCompleted) {
            toast.error("Preencha todos os campos antes de continuar!");
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

        // CPF/CNPJ
        if (personType === "Física" && !isValidCPF(document)) {
            toast.error("CPF inválido!");
            return;
        }
        if (personType === "Jurídica" && !isValidCNPJ(document)) {
            toast.error("CNPJ inválido!");
            return;
        }

        // CEP
        if (!/^\d{8}$/.test(cep)) {
            toast.error("CEP inválido! Deve conter 8 dígitos numéricos.");
            return;
        }

        // map para ordinal
        let personTypeFormatted = null;
        if (personType === "Física") personTypeFormatted = "FISICA";
        if (personType === "Jurídica") personTypeFormatted = "JURIDICA";

        const response = await api.register({
            name,
            document,
            personType: personTypeFormatted,
            ddd,
            phone,
            email,
            password,
            cep,
            addressComplement,
            addressNumber
        });

        console.log(response);

        if (response.status !== 201) {
            toast.warn(response.error);
            console.log(response.message);
            toast.error("Erro ao cadastrar usuário!");
            return;
        }

        console.log(response);
        toast.success("Usuário cadastrado com sucesso!");
        navigation("/exemplo"); // Redireciona para a página de login
    }

    return (
        <Background>
            <CardBox>
                <Container>
                    <Title>Cadastro de usuário</Title>

                    <div className="grid">
                        <Input label="Nome" value={name} onChange={setName} />
                        <Input label="E-mail" value={email} onChange={setEmail} />
                    </div>

                    <div className="grid">
                        <Input label="Documento" value={document} onChange={setDocument} />
                        <Input
                            label="Tipo de pessoa"
                            selectOptions={options}
                            value={personType}
                            onChange={setPersonType}
                        />
                    </div>

                    <div className="grid">
                        <Input label="DDD" value={ddd} onChange={setDdd} />
                        <Input label="Telefone" value={phone} onChange={setPhone} />
                    </div>

                    <div className="grid">
                        <Input label="Senha" type="password" value={password} onChange={setPassword} />
                        <Input
                            label="Confirmar Senha"
                            type="password"
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                        />
                    </div>

                    <h3>Endereço</h3>

                    <div className="grid">
                        <Input label="CEP" value={cep} onChange={handleCepChange} />
                    </div>

                    <div className="grid">
                        <Input
                            label="Complemento"
                            value={addressComplement}
                            onChange={setAddressComplement}
                        />
                        <Input
                            label="Número"
                            value={addressNumber}
                            onChange={setAddressNumber}
                        />
                    </div>

                    <AddressBox>
                        <p><strong>Localidade encontrada</strong></p>
                        <p>{addressInfo ? addressInfo : "Digite um CEP válido para buscar o endereço"}</p>
                    </AddressBox>

                    <GroupButtons>
                        <Button id="btn-cadastrar" color="blue" onClick={register}>
                            Cadastrar
                        </Button>
                        <Button id="btn-cancelar" color="red" onClick={() => navigation("/")}>
                            Cancelar
                        </Button>
                    </GroupButtons>
                </Container>
            </CardBox>
        </Background>
    );

}