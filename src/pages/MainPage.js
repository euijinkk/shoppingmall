import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useRecoilState} from 'recoil';
import styled from 'styled-components';
import { loginMailState } from '../states';
import { Header, Product } from '../component';
import { getProductData } from '../lib/api/client';
import { productDataState, userProductDataState } from '../states';

const MainPage = ({ authService }) => {
  const [productData, setProductData] = useRecoilState(productDataState);
  const [loginMail, setLoginMail] = useRecoilState(loginMailState);
  const [userProductData, setUserProductData] =
    useRecoilState(userProductDataState);

  useEffect(() => {
    loginMail && setUserProductData(productData[loginMail]);
  }, [loginMail, productData, setUserProductData]);

  // const getData = useCallback(async () => {
  //   const data = await getProductData();
  //   setProductData(data);
  // },[setProductData]);

  const getData = async () => {
    const data = await getProductData();
    setProductData(data);
  };
  useEffect(()=> {
    console.log(productData);
  }, [productData])
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <MainWrapper>
      <Header authService={authService} />
      <div className="category">
        <span>All</span>
        <span>상의</span>
        <span>하의</span>
        <span>신발</span>
        <span>악세서리</span>
      </div>
      <div className="product--container">
        {productData &&
          Object.keys(productData).map((user, index) => (
            <Product key={index} userData={productData[user].product} register={user} />
          ))}
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
    margin-bottom: 20px;
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
