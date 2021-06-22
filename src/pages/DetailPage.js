import React from 'react';
import styled from 'styled-components';
import { Header, Product } from '../component';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginMailState, productDataState } from '../states';
import { matchPath, useRouteMatch } from 'react-router-dom';

const DetailPage = ({ authService }) => {
  const loginMail = useRecoilValue(loginMailState);
  const [productData, setProductData] = useRecoilState(productDataState);
  // const data = productData[loginMail];
  const match = useRouteMatch();
  console.log(match.path);
  const data = match.path==="/cart" ? productData[loginMail].cart : productData[loginMail].product
  const messgae = match.path==="/cart" ? "내가 담은 목록" : "내가 등록한 상품"

  return (
    <DetailWrapper>
      <Header authService={authService} />
      <h2 className="subtitle">{messgae}</h2>
      { data ? <Product userData={data} user={loginMail} /> : <div>담아둔 상품이 없습니다.</div> }
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
