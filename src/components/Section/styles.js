import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0 28px;
  width: 100%;
  position: relative;

  .carousel::-webkit-scrollbar {
    display: none;
  }

  > .CarouselSection {
    position: relative;

    > .carousel {
      overflow-x: auto;
      flex-flow: row nowrap;
      scroll-behavior: smooth;

      .cardSection {
        width: 100%;
        display: flex;
        flex-direction: space-between;
        align-items: flex-end;
        gap: 27px;
        flex-shrink: 0;
        scroll-snap-align: end;
      }

      .arrow-left,
      .arrow-right {
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 5px;
        background: transparent;
      }

      .arrow-left {
        left: -40px;
        right: auto;
      }

      .arrow-right {
        left: auto;
        right: 0;
      }
    }
  }

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 23px;

    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
  }

  @media (max-width: 1000px) {
    width: 100%;

    > h2 {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 400;
    }

    > .CarouselSection {
      > .carousel {
        width: 100%;
        display: flex;
        flex-direction: row;
        .cardSection {
          max-width: 100px;
          display: flex;
          flex-direction: row;
          gap: 24px;
        }

        .arrow-left,
        .arrow-right {
          display: none;
        }
      }
    }
  }
`;
