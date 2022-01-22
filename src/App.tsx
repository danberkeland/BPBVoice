import React from "react";
import { SpeechProvider } from "@speechly/react-client";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import "./App.css";

import { SpeechApp } from "./SpeechApp";

Amplify.configure(awsconfig);

function App(): JSX.Element {
  return (
    <div className="App">
      <SpeechProvider appId="685bb1db-a418-4ff1-9a0c-dfcc888e23ec" language="en-US">
        <SpeechApp />
      </SpeechProvider>
    </div>
  );
}

export default App;
