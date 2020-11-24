import React, { useContext } from 'pages/projects/node_modules/react';
import { ThemeContext } from 'pages/projects/node_modules/providers/ThemeProvider';
import { Header } from 'pages/projects/node_modules/components/theme';
import { Layout, Container } from 'pages/projects/node_modules/components/common';
import styled from 'pages/projects/node_modules/styled-components';
import overlayIllustration from 'pages/projects/node_modules/assets/illustrations/overlay.svg';

export const Bloomboard = () => {
  const { theme } = useContext(ThemeContext);

  const Wrapper = styled.div`
    padding-bottom: 4rem;
    background-image: url(${overlayIllustration});
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;
  `;

  const IntroWrapper = styled.div`
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 960px) {
      flex-direction: column;
    }
  `;

  const Details = styled.div`
    flex: 1;

    @media (max-width: 960px) {
      width: 100%;
      margin-bottom: 2rem;
    }

    h1 {
      margin-bottom: 2rem;
      font-size: 36pt;
      color: ${({ themeColor }) => (themeColor === 'light' ? '#212121' : '#fff')};

      @media (max-width: 960px) {
        mix-blend-mode: ${({ themeColor }) => (themeColor === 'light' ? 'unset' : 'difference')};
      }

      @media (max-width: 680px) {
        font-size: 30pt;
      }
    }

    h4 {
      margin-bottom: 2.5rem;
      font-size: 32pt;
      font-weight: normal;
      color: ${({ themeColor }) => (themeColor === 'light' ? '#707070' : '#e6e6e6')};

      @media (max-width: 960px) {
        mix-blend-mode: ${({ themeColor }) => (themeColor === 'light' ? 'unset' : 'difference')};
      }

      @media (max-width: 680px) {
        font-size: 26pt;
      }
    }
  `;

  const Card = styled.div`
    height: 250px;
    width: 200px;
    border-radius: 8px;
    background: white;
    border: 5px solid #aaa;
    cursor: pointer;
  `;

  const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  `

  return (
    <Layout>
      <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
          <Details theme={theme}>
            <h1>Bloomboard</h1>
            BEEJFDKLSFJSKLF
          </Details>
        </IntroWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Bloomboard;
