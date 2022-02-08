
/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen, act } from "@testing-library/react";
import { Ordering } from "../Ordering";
import UserEvent from '@testing-library/user-event'

import { ToggleProvider } from "../../Contexts/ToggleContexts";
import { MockDatabase } from "../../Contexts/MockDatabase";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API"

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
    test("should display product name.", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        const productName = screen.getByText("Baguette")
        expect(productName).toBeInTheDocument()
    });

    test("should display product price", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        const productRate = screen.getByText("$1.98/ea.")
        expect(productRate).toBeInTheDocument()
    });

    test("should display product qty", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })
 
        const qtyInput = screen.getByRole("spinbutton")      
        UserEvent.type(qtyInput, '{backspace}4{enter}')
        expect(qtyInput).toHaveDisplayValue('4')
    });


    test("should display product total", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        const productTotal = screen.getByText("$3.96")
        expect(productTotal).toBeInTheDocument()
    });


    test("should have delivery fulfillment checked", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        const checkDeliv = screen.getByLabelText("Delivery")

        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(checkDeliv).toBeChecked()
    });

});