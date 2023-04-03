import styled from "styled-components";
import { useState, useEffect } from "react";
import apiSubscriptions from "../services/apiSubscriptions"
import { Link } from "react-router-dom";

export default function Plan() {
    const [planList, setPlanList] = useState([]);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const headers = { Authorization: `Bearer ${user.token}` };

        apiSubscriptions.get("/memberships", { headers })
            .then(response => {
                setPlanList(response.data);
            })
            .catch(error => {
                setError(error.response.data.message);
            });
    }, [user.token]);



    return (
        <div>
        {planList.map(plan => (
           <StyledLink key={plan.id} to={`/subscriptions/${plan.id}`}>
            <Planbox key={plan.id}>
            <LogoImage src={plan.image} />
            <Price>R$ {plan.price}</Price>
          </Planbox>

           </StyledLink> 
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


const StyledLink = styled(Link)`
  text-decoration: none;
`;