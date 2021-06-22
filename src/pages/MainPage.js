import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
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
  const [filteredData, setFilteredData] = useState(productData);

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
  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (event) => {
    const categoryName = event.target.innerText;
    let tempData = productData;

    if (categoryName === "All") {
      setFilteredData(productData);
      return;
    }
    for (let key in productData) {
      const userFilteredData = productData[key].product.filter(
        (item) => item[0].category === categoryName,
      );
      tempData = {
        ...tempData,
        [key]: { ...tempData[key], product: userFilteredData },
      };
    }
    setFilteredData(tempData);
  };

  return (
    <MainWrapper>
      <Header authService={authService} />
      <div className="category">
        {['All', '상의', '하의', '신발', '악세서리'].map((category, index) => (
          <span key={index} onClick={handleFilter}>
            {category}
          </span>
        ))}
      </div>
      <div className="product--container">
        {filteredData &&
          Object.keys(filteredData).map((user, index) => (
            <Product
              key={index}
              userData={filteredData[user].product}
              register={user}
            />
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
