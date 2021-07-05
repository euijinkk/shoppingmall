import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import AuthService from './service/firebase/auth_service';
import { StylesProvider } from '@material-ui/styles';

// type Class = { new (...args: any[]): any };

const authService: any = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App authService={authService} />
        </ThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
