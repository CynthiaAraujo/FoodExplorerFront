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
  max-width: 1368px;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > .ImageHome {
    width: 100%;
    position: relative;
    margin-top: 166px;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 8px;
    height: 260px;
    padding: 100px;

    > .description {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: last baseline;

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
      max-width: 632px;

      right: 552px;
      top: -112px;
    }
  }

  @media (max-width: 1000px) {
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ImageHome {
      margin-right: 50px;
      margin: 0;
      height: 120px;
      padding: 0;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      .imageHeader {
        position: static;
        width: 191px;
        height: 149px;
        top: -25px;
        right: 215px;
      }

      .description {
        width: 215px;
        padding: 0;
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
