import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify, Auth }  from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure({
  ...awsconfig,
  Auth: {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-2:6862d50d-412d-432c-8d77-4867cef8fb94',
    
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',

}
})

const currentConfig = Auth.configure();
console.log("currentConfig",currentConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
