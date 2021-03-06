import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify, Auth }  from "aws-amplify";

const APIkey = "da2-tk6gu2o64raa7d74ci6ko2y55a"

const awsconfig = {
  "aws_project_region": "us-east-2",
    "aws_appsync_graphqlEndpoint": "https://5ns5oir235elva37khjqgtaz3y.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-tk6gu2o64raa7d74ci6ko2y55a",
    "aws_cloud_logic_custom": [
        {
            "name": "grabinfo",
            "endpoint": "https://v4bxn12lib.execute-api.us-east-2.amazonaws.com/newone",
            "region": "us-east-2"
        },
        {
            "name": "testsend",
            "endpoint": "https://yxpmdxd6qi.execute-api.us-east-2.amazonaws.com/newone",
            "region": "us-east-2"
        },
        {
            "name": "grabqbcust",
            "endpoint": "https://0u4wtscwrk.execute-api.us-east-2.amazonaws.com/newone",
            "region": "us-east-2"
        }
    ],
    "aws_cognito_identity_pool_id": "us-east-2:9c0ff7bc-13b0-4ddc-a05d-4d8012de296a",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_20PYdOWTN",
    "aws_user_pools_web_client_id": "4kfmct8l6qdqq4ico01597jg7b",
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};



const AuthSetup = {
  "aws_project_region": "us-east-2",
    "aws_appsync_graphqlEndpoint": "https://5ns5oir235elva37khjqgtaz3y.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-tk6gu2o64raa7d74ci6ko2y55a",
    "aws_cloud_logic_custom": [
        {
            "name": "grabinfo",
            "endpoint": "https://v4bxn12lib.execute-api.us-east-2.amazonaws.com/newone",
            "region": "us-east-2"
        },
        {
            "name": "testsend",
            "endpoint": "https://yxpmdxd6qi.execute-api.us-east-2.amazonaws.com/newone",
            "region": "us-east-2"
        },
        {
            "name": "grabqbcust",
            "endpoint": "https://0u4wtscwrk.execute-api.us-east-2.amazonaws.com/newone",
            "region": "us-east-2"
        }
    ],
    "aws_cognito_identity_pool_id": "us-east-2:9c0ff7bc-13b0-4ddc-a05d-4d8012de296a",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_20PYdOWTN",
    "aws_user_pools_web_client_id": "4kfmct8l6qdqq4ico01597jg7b",
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
}

Amplify.configure({
  ...awsconfig,
  Auth: AuthSetup,
  API: {
    graphql_endpoint: "https://5ns5oir235elva37khjqgtaz3y.appsync-api.us-east-2.amazonaws.com/graphql",
    graphql_headers: async () => ({
      'x-api-key': APIkey
    })

  }
})

Auth.configure();

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
