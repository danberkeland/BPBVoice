import React, { useEffect} from "react";
import { SpeechProvider } from "@speechly/react-client";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";


import "./App.css";

import { SpeechApp } from "./SpeechApp";

Amplify.configure(awsconfig);

function App(): JSX.Element {

  
  useEffect(() => {
    Auth.currentAuthenticatedUser()
  }, []);


  return (
    <div className="App">
      <AmplifySignOut />
      <SpeechProvider appId="685bb1db-a418-4ff1-9a0c-dfcc888e23ec" language="en-US">
        <SpeechApp />
      </SpeechProvider>
    </div>
  );
}

export default App;
