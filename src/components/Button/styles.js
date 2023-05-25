import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 48px;
  border: none;
  border-radius: 5px;
  padding: 1.2rem 2.4rem;

  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2px;
  white-space: nowrap;
  align-items: center;

  @media (max-width: 1000px) {
  }
`;
