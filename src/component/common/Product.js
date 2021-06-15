import React from 'react';
import styled from 'styled-components';

const Product = ({userData, user}) => {
    console.log(userData);
    return (
        <ProductWrapper>
            {userData.map((data) => (
                <div key={data[0].id} className="product--list">
                    <img src={data[0].img} alt="" />
                    <div className="metadata">
                        <span>{data[0].title}</span>
                        <span>{data[0].price}</span>
                        <span>{data[0].delivery}</span>
                        <span>{user}</span>
                    </div>
                </div>
            )) }
        </ProductWrapper>
    );
};

export default Product;

const ProductWrapper = styled.div`

    .product--list{
        display:flex;
        align-items:center;

        .metadata {
            display:flex;
            flex-direction:column;
            line-height:40px;
        }
    }
    img {
        width:180px;
        height:180px;
    }
`
