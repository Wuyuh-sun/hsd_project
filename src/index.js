import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import indexCss from "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

function reducer(state , action) {
  
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

