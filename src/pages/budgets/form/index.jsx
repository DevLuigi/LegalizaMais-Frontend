import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { X } from "lucide-react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

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

import ClientAPI from "../../../service/client/client";
import UserAPI from "../../../service/user/user";
import ContractApi from "../../../service/budget/budgetService";
import BudgetItemApi from "../../../service/budgetItem/budgetItem";

const clientApi = new ClientAPI();
const userApi = new UserAPI();
const contractApi = new ContractApi();
const budgetItemApi = new BudgetItemApi();

export default function Form() {
    const navigate = useNavigate();

    const [client, setClient] = useState({});
    const [services, setServices] = useState([]);

    const [title, setTitle] = useState("");
    const [descriptionService, setDescriptionService] = useState("");
    const [usedMaterials, setUsedMaterials] = useState("");
    const [daysOfService, setDaysOfService] = useState("");
    const [quantityOfHelpers, setQuantityOfHelpers] = useState("");
    const [dailyRateHelper, setDailyRateHelper] = useState("");
    const [total, setTotal] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState("");
    const [profit, setProfit] = useState("");
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [selectedInstallments, setSelectedInstallments] = useState("Parcelado em 2x");
   
    const [showModalClients, setShowModalClients] = useState(false);
    const [showModalServices, setShowModalServices] = useState(false);
    

    const optionsInstallments = [
        { id: 2, name: "Parcelado em 2x" },
        { id: 4, name: "Parcelado em 4x" },
        { id: 6, name: "Parcelado em 6x" },
    ];

    const saveBudget =  async () => {
        const inclusionDate = new Date();
        const changeDate = null;
        const inactive = false;

        const userLoggedClient = JSON.parse(Cookies.get("user-logged-client"));
        
        const clientData = await clientApi.getClientById(client?.id);
        const userData = await userApi.getUserById(userLoggedClient?.id); 

        const request = {
            title,
            descriptionService,
            usedMaterials,
            daysOfService,
            quantityOfHelpers,
            dailyRateHelper,
            total,
            discountPercentage,
            profit,
            paymentMethod: paymentMethod - 1,
            "paymentDescription": selectedInstallments,
            client: clientData.data,
            user: userData.data,
            inclusionDate,
            changeDate,
            inactive
        }

        const response = await contractApi.save(request);
        if (!response || response.status !== 201) {
            toast.error(response.error);
            return;
        }

        services.forEach(async service => {
            await budgetItemApi.save({
                budget: response.data,
                service: service,
                user: userData.data,
                inclusionDate,
                changeDate,
                inactive
            })
        });

        toast.success("Orçamento cadastrado com sucesso!");
        navigate("/budgets");
    }

    const calcTotalProfit = () => {
        setProfit(total * (1 - (discountPercentage / 100)));
    }

    const handleCancel = () => {
        navigate('/budgets');
    }

    const removeChip = (id) => {
        const filteredServices = services.filter((item) => item.id !== id);
        setServices(filteredServices);
    }

    useEffect(() => {

    }, [])

    return(
        <ViewForm onSubmit={saveBudget} height={"90vh"} width={"70vw"}>
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
                                        <Chip> { item.Título } </Chip>
                                        <X size={16}/>
                                    </div>
                                )): <></>}
                            </GroupServices>
                        </Input>
                        <Input>
                            <label htmlFor=""> Titulo do orçamento </label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                        </Input>
                        <Input>
                            <label htmlFor=""> Descrição dos serviços </label>
                            <TextArea value={descriptionService} onChange={(e) => setDescriptionService(e.target.value)} />
                        </Input>
                        <Input>
                            <label htmlFor=""> Materiais usados </label>
                            <TextArea value={usedMaterials} onChange={(e) => setUsedMaterials(e.target.value)} />
                        </Input>
                    </ColumnInput>
                    <ColumnInput>
                        <AlignInputs>
                            <Input>
                                <label htmlFor=""> Qtd. Dias serviço </label>
                                <input value={daysOfService} onChange={(e) => setDaysOfService(e.target.value)} type="text" />
                            </Input>
                            <Input>
                                <label htmlFor=""> Qtd. Ajudantes </label>
                                <input value={quantityOfHelpers} onChange={(e) => setQuantityOfHelpers(e.target.value)} type="text" />
                            </Input>
                        </AlignInputs>
                        <Input>
                            <label htmlFor=""> Valor diaria ajudante </label>
                            <input value={dailyRateHelper} onChange={(e) => setDailyRateHelper(e.target.value)} type="text" />
                        </Input>
                        <AlignInputs>
                            <InputTotal>
                                <label htmlFor=""> Valor total </label>
                                <input value={total} onChange={(e) => setTotal(e.target.value)} type="text" />
                            </InputTotal>
                            <InputDiscount>
                                <label htmlFor=""> Desconto (%) </label>
                                <input onBlur={() => calcTotalProfit()} value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} type="text" />
                            </InputDiscount>
                        </AlignInputs>
                        <Input>
                            <label htmlFor=""> Valor lucro </label>
                            <input value={profit} onChange={(e) => setProfit(e.target.value)} type="text" disabled={true} />
                        </Input>
                        <PaymentSelector value={paymentMethod} onChange={setPaymentMethod} onChangeInstallments={setSelectedInstallments}/>
                        {paymentMethod === 1 
                            ? 
                                <StyledCombobox
                                    data={optionsInstallments}
                                    value={optionsInstallments.find(o => o.id === selectedInstallments)}
                                    onChange={(e) => setSelectedInstallments(e.name)}
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