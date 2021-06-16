import React from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginMailState } from '../states';
import { Header, Product } from '../component';
import { getProductData } from '../lib/api/client';
import { productDataState, userProductDataState } from '../states';
import AddIcon from '@material-ui/icons/Add';

const MainPage = ({ authService }) => {
  const [productData, setProductData] = useRecoilState(productDataState);
  const [loginMail, setLoginMail] = useRecoilState(loginMailState);
  const [userProductData, setUserProductData] =
    useRecoilState(userProductDataState);

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(loginMail);
    loginMail && setUserProductData(productData[loginMail]);

  }, [loginMail]);

  useEffect(() => {
      console.log(userProductData)
  }, [userProductData])

  const onLogout = () => {
    authService.logout();
    setLoginMail("");
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
      {loginMail && <MyButton />}
    </MainWrapper>
  );
};

export default MainPage;

const MyButton = styled(AddIcon)`
  width: 100px;
  height: 100px;
  color: white;
  font-size: 40px;
  position:absolute;
  right:20px;
  bottom:20px;
  background-color:skyblue;
  border-radius: 50%;
`;

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
