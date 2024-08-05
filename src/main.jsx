import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./store/store.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
            <ToastContainer />
        </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
