import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.COLORS.DARK_600};
  display: grid;
  grid-template-columns: 9fr 1fr 1fr;
  padding: 2.4rem 12.3rem;
  gap: 2.4rem;
  align-items: center;

  .menu {
    display: none;
  }

  > .teste {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 32px;

    .input {
      width: 100%;
    }

    .admin {
      > .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 9px;

        img {
          height: 30px;
        }

        h3 {
          white-space: nowrap;
          font-size: 24;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
      p {
        font-size: 12px;
        color: #82f3ff;
        text-align: end;
      }
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 56px 28px 24px;

    .menu {
      display: inline;
    }
    .newPlate {
      display: none;
    }

    > .teste {
      > .admin {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      .input {
        display: none;
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
