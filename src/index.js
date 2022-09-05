import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import indexCss from "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

const jumboState = true;

function reducer(state = jumboState, action) {
  if(action.jumboPlayState = true){
    return action.jumboPlayState;
  }
  if(action.jumboPlayState = false){
    return action.jumboPlayState;
  }
}


let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

