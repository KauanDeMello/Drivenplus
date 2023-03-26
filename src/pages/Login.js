import styled from "styled-components";
import Logo from "../assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import { useState } from "react";

export default function Login(){
  const [formo, setFormo] = useState({email: "", password:""})
  const navigate = useNavigate()

  function handleFormo(e){
    setFormo({...formo, [e.target.name] : e.target.value})
  }

  function handleLogin(e){
    e.preventDefault()
  
    apiAuth.login(formo)
      .then(res => {
        if (res.data.plan === null) {
          navigate("/subscriptions")
        } else {
          navigate("/home")
        }
      })
      .catch(err => {
        alert(err.response.data.message)
        console.log(err.response.data)
      })
  }



    return(
        <>
        <Container>
            <LogoImage src={Logo}/>
            <form onSubmit={handleLogin}>
                <StyledForm>

                 <input 
                 name ="email"
                  type="email"
                  placeholder="E-mail"
                  required 
                  value={formo.email}
                  onChange={handleFormo} 
                 />

                <input 
                name="password"
                  type="password"
                  placeholder="Senha"
                  required
                  value={formo.password}
                  onChange={handleFormo}    
                 />

                 <button type="submit">ENTRAR</button>
                </StyledForm>
            </form>
            <StyledLink to="/sign-up">
            Não possuí uma conta? Cadastre-se
            </StyledLink>
        </Container>
        
        </>
        
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

const LogoImage = styled.img`
      width: 299px;
      height: 49px;
      margin-top: 134px ;
        `

const StyledForm = styled.label`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 110px 0;


  input {
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 9px;
    margin-bottom: 16px;
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
    color: #FFFFFF;

  }
`

const StyledLink = styled(Link)`
    margin-top: -85px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-decoration-line: underline;
    color: #FFFFFF;
    align-self: center;
  `