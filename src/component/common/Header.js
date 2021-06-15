import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <h1 className="logo">
                SOPT Shop
            </h1>
            <input type="text" />
            <ul className="menu">
                <li>장바구니</li>
                <li>My</li>
                <li>Login</li>
            </ul>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    padding:10px 0;
    background-color: skyblue;
    color:white;
    /* font-size:14px; */

    .logo{
        font-size:20px;
        font-weight:bold;
        margin: 0 20px;
    }
    
    input{
        flex:1;
        max-width:700px;
        border:none;
        outline:none;
    }

    .menu{
        display:flex;
        justify-content: space-between;
        font-size:16px;
        li{
            margin:0 6px;
            cursor:pointer;
        }
    }
`