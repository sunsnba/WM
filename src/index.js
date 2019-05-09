import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./components/App";
import configureStore from "./store/configureStore";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from "./components/routes.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
  }
`;

const cacheStore = window.localStorage.getItem("store") || {};
const store = configureStore(cacheStore);
const customHistory = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={customHistory}>
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
