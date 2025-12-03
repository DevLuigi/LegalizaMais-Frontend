import { useNavigate } from "react-router-dom";

import ViewMain from "@components/viewMain";
import Template01 from "../../../assets/templates/template01.jsx";
import { Container, ColumnInput,
    Input,
    TextArea,
    GroupInput,
    GroupContracts,
    BoxContract,
    ContainerContracts,
    GroupButton} from "./styled.js";
import ExclamationCircle from "@images/exclamation-circle.png";
import {AlertMessage} from "@components/popupCombo/styled.js";
import Button from "@components/button/index.jsx";
import {generateContract} from "../../../service/utils/GenerateContract.jsx";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import PopupFilterClient from "@components/popupFilterClient/index.jsx";
import {ButtonModal, InputClient} from "../../budgets/form/styled.js";
import apiService from "../../../service/contract/contractService.js"
import budgetService from "../../../service/budget/budgetService.js"
import PopupFilterBudget from "@components/popupFilterBudget/index.jsx";

export default function ListBudgets() {
    const api = new apiService();
    const apiBudget = new budgetService();
    const [pageSelected, setPageSelected] = useState({default: Template01});
    const [budget, setBudget] = useState();
    const [showModalBudgets, setShowModalBudgets] = useState(false);

    const path = ["Meus Contratos", "Gerar Contrato"];
    const navigation = useNavigate();

    const templates = import.meta.glob("../../../assets/templates/*.jsx", { eager: true });
    const typesContracts = Object.values(templates);


    const handleCancel = () => {
        navigation("/contracts");
    }

    const findBudget = () => {
        const resp = apiBudget.getById(budget.id);
        setBudget(resp);
    }

    const createContract = () => {
        let contract;
        console.log(budget);
        debugger;
        // api.save(contract);
        // generateContract({ page: pageSelected.default, fileName: 'Contrato' });
    }

    useEffect(() => {
        createContract();
    }, [budget]);

    return(
        <ViewMain path={path}>
            <Container>
                <GroupInput>
                    <ColumnInput>
                        <Input>
                            <label htmlFor=""> Orçamento </label>
                            <div>
                                <InputClient value={budget?.name ?? ""} disabled type="text" />
                                <ButtonModal onClick={() => setShowModalBudgets(true)}> + </ButtonModal>
                            </div>
                        </Input>
                        <Input>
                            <label htmlFor=""> Descrição dos Serviços </label>
                            <TextArea value={budget?.name ?? ""} disabled/>
                        </Input>
                    </ColumnInput>
                    <ColumnInput>
                        <Input>
                            <label htmlFor="" > Cliente </label>
                            <input value={budget?.name ?? ""} type="text" disabled/>
                        </Input>
                        <Input>
                            <label htmlFor=""> Valor Total </label>
                            <input value={budget?.name ?? ""} type="text" disabled/>
                        </Input>
                    </ColumnInput>
                </GroupInput>

                <ContainerContracts>
                    <label> Modelos de Contrato </label>
                    <GroupContracts>
                        {
                            typesContracts.map((item, index) => (
                                <BoxContract tabIndex={0} onClick={() => setPageSelected(item)}>
                                    Contrato {index}
                                </BoxContract>
                            ))
                        }
                    </GroupContracts>
                    <AlertMessage>
                        <img src={ExclamationCircle} alt="exclamation-circle"/>
                        <p> Precisa adicionar um novo modelo de contrato? Entre em contato com o suporte do Legaliza+ </p>
                    </AlertMessage>
                    <GroupButton>
                        <Button type="submit" color="blue" onClick={createContract}> Cadastrar </Button>
                    </GroupButton>
                </ContainerContracts>
                {showModalBudgets &&
                    <PopupFilterBudget
                        renderModal={showModalBudgets}
                        setterRender={setShowModalBudgets}
                        onConfirm={setBudget}
                    />
                }
            </Container>
        </ViewMain>
    )
}