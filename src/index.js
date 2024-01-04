import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/configureStore';

import ToasterContext from "./context/ToasterContext";

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
                <ToasterContext />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);