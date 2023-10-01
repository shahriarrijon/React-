
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const appDiv = document.getElementById('app');
const root = createRoot(appDiv);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

