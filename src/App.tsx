import React, { useEffect} from "react";
import { SpeechProvider } from "@speechly/react-client";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

import "./App.css";

import { SpeechApp } from "./SpeechApp";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

interface AuthProps {
  signOut: any,
  user: any
}

function App(props:AuthProps): JSX.Element {

 
  return (
    <div className="App">
      <>
      <h1>Hello {props.user.username}</h1>
      <button onClick={props.signOut}>Sign out</button>
    </>
      <SpeechProvider appId="685bb1db-a418-4ff1-9a0c-dfcc888e23ec" language="en-US">
        <SpeechApp />
      </SpeechProvider>
    </div>
  );
}

export default withAuthenticator(App);
