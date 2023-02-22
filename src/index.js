import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./core/reducer/index"
import './styles/index.css';
import './styles/normalize.css';

import { router } from './core/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </ReduxProvider>
  </React.StrictMode>
);
