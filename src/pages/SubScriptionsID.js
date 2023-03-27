import styled from "styled-components";
import Arrow from "../assets/Arrow.svg"
import DetailsPlan from "../components/DetailsPlan";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import apiSubscriptions from "../services/apiSubscriptions";
import Modal from "../components/Modal";




export default function SubscriptionsID() {
    const { id } = useParams();
    const [plan, setPlan] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM3OCwiaWF0IjoxNjc5ODk1OTQ4fQ.0w5DEgiVqtkVKyBvde8EuCHyiMXHP-SdPVXTxUcQ4Ns";
      const headers = { Authorization: `Bearer ${token}` };
  
      apiSubscriptions.get(`/memberships/${id}`, { headers })
        .then(response => {
          setPlan(response.data);
        })
        .catch(error => alert(error.response.data.message));
    }, [id]);


    const handleShowModal = (event) => {
        event.preventDefault();
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

      const handleSubscribe = () => {
        // Adicione aqui a lógica para fazer a assinatura
        console.log("Assinando o plano...");
      };
  
    return (
      <Container>
       <ArrowLink to="/subscriptions">
            <ArrowImage src={Arrow} />
        </ArrowLink>
        <LogoImage src={plan ? plan.image : ""} />
        <PlanoText>{plan ? plan.name : ""}</PlanoText>
        <DetailsPlan plan={plan}/>
        <form onSubmit={handleShowModal}>
          <StyledForm>
            <NameCard>
              <input 
                type="name"
                placeholder="Nome impresso no cartão"
                required  
              />
              <input 
                type="text"
                placeholder="Digitos do cartão"
                required  
              />  
            </NameCard>
            <DataCard>
              <input 
                type="text"
                placeholder="Código de segurança"
                required  
              />
              <input 
                type="text"
                placeholder="Validade"
                required  
              />
            </DataCard>   
          </StyledForm> 
          <Button type="submit">ASSINAR</Button>     
        </form>
        {showModal &&
        <Modal
          handleCloseModal={handleCloseModal}
          plan={plan}
          handleSubscribe={handleSubscribe}
        />
      }
      </Container>
    );
  }

  const ArrowLink = styled(Link)`
  margin-right: 290px;
  margin-top: 20px;
  display: inline-block;
`;

const ArrowImage = styled.img`
  width: 28px;
  height: 27px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LogoImage = styled.img`
    width: 140px;
    height: 95px;
    margin-top: 60px;

`

const PlanoText = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 12px;
    margin-left: 22px;

`



const StyledForm = styled.label`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 34px 0;


  input {
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 9px;
    margin-bottom: 8px;
    border: 1px #FFFFFF;
    

    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #7E7E7E;
      padding-left: 14px;
    }
  }

`

const Button = styled.button`
    
    align-self: center;
    width: 300px;
    height: 52px;
    background: #FF4791;
    border-radius: 9px;
    border: 1px #FF4791;
    margin-top: -20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;

`

const NameCard = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`


const DataCard = styled.div`
    
    display: flex;
    flex-direction: wrap;
    gap:9px;
    margin-bottom: -12px;

    input {
        width: 144px;
        height: 52px;
        background: #FFFFFF;
        border-radius: 9px;
        margin-bottom: 8px;
        border: 1px #FFFFFF;

        &::placeholder {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #7E7E7E;
            padding-left: 6px;
        }
    }
`;