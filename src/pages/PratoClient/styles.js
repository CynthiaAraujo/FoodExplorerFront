import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 1368px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 2.4rem 12.3rem 10rem;

  .handleBack {
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
  }

  > main {
    margin-top: 4.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 4.8rem;
    align-items: center;

    img {
      width: 100%;
    }

    .dishInformation {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
        word-wrap: break-word;
      }

      .tags {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }

    .quantity {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 3.3rem;
      .decreaseOrAdd {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1.4rem;
        font-size: 2rem;
      }

      .dishAdd {
        width: 16.2rem;

        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 10% 20%;
    align-items: center;

    .handleBack {
      align-self: start;
      h5 {
        font-size: 24px;
      }
    }
    > main {
      display: flex;
      flex-direction: column;

      img {
        width: 80%;
      }

      .dishInformation {
        max-width: 316px;
        display: flex;
        align-items: center;

        h1 {
          white-space: nowrap;
          font-size: 2.5rem;
        }

        p {
          font-size: 1.6rem;
          text-align: center;
        }

        .tags {
          display: flex;
          flex-direction: row;
          gap: 24px;
        }
      }

      .dishAdd {
        width: 100%;
      }
    }
  }
`;
