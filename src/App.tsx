import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, DetailPage, RegisterPage } from './pages';

const App: React.FC<any> = ({ authService }) => {
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
        <Route exact path="/regist" component={() => <RegisterPage />} />
        <Route
          exact
          path="/my"
          component={() => <DetailPage authService={authService} />}
        />
        <Route exact path="/cart" component={() => <DetailPage />} />
      </Switch>
    </Router>
  );
};

export default App;
