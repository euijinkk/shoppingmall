import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { MainPage, LoginPage, DetailPage, RegisterPage } from './pages';
import { loginMailState, userProductDataState } from './states';

const App = ({ authService }) => {
  const userProductData = useRecoilValue(userProductDataState);
  const loginMail = useRecoilValue(loginMailState);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <MainPage authService={authService} />}
        />
        <Route
          exact
          path="/login"
          component={() => <LoginPage authService={authService} />}
        />
        <Route exact path="/register" component={() => <RegisterPage />} />
        <Route
          exact
          path="/my"
          component={() => (
            <DetailPage data={userProductData} user={loginMail} authService={authService} />
          )}
        />
        <Route exact path="/basket" component={() => <DetailPage />} />
      </Switch>
    </Router>
  );
};

export default App;
