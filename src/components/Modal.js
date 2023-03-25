import styled from "styled-components";
import Cancel from "../assets/Cancel.svg"

export default function Modal(){

    return(
        <ContainerModal>
            <img src={Cancel} alt="Cancel ICON"/>
             <BoxContainer>
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                <Buttons>
                    <ButtonNO>Não</ButtonNO>
                    <ButtonYES>Sim</ButtonYES>
                </Buttons>
            </BoxContainer>
        </ContainerModal>
    )

}

const ContainerModal = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        position: fixed;
        top: 25px;
        right: 25px;
        width: 28px;
        height: 24px;
    }
`

const BoxContainer = styled.div`

    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 1;
    display: flex;
    width: 248px;
    height: 210px;
    background: #FFFFFF;
    border-radius: 12px;

    p{
        margin-top: 33px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #000000;
    }
`

const Buttons = styled.div`

    margin-top: 47px;
    display: flex;
    align-items: center;
    justify-content: space-around;


`

const ButtonNO = styled.div`

width: 95px;
height: 52px;
background: #CECECE;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

`

const ButtonYES = styled.div`

width: 95px;
height: 52px;
background: #FF4791;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

`