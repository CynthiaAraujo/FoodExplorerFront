import styled from "styled-components";

export const Container = styled.div`
  height: 104px;
  width: 100%;

  background: ${({ theme }) => theme.COLORS.DARK_600};
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 0.5fr;
  padding: 24px 123px;
  gap: 32px;
  align-items: center;

  .menu {
    display: none;
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 56px 28px 24px;
    align-items: center;
    .menu {
      display: inline;
    }

    .input {
      display: none;
    }

    .newPlate {
      position: relative;
      background-color: transparent;
      span:first-of-type {
        display: none;
      }
      span:last-of-type {
        background: ${({ theme, disabled }) =>
          disabled ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
        border-radius: 50%;
        padding: 2px 6px;
        position: absolute;
        right: 15px;
        top: 0;
      }
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: none;

  img {
    width: 30px;
    height: 30px;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;
    white-space: nowrap;
  }
`;
