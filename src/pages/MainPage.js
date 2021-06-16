import React from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isLoginState } from '../states';
import { Header, Product } from '../component';
import { getProductData } from '../lib/api/client';
import { productDataState, userProductDataState } from '../states';

const MainPage = ({ authService }) => {
  const [productData, setProductData] = useRecoilState(productDataState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const [userProductData, setUserProductData] =
    useRecoilState(userProductDataState);
  const isLogin = useRecoilValue(isLoginState);

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    isLogin && console.log(location.state.mail);
  }, [isLogin]);

  const onLogout = () => {
    authService.logout();
    setIsLogin(false);
  };

  // useEffect(() => {
  //     authService.onAuthChange((user) => {
  //         if (!user) {
  //             history.push('/');
  //         }
  //     });
  // });

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
      <Header onLogout={onLogout} />
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
  .product--container {
    padding-left: 20px;
  }
`;
