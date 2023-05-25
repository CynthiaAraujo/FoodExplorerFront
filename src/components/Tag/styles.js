import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, readOnly }) =>
    readOnly ? theme.COLORS.DARK_1000 : " transparent"};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, readOnly }) =>
    readOnly ? "none" : `1px dashed ${theme.COLORS.LIGHT_600}`};

  border-radius: 10px;
  padding-right: 16px;
  width: 118px;
  height: 32px;
  text-align: center;
  align-items: center;

  font-size: 16px;

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.CARROT_100};
  }

  > input {
    height: 40px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    text-align: center;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 12px;
      text-align: center;
      padding: 16px 8px;
    }
  }
`;
