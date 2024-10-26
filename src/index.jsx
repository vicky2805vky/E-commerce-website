import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./services/providers/store";

import App from "./App";

import "stylesheets/index.css";
import "stylesheets/variables.css";
import "stylesheets/utilities.css";
import "stylesheets/buttons.css";
import AddProductContextProvider from "features/admin/services/contexts/AddProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AddProductContextProvider>
        <App />
      </AddProductContextProvider>
    </Provider>
  </BrowserRouter>
);
