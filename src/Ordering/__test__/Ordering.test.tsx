
/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen, act } from "@testing-library/react";
import { Ordering } from "../Ordering";

import { ToggleProvider } from "../../Contexts/ToggleContexts";
import { MockDatabase } from "../../Contexts/MockDatabase";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API"
import { userInfoCheck } from "../../helpers/userInfoCheck";

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]


jest.mock('../../helpers/databaseFetchers', () => ({ 
    promisedData: async (): Promise<(Database)> => {
        return new Promise((resolve, reject) => {      
                resolve(MockDatabase)     
        })
    } 
}));

jest.mock("../OrderingParts/PushToTalkButton.tsx", () => ({
    PushToTalk: () => {
      const MockName = () => {
          return <></>
      };
      return <MockName />;
    },
  }));

jest.mock('../../helpers/userInfoCheck', () => ({
    userInfoCheck: async (): Promise<(string)> => {
        return new Promise((resolve, reject) => {      
                resolve('Dan')     
        })
    }
}))


describe("Testing Ordering Component", () => {
    it("should offer the correct amount of customers equal to length of customer database", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })
        

        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()


    });
});
