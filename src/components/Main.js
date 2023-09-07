import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Main = () => {
  const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
  `;
  const MainSection = styled.div`
    padding: 140px 45px;
    background: red;
    width: 100%;
  `;
  return (
    <Container>
      <MainSection>여기는 메인 페이지니까 경력 사항이랑..자기소개 같은거 적어놓쟈</MainSection>
    </Container>
  );
};
export default Main;
