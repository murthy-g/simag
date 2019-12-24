import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/common/home';
import About from './components/common/about';

const router = () => {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </div>
    </Router>
  );
};

export default router;
