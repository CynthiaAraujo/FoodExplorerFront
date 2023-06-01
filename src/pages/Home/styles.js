import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.div`
  padding: 2.6rem 12.4rem 0;
  width: 100%;
  max-width: 136.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > .ImageHome {
    width: 100%;

    position: relative;
    margin-top: 16.6rem;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 0.8rem;
    height: 26rem;
    padding: 10rem;

    > .description {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: last baseline;
      position: absolute;
      width: 50%;
      min-width: 42.2rem;
      right: 10rem;
      top: 8.9rem;

      h1 {
        font-size: 4rem;
        font-weight: 600;
      }
      p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
    .imageHeader {
      position: absolute;
      max-width: 63.2rem;
      left: -7rem;
      bottom: -1.4rem;
    }
  }

  @media (max-width: 1350px) {
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ImageHome {
      margin: 10% 0 0;
      height: 12rem;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .imageHeader {
        width: 50%;
        min-width: 19.1rem;
        height: auto;
        min-height: 14.9rem;
        overflow: visible;
        bottom: 0;
      }

      .description {
        padding: 0;
        right: 2.1rem;
        top: 3.6rem;
        min-width: 20.2rem;

        h1 {
          font-size: 1.8rem;
          white-space: nowrap;
          line-height: 140%;
        }
        p {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 140%;
        }
      }
    }
  }
`;
