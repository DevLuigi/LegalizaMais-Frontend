import { useEffect, useState } from "react";

import ViewForm from "@components/viewForm";
import Button from "@components/Button";
import PaymentSelector from "@components/paymentSelector";

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
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate();

    // const param = useParams().id;
    const [client, setClient] = useState({ id: 1, name: "Luigi da silva coelho" });
    const [services, setServices] = useState([
        { id: 1, label: "Sem serviços" },
        { id: 2, label: "Troca de tomada" },
        { id: 3, label: "Construção" },
        { id: 4, label: "Sem serviços" },
        { id: 5, label: "Troca de tomada" },
        { id: 6, label: "Construção" },
        { id: 7, label: "Sem serviços" },
        { id: 8, label: "Troca de tomada" },
        { id: 9, label: "Construção" },
        { id: 10, label: "Sem serviços" },
        { id: 11, label: "Troca de tomada" },
        { id: 12, label: "Construção" },
    ]);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [selectedInstallments, setSelectedInstallments] = useState(0);

    const optionsInstallments = [
        { id: 2, name: "Parcelado em 2x" },
        { id: 4, name: "Parcelado em 4x" },
        { id: 6, name: "Parcelado em 6x" },
        // { id: 8, name: "Parcelado em 8x" },
        // { id: 10, name: "Parcelado em 10x" },
        // { id: 12, name: "Parcelado em 12x" },
    ];

    const verifyOperation = () => {
        
    }

    const handleCancel = () => {
        navigate('/budgets');
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
                                <InputClient value={client.name} disabled type="text" />
                                <ButtonModal> + </ButtonModal>
                            </div>
                        </Input>
                        <Input>
                            <GroupLabelButton>
                                <label htmlFor=""> Lista de serviços </label>
                                <ButtonModal> + </ButtonModal>
                            </GroupLabelButton>
                            <GroupServices>
                                {services.length > 0 ? services.map((item) => (
                                    <Chip> { item.label } </Chip>
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
            </Container>
        </ViewForm>
    )
}