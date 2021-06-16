import React from 'react';
import styled from 'styled-components';
import { Header, Product } from '../component';

const DetailPage = ({ data, user }) => {
  return (
    <DetailWrapper>
      <Header />
      <h2 className="subtitle">내가 등록한 상품</h2>
      <Product userData={data} user={user} />
    </DetailWrapper>
  );
};

export default DetailPage;

const DetailWrapper = styled.section`
    .subtitle{
        font-size:34px;
        text-align:center;
        margin: 20px 0;
        color:skyblue;
    }
`;
