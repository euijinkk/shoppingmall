import React from 'react';
import styled from 'styled-components';

const Product = ({ userData, user }) => {
  console.log(userData);
  return (
    <ProductWrapper>
      {userData.map((data) => (
        <div key={data[0].id} className="product">
          <div className="product--list">
            <img src={data[0].img} alt="" />
            <div className="metadata">
              <span>{data[0].title}</span>
              <span>{data[0].price}</span>
              <span>{data[0].delivery}</span>
              <span>{user}</span>
            </div>
          </div>
          <button className="basket">장바구니</button>
        </div>
      ))}
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div`
  .product {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    .basket {
        margin-right: 20px;
        border: none;
        outline: none;
        background-color: skyblue;
        color:white;
      }
  }
`;
