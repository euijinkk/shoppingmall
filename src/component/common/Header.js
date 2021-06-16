import React from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginMailState } from '../../states';

const Header = ({authService}) => {
    const history = useHistory();
    const [loginMail, setLoginMail] = useRecoilState(loginMailState)
    const onLogout = () => {
        authService.logout();
        setLoginMail("");
        history.push('/');
      };
    return (
        
        <HeaderWrapper>
            <h1 className="logo" onClick={()=> history.push('/')}>
                SOPT Shop
            </h1>
            <input type="text" />
            <ul className="menu">
                {loginMail && <li>{loginMail}님 반갑습니다.</li>}
                <li onClick={()=> {history.push('/cart')}} >Cart</li>
                <li onClick={()=> {loginMail ? history.push('/my') : history.push('/login')}} >My</li>
                { loginMail ? <li onClick={onLogout}>Logout</li> : <li onClick={()=> {history.push('/login')}}>Login</li>}
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
        cursor:pointer;
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