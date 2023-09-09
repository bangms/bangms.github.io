import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Main = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
  `;
  const Title = styled.div`
    display: flex;
    height: calc(100vh- 100px);
    width: 100vw;
    justify-content: center;
    align-items: center;
  `;
  const MainSection = styled.div`
    font-size: 2vmin;
    font-family: JetBrains Mono, monospace;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #e4bb68;
    h1,
    span {
      font-family: 'JetBrains Mono', monospace;
      margin: 0;
      padding: 0;
    }
    .string {
      display: flex;
      flex-direction: column;
      text-align: center;
      animation: move 4s infinite;
    }

    .greeting {
      position: relative;
      top: 10.5vmin;
      animation: white-out 5s infinite;
    }

    .closure::after {
      content: '';
      position: absolute;
      height: 25vmin;
      width: 100%;
      background: #fff;
      transform: translate(-50%, -24.5vmin);
    }

    .closure::before {
      content: '';
      position: absolute;
      height: 25vmin;
      width: 100%;
      background: #fff;
      transform: translate(-50%, 5vmin);
    }

    .en {
      color: #fa8231;
    }

    .es {
      color: #a9b0bd;
    }

    .de {
      color: #c678dd;
    }
    @keyframes move {
      25% {
        transform: translatey(-5.5vmin);
        opacity: 1;
      }
      50% {
        transform: translatey(-10.5vmin);
      }
      100% {
        transform: translatey(-16vmin);
      }
    }
  `;
  return (
    <Container>
      <Title>
        <MainSection>
          <h1>
            System
            <span style={{ color: '#fff' }}>
              .<span style={{ color: '#e06c75' }}>out</span>.
            </span>
            <span style={{ color: '#61afef' }}>println</span>("{' '}
          </h1>
          <div class="string">
            <h1 class="greeting en">Welcome!</h1>
            <h1 class="greeting es">Front-end Developer</h1>
            <h1 class="greeting de">Bang's Portfolio</h1>
          </div>
          <h1 class="closure"> ");</h1>
        </MainSection>
      </Title>
    </Container>
  );
};
export default Main;
