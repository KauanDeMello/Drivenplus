import styled from "styled-components";
import Modal from "./Modal";

export default function ModalWrapper() {
  return (
    <Wrapper>
      <Modal />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(128, 128, 128, 0.5);
`;