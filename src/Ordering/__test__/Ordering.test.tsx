
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Ordering } from '../Ordering'
import { ToggleProvider } from "../../Contexts/ToggleContexts";
import { SpeechProvider } from "@speechly/react-client";


const Speech= require('../Ordering');
Speech.userInfoCheck = jest.fn(() => { return {username:'Dan'} })


jest.mock('../OrderingParts/PushToTalkButton.tsx', () => ({ PushToTalk: () => '' }));


interface AuthProps {
    signOut: any,
    user: any
  }


const MockSpeechApp = (props:AuthProps): JSX.Element => {
    return (
        <ToggleProvider>
            <SpeechProvider appId="685bb1db-a418-4ff1-9a0c-dfcc888e23ec" language="en-US">
                <Ordering />
            </SpeechProvider>
        </ToggleProvider>
    )
   
}


test("Testing integrated speech app", () => {
    render(<MockSpeechApp user={{username: ''}} signOut={() => {}}/>);
    const text = "testing"

    expect(text).toBe("testing");
});