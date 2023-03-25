import styled from "styled-components";
import MoneyImage from "../assets/Money.svg"
import BoardImage from "../assets/Board.svg"

export default function DetailsPlan(){
    return(
        <Container>
            <Benefits> 
            <img src={BoardImage} alt="Board Icon"/>
             <span>Benefícios:</span>
            </Benefits>
            <BenefitsList>
                <li>1. Brindes exclusivos</li>
                <li>2. Materiais bônus de web</li>
            </BenefitsList>
            <Price>
            <img src={MoneyImage} alt="Money Icon"/>
            <span>Preço:</span>
            <PriceList>
            <li>R$ 39,99 cobrados mensalmente</li>     
            </PriceList> 
            </Price>    
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Benefits = styled.div`
    margin-top: 22px;

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        margin-left: 5px;
    }

    img {
        width: 12px;
        height: 16px;
        margin-left: 44px;
    }
`;

const BenefitsList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    li {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left: 44px;
        color: #FFFFFF;
     }
`;

const Price = styled.div`
        margin-top: 12px;
        

        span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-left: 5px;
        color: #FFFFFF;
    }

    img {
        width: 14px;
        height: 12px;
        margin-left: 41px;
    }

`
const PriceList = styled.ul`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    
    li {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left: 44px;
     }
`
    