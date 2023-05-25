import styled from "styled-components";

export const Container = styled.div`
  width: 304px;
  height: 462px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.DARK_200};
  padding: 2.4rem;

  .icon {
    width: 100%;
    background: transparent;
    border: none;
    display: flex;
    justify-content: flex-end;
  }

  .favorite {
    width: 100%;
    background: transparent;
    border: none;
    display: flex;
    justify-content: flex-end;
  }

  > button {
    background: transparent;
    border: none;
  }
  > .plates {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      > .imgPlate {
        img {
          max-width: 176px;
        }
      }
      > button {
        background: transparent;
        border: none;
      }
      .informations {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;

        h1 {
          font-size: 2.4rems;
          text-align: center;
          white-space: nowrap;
        }

        h5 {
          font-size: 32px;
          font-weight: 400;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
          text-align: center;
          line-height: 160%;
        }

        .includePlates {
          display: flex;
          flex-direction: row;
          gap: 16px;
          align-items: center;
          .decreaseOrAdd {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    min-width: 210px;
    height: 100%;
    > .plates {
      main {
        > .imgPlate {
          align-items: center;
          display: flex;
          justify-content: center;
          img {
            max-width: 88px;
          }
        }
        .informations {
          display: flex;
          gap: 1.2rem;

          h1 {
            font-size: 1.2rem;
          }

          p {
            display: none;
          }

          h2 {
            font-size: 1.6rem;
          }

          .includePlates {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            align-items: center;
            .decreaseOrAdd {
              display: flex;
              flex-direction: row;
              align-items: center;
              font-size: 1.2rem;
            }

            .dishAdd {
              max-width: 162px;
              max-height: 32px;
              border-radius: 8px;
              background: ${({ theme }) => theme.COLORS.TOMATO_100};
            }
          }
        }
      }
    }
  }
`;
