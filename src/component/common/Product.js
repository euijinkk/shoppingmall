import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { loginMailState } from '../../states';
import AddIcon from '@material-ui/icons/Add';


const Product = ({ userData, user, register }) => {
  const history = useHistory();
  const location = useLocation();
  const loginMail = useRecoilValue(loginMailState);
  console.log(userData);
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
            {!(location.pathname === '/my') ? (
              <button className="basket">장바구니</button>
            ) : (
              <div className="buttonContainer">
                <button className="modify--btn">수정</button>
                <button>삭제</button>
              </div>
            )}
          </div>
        ))}
        {loginMail && <MyButton onClick={() => history.push('/register')} />}
    </ProductWrapper>
  );
};

export default Product;

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
  cursor:pointer;
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
    .buttonContainer{
      display:flex;
      flex-direction:column;

      .modify--btn{
        margin-bottom:7px;
      }
    }
    button {
      margin-right: 20px;
      border: none;
      outline: none;
      background-color: skyblue;
      color: white;
      cursor:pointer;
    }
  }
`;
