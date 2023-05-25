import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 5px;

  > input {
    width: 100%;
    height: 44px;
    border-radius: 5px;
    padding: 12px 14px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border: ${({ theme, isNew }) =>
      isNew ? `1px dashed ${theme.COLORS.LIGHT_100}` : "none"};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 14px;
      display: flex;
      justify-content: flex-start;
      text-align: start;
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
