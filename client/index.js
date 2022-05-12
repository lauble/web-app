import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './components/Routes';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<Routes />)