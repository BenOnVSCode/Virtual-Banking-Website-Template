import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages';
import SigninPage from './Pages/signin';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/Web-site" component={Home} exact />
        <Route path="/signin" component={SigninPage} />
      </Switch> 
    </Router>
  );
}

export default App;
