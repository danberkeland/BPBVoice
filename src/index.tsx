import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify, Auth }  from "aws-amplify";
import awsconfig from "./aws-exports";



const AuthSetup = {
  "userPoolId": "us-east-2_BsLDGfO0R",
  "userPoolWebClientId": "4hhvnta9vje0k9bimhagcjtrob",
  "region": "us-east-2",
  "identityPoolId": "us-east-2:6862d50d-412d-432c-8d77-4867cef8fb94",
  "identityPoolRegion": "us-east-2",
  "mandatorySignIn": false,
  "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": "https://aceshl3krjg4rgtaxctab6f6je.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-qdistujpznfy5fl3u2onoimzmm",
  "aws_cloud_logic_custom": [
    {
      "name": "grabinfo",
      "endpoint": "https://tohuzsgp4b.execute-api.us-east-2.amazonaws.com/staging",
      "region": "us-east-2"
    },
    {
      "name": "testsend",
      "endpoint": "https://lpw2pqz8b0.execute-api.us-east-2.amazonaws.com/staging",
      "region": "us-east-2"
    },
    {
      "name": "grabqbcust",
      "endpoint": "https://kokhhg0fze.execute-api.us-east-2.amazonaws.com/staging",
      "region": "us-east-2"
    }
  ],
  "aws_cognito_identity_pool_id": "us-east-2:6862d50d-412d-432c-8d77-4867cef8fb94",
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_BsLDGfO0R",
  "aws_user_pools_web_client_id": "4hhvnta9vje0k9bimhagcjtrob",
  "oauth": {},
  "Auth": {
    "identityPoolId": "us-east-2:6862d50d-412d-432c-8d77-4867cef8fb94",
    "region": "us-east-2"
  }
}

const ampConfig = Amplify.configure({
  ...awsconfig,
  Auth: AuthSetup,
  API: {
    graphql_endpoint: "https://aceshl3krjg4rgtaxctab6f6je.appsync-api.us-east-2.amazonaws.com/graphql",
    graphql_headers: async () => ({
      'x-api-key': "da2-qdistujpznfy5fl3u2onoimzmm"
    })

  }
})

console.log("ampConfig", ampConfig)

const authConfig = Auth.configure();
console.log("authConfig",authConfig)

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
