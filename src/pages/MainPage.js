import React from 'react';
import styled from 'styled-components';
import { Header } from '../component';

const MainPage = () => {
  return (
    <MainWrapper>
      <Header />
      <div className="category">
        <span>All</span>
        <span>상의</span>
        <span>하의</span>
        <span>신발</span>
        <span>악세사리</span>
      </div>
    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.section`
  .category {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    span {
      border: 1px solid blue;
      width: 40px;
      height: 20px;
      margin: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;
