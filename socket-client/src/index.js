import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./Redux/store/storeConfig";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

const Application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Application, document.getElementById("root"));
registerServiceWorker();
