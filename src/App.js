import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, MyPage, RegisterPage } from './pages';

const App = ({authService}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={()=> <MainPage  authService={authService} />} />
        <Route exact path="/login" component={()=> <LoginPage  authService={authService} />} />
        <Route exact path="/register" component={()=> <RegisterPage />} />
        <Route exact path="/my" component={()=> <MyPage />} />
      </Switch>
    </Router>
  );
};

export default App;