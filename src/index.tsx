import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {ThemeProvider} from "./hoc";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </Provider>
);