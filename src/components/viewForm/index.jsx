import Logo from "@images/logo.png";

import { Container, Content, BoxContent } from "./styled.js";

export default function ViewForm({ children, onSubmit, height, width }) {
    
    const submitFunction = (e) => {
        e.preventDefault();
        onSubmit();
    }
    
    return(
        <Container onSubmit={submitFunction}>
            <img src={Logo} alt="logo-site" />
            <Content>
                <BoxContent height={height} width={width}>
                    {children}
                </BoxContent>
            </Content>
        </Container>
    )
}