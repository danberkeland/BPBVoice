import React, {useContext} from "react";
import { SpeechProvider } from "@speechly/react-client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

import "./App.css";

import Loader from "./Loader";
import { ToggleProvider } from "./Contexts/ToggleContexts"

import { SpeechApp } from "./SpeechApp";

import { Button } from 'primereact/button';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import styled from "styled-components";

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: auto;
  margin-bottom: 60px;
  color: rgb(66, 97, 201);
`;

const UserStyle = styled.h3`
  padding: 0;
  color: grey;
  margin: 5px 10px;
`;

interface AuthProps {
  signOut: any,
  user: any
}

function App(props:AuthProps): JSX.Element {

  
  return (
    <ToggleProvider>
      <div className="App">
     
      <>
      <Title>Back Porch Bakery</Title>
      
    </>
      <SpeechProvider appId="685bb1db-a418-4ff1-9a0c-dfcc888e23ec" language="en-US">
        <SpeechApp />
      </SpeechProvider>
      <UserStyle>Hello {props.user.username}</UserStyle>
      <Button label="Sign Out" className="p-button-warning p-button-raised p-button-rounded" onClick={props.signOut}></Button>
    </div>
    </ToggleProvider>
    
  );
}

export default withAuthenticator(App);
