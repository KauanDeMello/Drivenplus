import styled from "styled-components";
import Cancel from "../assets/Cancel.svg"

export default function Modal(){

    return(
        <ContainerModal>
            <img src={Cancel}/>
        </ContainerModal>
    )

}

const ContainerModal = styled.div`


height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

    img{
        margin-left: 300px;
        width: 28px;
        height: 24px;
        margin-top: 25px;
        

    }

`

