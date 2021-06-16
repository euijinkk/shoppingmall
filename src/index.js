import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import AuthService from './service/auth_service';

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App authService={authService} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
