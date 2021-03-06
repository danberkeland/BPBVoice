import React, { useEffect, useState } from "react";
import { SpeechProvider } from "@speechly/react-client";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

import "./App.css";

import { ToggleProvider } from "./Contexts/ToggleContexts"

import AppRoutes from "./AppRoutes";
import Nav from "./Nav";
import NavCustomers from "./NavCustomers";

import { userInfoCheck } from "./helpers/userInfoCheck";

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

const BigBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px 10px;
  margin: 10px auto 200px auto;
  box-sizing: border-box;
`;

interface UserInfo { sub: string, userName: string, authType: string}

export function App(props: AuthProps): JSX.Element {

  const [ navUser, setNavUser ] = useState<UserInfo>({sub:'',userName: '', authType: ''})
  
  useEffect(() => {
    userInfoCheck().then(user => setNavUser(user)).catch(err => console.log("Uh oh",err))
  }, [])
  

  return (
    <ToggleProvider>

    {navUser.authType === "bpbadmin" ? <Nav /> : <NavCustomers />}

      <div className="App">
        <Title>Back Porch Bakery</Title>

        <SpeechProvider appId="685bb1db-a418-4ff1-9a0c-dfcc888e23ec" language="en-US">
          <AppRoutes />
        </SpeechProvider>
        <BigBottom>
          <UserStyle>Hello {props.user.username}</UserStyle>
          <Button label="Sign Out" className="p-button-warning p-button-raised p-button-rounded" onClick={props.signOut}></Button>
        </BigBottom>
        
      </div>
    </ToggleProvider>

  );
}

export default withAuthenticator(App);
