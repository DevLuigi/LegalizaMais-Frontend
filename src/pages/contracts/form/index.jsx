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
import apiService from "../../../service/contract/contractService.js";
import budgetService from "../../../service/budget/budgetService.js";
import typeContractService from "../../../service/typeContract/typeContractService.js";
import PopupFilterBudget from "@components/popupFilterBudget/index.jsx";
import {toast} from "react-toastify";

export default function ListBudgets() {
    const api = new apiService();
    const apiBudget = new budgetService();
    const apiTypeContract = new typeContractService();
    const [pageSelected, setPageSelected] = useState({
        fileName: null,
        module: { default: Template01 }
    });
    const [budget, setBudget] = useState();
    const [budgetSelected, setBudgetSelected] = useState();
    const [showModalBudgets, setShowModalBudgets] = useState(false);

    const path = ["Meus Contratos", "Gerar Contrato"];
    const navigation = useNavigate();

    const templates = import.meta.glob("../../../assets/templates/*.jsx", { eager: true });
    const typesContracts = Object.entries(templates).map(([path, module]) => {
        const fileName = path.split("/").pop().replace(".jsx", "");
        return {
            fileName,
            module
        };
    });

    const handleCancel = () => {
        navigation("/contracts");
    }

    const findBudget = async () => {
        const resp = await apiBudget.getById(budget.id);
        setBudgetSelected(resp.data);
    }

    const createContract = async () => {
        let contract;
        const typeCcontract = await apiTypeContract.getByName(pageSelected.fileName);
        contract = {
            typeContract: typeCcontract.data,
            budget: budgetSelected,
            client: budgetSelected.client,
            inclusionDate: new Date().toISOString(),
            changeDate: null,
            inactive: false
        };
        api.save(contract);
        generateContract({ datas: contract, page: pageSelected.module.default, fileName: pageSelected.fileName || 'Contrato' });
        navigation("/contracts");
        toast.success("Contrato gerado com sucesso!");
    }

    useEffect(() => {
        findBudget();
    }, [budget]);

    return(
        <ViewMain path={path}>
            <Container>
                <GroupInput>
                    <ColumnInput>
                        <Input>
                            <label htmlFor=""> Orçamento </label>
                            <div>
                                <InputClient value={budgetSelected?.title ?? ""} disabled type="text" />
                                <ButtonModal onClick={() => setShowModalBudgets(true)}> + </ButtonModal>
                            </div>
                        </Input>
                        <Input>
                            <label htmlFor=""> Descrição dos Serviços </label>
                            <TextArea value={budgetSelected?.descriptionService ?? ""} disabled/>
                        </Input>
                    </ColumnInput>
                    <ColumnInput>
                        <Input>
                            <label htmlFor="" > Cliente </label>
                            <input value={budgetSelected?.client.name ?? ""} type="text" disabled/>
                        </Input>
                        <Input>
                            <label htmlFor=""> Valor Total </label>
                            <input value={budgetSelected?.total ?? ""} type="text" disabled/>
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