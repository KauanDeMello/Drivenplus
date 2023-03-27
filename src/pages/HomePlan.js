import styled from "styled-components";
import Profile from "../assets/Profile.svg"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function HomePlan(){
    const { user, setUser, token } = useContext(UserContext);
    const navigate = useNavigate();
    const[id, setId] = useState("");
    const[cardName, seCardname] = useState("");
    const[cardNumber, setCardNumber] = useState("");
    const[securityNumber, setSecurityNumber] = useState("");
    const[expirationDate, setExpirationDate] = useState("")
    

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData);
    }, [setUser]);


    const handleCancelPlan = () => {
        const headers = { Authorization: `Bearer ${token}` };
    
        axios
          .delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", {
            headers,
          })
          .then((response) => {
            alert("Plano cancelado com sucesso!");
            navigate ("/subscriptions");
          })
          .catch((error) => alert(error.response.data.message));
      };
    
      const handleChangePlan = () => {
        const headers = { Authorization: `Bearer ${token}` };
    
        const newPlan = {
            membershipId: id,
            cardName: cardName,
            cardNumber: cardNumber,
            securityNumber: securityNumber,
            expirationDate: expirationDate,
          };
    
        axios
          .post(
            "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
            newPlan,
            { headers }
          )
          .then((response) => {
            alert("Plano alterado com sucesso!");
             navigate ("/subscriptions");
          })
          .catch((error) => alert(error.response.data.message));
      };

      return(
        <Container>
        <TopContainer>
            <LogoImage src={(user.membership.image)} alt="Logo Icon"/>
            <ProfileImage src={Profile} alt ="Profile Icon"/>
        </TopContainer>
        <GreetingText>Olá, {JSON.stringify(user.name)}!</GreetingText>


        
        <ButtonsForm>
      {user.membership.perks.map((perk, index) => (
        <a href={perk.link} target="_blank" rel="noopener noreferrer" key={index}>
          <button type="button">{perk.title}</button>
        </a>
      ))}
    </ButtonsForm>
            <FooterButtons>
            <ChangeButton onClick={handleChangePlan}>Mudar plano</ChangeButton>
            <CancelButton onClick={handleCancelPlan}>Cancelar plano</CancelButton>
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

