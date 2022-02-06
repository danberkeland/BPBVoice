
/**
 * @jest-environment jsdom
 */

import React from "react";
/*
import { render, screen } from "@testing-library/react";
import { Ordering } from "../Ordering";
import { ToggleProvider } from "../../Contexts/ToggleContexts";
import { SpeechProvider } from "@speechly/react-client";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API";

import { MockDatabase } from "./MockDatabase";


type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

jest.mock("../OrderingParts/PushToTalkButton.tsx", () => ({
    PushToTalk: () => {
      const MockName = () => {
          return <></>
      };
      return <MockName />;
    },
  }));


jest.mock('../../helpers/databaseFetchers', () => ({ promisedData: async (): Promise<(Database)> => await MockDatabase }));
jest.mock('aws-amplify', () => ({ Auth: jest.fn() }))
jest.mock('../Ordering', () => ({
    userInfoCheck: async (): Promise<(string)> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Dan')
            }, 300)
        })

    }
}))




describe("Testing Ordering Component", () => {
    it("should offer the correct amount of customers equal to length of customer database", () => {
        render(

            <ToggleProvider>
                <SpeechProvider appId="685bb1db-a418-4ff1-9a0c-dfcc888e23ec" language="en-US">
                    <Ordering />
                </SpeechProvider>
            </ToggleProvider>)

    });
});
*/

it("should pass with this filler test", () => {
   

});