import React from 'react';
import styled from 'styled-components';
import BasicTextFields from '../service/material/BasicTextFields';
import CustomizedRadios from '../service/material/CustomizedRadios';
import CustomizedSelects from '../service/material/CustomizedSelects';

const RegisterPage = () => {
  return (
    <RegisterWrapper>
      <div className="input--data">
        <span className="title container">
          <span>제목</span> <BasicTextFields title="title" type="text" />
        </span>
        <span className="category container"><span>카테고리</span><CustomizedSelects /></span>
        <span className="price container"><span>가격</span> <BasicTextFields title="price" type="number" /><span>원</span></span>
        <span className="delivery container">
          <span className="delivery--text">배송비</span>
          <CustomizedRadios />
        </span>
      </div>
      <input type="file" />
      <textarea />
    </RegisterWrapper>
  );
};

export default RegisterPage;

const RegisterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .input--data {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(2, 80px);
    .container {
        display:flex;
        align-items:center;
    }
    .price{
        
    }

    .delivery{
        display:flex;
        align-items: center;
        &--text{
            margin-right:20px;
        }
    }
  }
`;
