import styled from "styled-components";
import { useState, useEffect } from "react";
import apiSubscriptions from "../services/apiSubscriptions"


export default function Plan() {
    const [planList, setPlanList] = useState([]);
  
    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM3OCwiaWF0IjoxNjc5ODk1OTQ4fQ.0w5DEgiVqtkVKyBvde8EuCHyiMXHP-SdPVXTxUcQ4Ns";
        const headers = { Authorization: `Bearer ${token}` };

        apiSubscriptions.get("/memberships", { headers })
        .then(response => {
          setPlanList(response.data);
          console.log(response.data);
        })
        .catch(error => alert(error.response.data.message));
    }, []);



    return (
        <div>
        {planList.map(plan => (
          <Planbox key={plan.id}>
            <LogoImage src={plan.image} />
            <Price>R$ {plan.price}</Price>
            <div>{plan.id}</div>
            <div>{plan.description}</div>
            <div>{plan.benefits}</div>
          </Planbox>
        ))}
      </div>
    );
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