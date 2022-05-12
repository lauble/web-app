import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Home } from './Home';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/">Home</Link>
        </nav>
        <main>
          <h1 style={{ textAlign: 'center' }}>Welcome!</h1>
          {/* <Route exact path="/" component={Home} /> */}
        </main>
      </div>
    </Router>
  );
};

export default Routes;