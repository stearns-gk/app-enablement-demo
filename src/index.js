import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as AppEnablement from "@gk-app-enablement/app-messaging-provider";


const ApiEnablement = AppEnablement.EnablementProvider.getEnablementApi();
window.commonApi = ApiEnablement.getApiByName(AppEnablement.CommonApi.apiName);
window.posApi = ApiEnablement.getApiByName(AppEnablement.PosApi.apiName);
// let ctx = {}
// console.log("Loading POS context");
// window.commonApi.getSessionContext((context => { ctx = context; console.log("Context: ", JSON.stringify(ctx)); }));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);