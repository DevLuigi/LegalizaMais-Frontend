import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { X } from "lucide-react";

import ViewForm from "@components/viewForm";
import Button from "@components/Button";
import PaymentSelector from "@components/paymentSelector";
import PopupFilterClient from "@components/popupFilterClient";
import PopupFilterServices from "@components/popupFilterServices";

import { 
    Container, 
    GroupButton, 
    GroupInput, 
    ColumnInput, 
    Input, 
    Title,
    InputClient,
    ButtonModal,
    Chip,
    GroupLabelButton,
    GroupServices,
    TextArea,
    AlignInputs,
    InputTotal,
    InputDiscount,
    StyledCombobox
} from "./styled";

export default function Form() {
    const navigate = useNavigate();

    // const param = useParams().id;
    const [client, setClient] = useState({});
    const [services, setServices] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [selectedInstallments, setSelectedInstallments] = useState(0);
    const [showModalClients, setShowModalClients] = useState(false);
    const [showModalServices, setShowModalServices] = useState(false);

    const optionsInstallments = [
        { id: 2, name: "Parcelado em 2x" },
        { id: 4, name: "Parcelado em 4x" },
        { id: 6, name: "Parcelado em 6x" },
    ];

    const verifyOperation = () => {
        
    }

    const handleCancel = () => {
        navigate('/budgets');
    }

    const removeChip = (id) => {
        const filteredServices = services.filter((item) => item.id !== id);
        setServices(filteredServices);
    }

    useEffect(() => {
        verifyOperation();
    })

    return(
        <ViewForm onSubmit={verifyOperation} height={"90vh"} width={"70vw"}>
            <Container>
                <Title> Cadastro </Title>
                <GroupInput>
                    <ColumnInput>
                        <Input>
                            <label htmlFor=""> Cliente </label>
                            <div>
                                <InputClient value={client?.name ?? ""} disabled type="text" />
                                <ButtonModal onClick={() => setShowModalClients(true)}> + </ButtonModal>
                            </div>
                        </Input>
                        <Input>
                            <GroupLabelButton>
                                <label htmlFor=""> Lista de serviços </label>
                                <ButtonModal onClick={() => setShowModalServices(true)}> + </ButtonModal>
                            </GroupLabelButton>
                            <GroupServices>
                                {services.length > 0 ? services.map((item) => (
                                    <div onClick={() => removeChip(item.id)}>
                                        <Chip> { item.description } </Chip>
                                        <X size={16}/>
                                    </div>
                                )): <></>}
                            </GroupServices>
                        </Input>
                        <Input>
                            <label htmlFor=""> Titulo do orçamento </label>
                            <input type="text" />
                        </Input>
                        <Input>
                            <label htmlFor=""> Descrição dos serviços </label>
                            <TextArea />
                        </Input>
                        <Input>
                            <label htmlFor=""> Materiais usados </label>
                            <TextArea />
                        </Input>
                    </ColumnInput>
                    <ColumnInput>
                        <AlignInputs>
                            <Input>
                                <label htmlFor=""> Qtd. Dias serviço </label>
                                <input type="text" />
                            </Input>
                            <Input>
                                <label htmlFor=""> Qtd. Ajudantes </label>
                                <input type="text" />
                            </Input>
                        </AlignInputs>
                        <Input>
                            <label htmlFor=""> Valor diaria ajudante </label>
                            <input type="text" />
                        </Input>
                        <AlignInputs>
                            <InputTotal>
                                <label htmlFor=""> Valor total </label>
                                <input type="text" />
                            </InputTotal>
                            <InputDiscount>
                                <label htmlFor=""> Desconto (%) </label>
                                <input type="text" />
                            </InputDiscount>
                        </AlignInputs>
                        <Input>
                            <label htmlFor=""> Valor lucro </label>
                            <input type="text" disabled={true} />
                        </Input>
                        <PaymentSelector value={paymentMethod} onChange={setPaymentMethod} />
                        {paymentMethod === 1 
                            ? 
                                <StyledCombobox
                                    data={optionsInstallments}
                                    value={optionsInstallments.find(o => o.id === selectedInstallments)}
                                    onChange={(e) => setSelectedInstallments(e.id)}
                                    dataKey='id'
                                    textField='name'
                                    defaultValue={2}
                                /> 
                            : 
                                <></>
                        }
                    </ColumnInput>
                </GroupInput>
                <GroupButton>
                    <Button type="submit" color="blue"> Cadastrar </Button>
                    <Button type="button" color="red" onClick={handleCancel}> Cancelar </Button>
                </GroupButton>

                {showModalClients && 
                    <PopupFilterClient 
                        renderModal={showModalClients} 
                        setterRender={setShowModalClients} 
                        onConfirm={setClient} 
                    />
                }

                {showModalServices && 
                    <PopupFilterServices 
                        renderModal={showModalServices}
                        setterRender={setShowModalServices}
                        onConfirm={setServices}
                    />
                }
            </Container>
        </ViewForm>
    )
}