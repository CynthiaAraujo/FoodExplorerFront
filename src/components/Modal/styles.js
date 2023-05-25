import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
`;

export const HeaderModal = styled.div`
  align-items: center;
  display: flex;
  gap: 1.6rem;
  font-size: 2.2rem;
  background: #001119;
  padding: 5.6rem 2.8rem 2.4rem;
`;

export const Main = styled.div`
  padding: 36px 28px;
  height: 100%;
`;

export const ItensMenu = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > button {
    background: transparent;

    border-bottom: 1px solid #192227;
    border-top: none;
    border-left: none;
    border-right: none;

    display: flex;
    justify-content: flex-start;

    p {
      color: white;
      font-weight: 300;
      font-size: 24px;
      line-height: 140%;
    }
  }
`;

export const ModalButton = styled.button`
  background: transparent;

  border-bottom: 1px solid #192227;
  border-top: none;
  border-left: none;
  border-right: none;

  display: flex;
  justify-content: flex-start;
`;

export const Text = styled.p`
  color: white;
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;
`;
