import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  loginMailState,
  productDataState,
  userProductDataState,
} from '../../states';
import AddIcon from '@material-ui/icons/Add';
import { createProductData } from '../../lib/api/client';

const Product = ({ userData, register }) => {
  const history = useHistory();
  const location = useLocation();
  const loginMail = useRecoilValue(loginMailState);
  const [productData, setProductData] = useRecoilState(productDataState);

  const handleDelete = async (data) => {
    const newData = userData.filter((user) => user[0].id !== data[0].id);
    const newData2 = {
      ...productData,
      [loginMail]: {
        product: newData,
      },
    };
    const newData3 = await createProductData(newData2);
    setProductData(newData3);
  };

  const handleEdit = async (data) => {
    history.push({
      pathname: '/regist',
      state: {
        data: data,
      },
    });
  };

  const handleCart = async (data) => {
    // console.log(data);
    if (!loginMail) {
      history.push('/login');
      return;
    }
    const a = productData[loginMail].cart.concat([data]);
    console.log(a);
    const b = {
      ...productData,
      [loginMail]: { ...productData[loginMail], cart: a },
    };
    console.log(b);
    setProductData(b);
    await createProductData(b);
  };

  const handleCartDelete = async (data) => {
    const a = productData[loginMail].cart.filter(item => item !==data);
    console.log(a);
    const b = {...productData, [loginMail]:{...productData[loginMail],
    cart:a}}
    setProductData(b);
    await createProductData(b);
  }

  return (
    <ProductWrapper>
      {userData &&
        userData.map((data) => (
          <div key={data[0].id} className="product">
            <div className="product--list">
              <img src={data[0].img} alt="product" />
              <div className="metadata">
                <span>{data[0].title}</span>
                <span>{data[0].price}</span>
                <span>{data[0].delivery}</span>
                <span>{register}</span>
              </div>
            </div>
            {location.pathname === '/' ? (
              <button className="basket" onClick={() => handleCart(data)}>
                장바구니
              </button>
            ) : location.pathname === '/my' ? (
              <div className="buttonContainer">
                <button
                  className="modify--btn"
                  onClick={() => handleEdit(data)}
                >
                  수정
                </button>
                <button onClick={() => handleDelete(data)}>삭제</button>
              </div>
            ) : (
              <button onClick={() => handleCartDelete(data)}>삭제</button>
            )}
          </div>
        ))}
      {loginMail && <MyButton onClick={() => history.push('/regist')} />}
    </ProductWrapper>
  );
};

export default Product;

const MyButton = styled(AddIcon)`
  width: 100px;
  height: 100px;
  color: white;
  font-size: 40px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: skyblue;
  border-radius: 50%;
  cursor: pointer;
`;

const ProductWrapper = styled.div`
  padding-left: 20px;
  .product {
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;

    &--list {
      display: flex;
      align-items: center;
      img {
        width: 180px;
        height: 180px;
        margin-right: 20px;
      }
      .metadata {
        display: flex;
        flex-direction: column;
        line-height: 40px;
      }
    }
    .buttonContainer {
      display: flex;
      flex-direction: column;

      .modify--btn {
        margin-bottom: 7px;
      }
    }
    button {
      margin-right: 20px;
      border: none;
      outline: none;
      background-color: skyblue;
      color: white;
      cursor: pointer;
    }
  }
`;
