import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './components/Routes';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<Routes />)