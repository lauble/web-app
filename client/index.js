import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SiteRoutes from './components/Routes';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <SiteRoutes />
    </BrowserRouter>
)