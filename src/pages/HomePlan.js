import styled from "styled-components";
import LogoWhite from "../assets/LogoWhite.svg"
import Profile from "../assets/Profile.svg"

export default function HomePlan(){

    return(
        
        <Container>
        <TopContainer>
            <LogoImage src={LogoWhite} alt="Logo Icon"/>
            <ProfileImage src={Profile} alt ="Profile Icon"/>
        </TopContainer>
        <GreetingText>Olá, Fulano!</GreetingText>
        
            <ButtonsForm>
            <button type="submit">Solicitar Brindes</button>
            <button type="submit">Materiais bônus de web</button>
            <button type="submit">Materiais bônus de web</button>
            <button type="submit">Materiais bônus de web</button>
            </ButtonsForm>
            <FooterButtons>
            <ChangeButton>Mudar plano</ChangeButton>
            <CancelButton>Cancelar plano</CancelButton>
            </FooterButtons>
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

const TopContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const LogoImage = styled.img`
    margin-top: 32px;
    margin-left: 38px;
    width: 74px;
    height: 50px;

`

const ProfileImage = styled.img`
    margin-top: 22px;
    margin-right: 22px;
    width: 34px;
    height: 32px;

`

const GreetingText = styled.h2`
    margin-top: 22px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`


const ButtonsForm = styled.div`

  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 53px;
  
  button {
    align-self: center;
    width: 300px;
    height: 52px;
    background: #FF4791;
    border-radius: 9px;
    border: 1px #FF4791;
    margin-top: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;}

`

const FooterButtons = styled.div`
    position: absolute;
    bottom: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ChangeButton = styled.div`

    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 53px;
    align-items: center;
    width: 300px;
    height: 52px;
    background: #FF4791;
    border-radius: 9px;
    border: 1px #FF4791;
    margin-top: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
`

const CancelButton = styled.label`


    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 53px;
    align-items: center;
    width: 300px;
    height: 52px;
    background: #FF4747;
    border-radius: 9px;
    border: 1px #FF4791;
    margin-top: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
`

