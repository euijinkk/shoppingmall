import React from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Header, Product } from '../component';
import { getProductData } from '../lib/api/client';
import { productDataState, userProductDataState } from '../states';

const MainPage = () => {
  const [productData, setProductData] = useRecoilState(productDataState);
  const [userProductData, setUserProductData] =
    useRecoilState(userProductDataState);

  const getData = async () => {
    const data = await getProductData();
    setProductData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  //   useEffect(() => {
  //     (async () => {
  //       const data = await getProductData();
  //       setProductData(data);
  //     })();
  // }, []);

  return (
    <MainWrapper>
      <Header />
      <div className="category">
        <span>All</span>
        <span>상의</span>
        <span>하의</span>
        <span>신발</span>
        <span>악세서리</span>
      </div>
      <div>
        {productData &&
          Object.keys(productData).map((user, index) => (
            <Product key={index} userData={productData[user]} user={user} />
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
