import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    max-width: 428px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  padding: 64px;

  width: 100%;
  max-width: 476px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 16px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
  }

  > label {
    text-align: start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 1000px) {
    background-color: transparent;

    > h1 {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  gap: 19px;
  justify-content: center;
  align-items: center;
  border: none;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 42px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 37.2431px;
    }

    > img {
      width: 43.31px;
      height: 43.31px;
    }
  }
`;
