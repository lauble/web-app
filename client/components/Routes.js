import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Home } from './Home';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Links: This is where nav links can go
          {/* <Link to="/">Home</Link> */}
        </nav>
        <main>
          <h1 style={{ textAlign: 'center' }}>Welcome to the Home Page!</h1>
          {/* <Route exact path="/" component={Home} /> */}
        </main>
      </div>
    </Router>
  );
};

export default Routes;
