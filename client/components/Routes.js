import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import { Home } from './Home';

const SiteRoutes = () => {
  return (
    <div>
      <nav>
        Links: This is where nav links can go
        {/* <Link to="/">Home</Link> */}
      </nav>
      <main>
        <h1 style={{ textAlign: 'center' }}>Welcome to the Home Page!</h1>
        <Routes>{/* <Route exact path="/" component={Home} /> */}</Routes>
      </main>
    </div>
  );
};

export default SiteRoutes;
