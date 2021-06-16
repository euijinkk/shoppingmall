import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isLoginState } from '../states';

const LoginPage = ({ authService }) => {
  const setIsLogin = useSetRecoilState(isLoginState);
  const history = useHistory();
  const goToMain = (userMail) => {
    history.push({
      pathname: '/',
      state: { mail: userMail },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMain(data.additionalUserInfo.profile.email))
    //   .then(data => console.log(data))
        // goToMain(data.additionalUserInfo.profile.mail));
    //   .then((data) => goToMain(data.user.uid));
    setIsLogin(true);
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  });
  return (
    <LoginWrapper>
      <div className="logo">SOPT Shop</div>
      <div className="OAuth">
        <button className="googleAuth" onClick={onLogin}>
          Google
        </button>
        <button className="gihubAuth" onClick={onLogin}>
          Github
        </button>
      </div>
    </LoginWrapper>
  );
};

export default LoginPage;

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .logo {
    font-size: 32px;
    color: skyblue;
  }
  .OAuth {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    button {
      border: none;
      outline: none;
      margin-bottom: 10px;
      background-color: skyblue;
      color: white;
      width: 200px;
      border-radius: 10px;
      font-size: 16px;
      padding: 10px 0;
      cursor: pointer;
    }
  }
`;
