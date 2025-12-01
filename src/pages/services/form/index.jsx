import Button from "../../../components/button";
import LogoImage from '@images/logo.png';
import { Container, Logo } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../../components/input";
import { useState } from "react";
import { Background, Title, AddressBox, GroupButtons } from "./styled";
import CardBox from "../../../components/cardBox";
import InputSelect from "../../../components/inputSelect/index.jsx";

import ServiceAPI from "../../../service/workService/workService.js";
const api = new ServiceAPI();

export default function ServiceRegister() {
    const navigate = useNavigate();

    // Estados
    const [title, setTitle] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [suggestedValue, setSuggestedValue] = useState("");

    function handleSuggestedValueChange(value) {
    // Permite apenas números e vírgula/ponto
    const numericRegex = /^[0-9]*[.,]?[0-9]*$/;

    if (value === "" || numericRegex.test(value)) {
        setSuggestedValue(value);
    }
}

    async function register() {
        // Validação simples
        if (!title || !serviceDescription || !suggestedValue) {
            toast.error("Preencha todos os campos!");
            return;
        }

        // Requisição para API
        const payload = {
            title,
            serviceDescription,
            suggestedValue
        };

        const response = await api.saveService(payload);
        console.log(response)

        if (!response || response.status !== 201) {
            const errorMessage =
                response?.message ||
                response?.error ||
                "Erro ao cadastrar o serviço. Verifique os dados e tente novamente.";
            toast.error(errorMessage);
            return;
        }

        toast.success("Serviço cadastrado com sucesso!");
        navigate("/services");
    }

    return (
        <Background>
            <Logo src={LogoImage} alt="Logo" />
            <CardBox>
                <Container>
                    <Title>Cadastro de Serviço</Title>

                    <section id="dataSection">

                        <div id="leftData">
                            <div id="name">
                                <Input label="Título" value={title} onChange={setTitle} placeholder="Digite o título do serviço" />

                                <Input label="Descrição" value={serviceDescription} onChange={setServiceDescription} placeholder="Digite a descrição do serviço" />

                                <Input label="Valor sugerido" value={suggestedValue} onChange={handleSuggestedValueChange} placeholder="Digite valor sugerido do serviço" />
                            </div>
                        </div>
                    </section>


                    <GroupButtons>
                        <Button color="blue" onClick={register}>Cadastrar</Button>
                        <Button color="red" onClick={() => navigate("/services")}>Cancelar</Button>
                    </GroupButtons>

                </Container>
            </CardBox>
        </Background >
    );
}
