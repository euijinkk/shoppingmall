import React from 'react';
import styled from 'styled-components';
import { Header, Product } from '../component';

const DetailPage = ({ data, user, authService }) => {
    console.log("data",data);
  return (
    <DetailWrapper>
      <Header authService={authService} />
      <h2 className="subtitle">내가 등록한 상품</h2>
      { (data && data.product) ? <Product userData={data.product} user={user} /> : <div>담아둔 상품이 없습니다.</div>}
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
