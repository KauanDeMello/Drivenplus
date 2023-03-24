import styled from "styled-components";
import Planos from "../components/Planos";

export default function SubScriptions(){
    return(
        <Container>
            <Topoh1>Escolha seu Plano</Topoh1>
            <Planos/>
            <Planos/>
            <Planos/>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Topoh1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 30px;
`