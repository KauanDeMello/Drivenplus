import styled from "styled-components";
import LogoWhite from "../assets/LogoWhite.svg"

export default function Planos(){
    return(
        <Planbox>
            <LogoImage src={LogoWhite}/>
            <Price>R$ 39,99</Price>
        </Planbox>
    )
}

const Planbox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 290px;
    height: 180px;
    left: 43px;
    top: 91px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-top: 25px;
`

const LogoImage = styled.img`
    width: 139.38px;
    height: 95.13px;
    left: 59px;
    top: 133px;
`

const Price = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`