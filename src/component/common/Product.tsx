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
import { IProduct, ICart } from '../../types';

interface Props {
  userData: IProduct[] | ICart[];
  register?: string;
  user?: string;
}

const Product: React.FC<Props> = ({ userData, register }) => {
  const history = useHistory();
  const location = useLocation();
  const loginMail = useRecoilValue(loginMailState);
  const [productData, setProductData] = useRecoilState(productDataState);

  const handleDelete = async (data: IProduct | ICart) => {
    const newData = userData.filter((user) => user.id !== data.id);
    const newData2 = productData && {
      ...productData,
      [loginMail]: {
        ...productData[loginMail],
        product: newData,
      },
    };
    const newData3 = await createProductData(newData2);
    setProductData(newData3);
  };

  const handleEdit = async (data: IProduct | ICart) => {
    history.push({
      pathname: '/regist',
      state: {
        data: data,
      },
    });
  };

  const handleCart = async (data: IProduct | ICart) => {
    if (!loginMail) {
      history.push('/login');
      return;
    }
    const a = productData && productData[loginMail].cart.concat([data]);
    const b: any = productData && {
      ...productData,
      [loginMail]: { ...productData[loginMail], cart: a },
    };
    setProductData(b);
    await createProductData(b);
  };

  const handleCartDelete = async (data: IProduct | ICart) => {
    const a =
      productData &&
      productData[loginMail].cart.filter((item) => item !== data);
    const b: any = productData && {
      ...productData,
      [loginMail]: { ...productData[loginMail], cart: a },
    };
    setProductData(b);
    await createProductData(b);
  };

  return (
    <ProductWrapper>
      {userData &&
        userData.map((data) => (
          <div key={data.id} className="product">
            <div className="product--list">
              <img src={data.img} alt="product" />
              <div className="metadata">
                <span>{data.title}</span>
                <span>{data.price}</span>
                <span>{data.delivery}</span>
                <span>{register}</span>
              </div>
            </div>
            {location.pathname === '/' ? (
              <button className="basket" onClick={() => handleCart(data)}>
                ????????????
              </button>
            ) : location.pathname === '/my' ? (
              <div className="buttonContainer">
                <button
                  className="modify--btn"
                  onClick={() => handleEdit(data)}
                >
                  ??????
                </button>
                <button onClick={() => handleDelete(data)}>??????</button>
              </div>
            ) : (
              <button onClick={() => handleCartDelete(data)}>??????</button>
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
  /* right: 20px; */
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  /* absoulte??? ????????? ?????? ????????? ?????? */
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
