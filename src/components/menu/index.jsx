import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Cookies from "js-cookie"; 

import Popup from "../popup";
import { Container, Item, Logo, GroupItens } from "./styled";

export default function Menu() {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigate();

    const logout = () => {
        Cookies.remove('user-logged');
        navigation("/login");
    }

    return (
        <Container>
            <Logo>
                <img src="/assets/images/logo.png" alt="Logo" />
            </Logo>
            <GroupItens>
                <div>
                    <Item onClick={() => navigation("/")}>
                        <img src="/assets/images/home-icon.png" alt="ícone" width={20} height={20} />
                        Página inicial
                    </Item>
                    <Item onClick={() => navigation("/services")}>
                        <img src="/assets/images/service-icon.png" alt="ícone" width={20} height={20} />
                        Serviços
                    </Item>
                    <Item onClick={() => navigation("/clients")}>
                        <img src="/assets/images/client-icon.png" alt="ícone" width={20} height={20} />
                        Clientes
                    </Item>
                    <Item onClick={() => navigation("/budgets")}>
                        <img src="/assets/images/budget-icon.png" alt="ícone" width={20} height={20} />
                        Orçamentos
                    </Item>
                    <Item onClick={() => navigation("/contracts")}>
                        <img src="/assets/images/contract-icon.png" alt="ícone" width={20} height={20} />
                        Contratos
                    </Item>
                </div>
            </GroupItens>
            <div>
                <Item onClick={() => setShowModal(true)}>
                    <img src="/assets/images/logout-icon.png" alt="ícone" width={20} height={20} />
                    Sair
                </Item>
            </div>
            {showModal && <Popup onConfirm={logout} message="Você deseja sair?" setterRender={setShowModal} renderModal={showModal} />}
        </Container>
    )
}