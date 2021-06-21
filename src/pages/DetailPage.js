import React from 'react';
import styled from 'styled-components';
import { Header, Product } from '../component';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginMailState, productDataState } from '../states';

const DetailPage = ({ authService }) => {
  const loginMail = useRecoilValue(loginMailState);
  const [productData, setProductData] = useRecoilState(productDataState);
  const data = productData[loginMail];

  return (
    <DetailWrapper>
      <Header authService={authService} />
      <h2 className="subtitle">내가 등록한 상품</h2>
      { (data && data.product) ? <Product userData={data.product} user={loginMail} /> : <div>담아둔 상품이 없습니다.</div>}
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
