import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Cookies from "js-cookie"; 

import ImageLogoMini from '@images/logo-mini.png';
import ImageLogo from '@images/logo.png';
import HomeIcon from '@images/home-icon.png';
import ServiceIcon from '@images/service-icon.png';
import ClientIcon from '@images/client-icon.png';
import BudgetIcon from '@images/budget-icon.png';
import ContractIcon from '@images/contract-icon.png';
import LogoutIcon from '@images/logout-icon.png'; 

import PopupConfirm from "@components/popupConfirm";

import { Container, Item, Logo, GroupItens } from "./styled";

export default function Menu() {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigate();

    const logout = () => {
        Cookies.remove('user-logged');
        navigation("/");
    }

    return (
        <Container>
            <Logo>
                <img src={ImageLogoMini} alt="Logo reduzido" className="logo-mini" />
                <img src={ImageLogo} alt="Logo completa" className="logo-full" />
            </Logo>
            <GroupItens>
                <div>
                    <Item onClick={() => navigation("/")}>
                        <img src={HomeIcon} alt="ícone" width={20} height={20} />
                        <span>Página inicial</span>
                    </Item>
                    <Item onClick={() => navigation("/services")}>
                        <img src={ServiceIcon} alt="ícone" width={20} height={20} />
                        <span>Serviços</span>
                    </Item>
                    <Item onClick={() => navigation("/clients")}>
                        <img src={ClientIcon} alt="ícone" width={20} height={20} />
                        <span>Clientes</span>
                    </Item>
                    <Item onClick={() => navigation("/budgets")}>
                        <img src={BudgetIcon} alt="ícone" width={20} height={20} />
                        <span>Orçamentos</span>
                    </Item>
                    <Item onClick={() => navigation("/contracts")}>
                        <img src={ContractIcon} alt="ícone" width={20} height={20} />
                        <span>Contratos</span>
                    </Item>
                </div>
            </GroupItens>
            <div>
                <Item onClick={() => setShowModal(true)}>
                    <img src={LogoutIcon} alt="ícone" width={20} height={20} />
                    <span>Sair</span>
                </Item>
            </div>
            {showModal && <PopupConfirm onConfirm={logout} title="Você deseja sair?" setterRender={setShowModal} renderModal={showModal} />}
        </Container>
    )
}