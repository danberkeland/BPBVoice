
/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen, act } from "@testing-library/react";
import { Ordering } from "../Ordering";
import UserEvent from '@testing-library/user-event'
import { handleCartUpdate } from "../../helpers/handleCartUpdate";

import { ToggleProvider } from "../../Contexts/ToggleContexts";
import { MockDatabase } from "../../Contexts/MockDatabase";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API"
import userEvent from "@testing-library/user-event";

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

jest.mock('../../helpers/handleCartUpdate', () => ({
    handleCartUpdate: async () => {
        console.log("mocking function");
        return

}}))


describe("Testing Ordering Component", () => {
    test("should display standing order product name.", async () => {

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

    test("should display standing order product price", async () => {

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

    test("should display standing order product qty", async () => {

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


    test("should display standing order product total", async () => {

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


    test("should have defualt fulfillment (Delivery) checked", async () => {

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

    test("when qty changes, SUBMIT button appears", async () => {

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

        const submitButton = screen.getByRole("button", { name: /SUBMIT ORDER/i})
        
        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(submitButton).toBeVisible()
    });

    test("when SUBMIT button clicked, it disappears", async () => {

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

        const submitButton = screen.getByRole("button", { name: /SUBMIT ORDER/i})
        await act(async () => {
            userEvent.click(submitButton)
        })

        //userEvent.click(submitButton)

        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(submitButton).not.toBeVisible()
    });

    test("When fulfillment changes, SUBMIT button appears", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        const checkDeliv = screen.getByLabelText("Atown")
        userEvent.click(checkDeliv)

        const submitButton = screen.queryByRole("button", { name: /SUBMIT ORDER/i})

        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(submitButton).toBeInTheDocument()
    });

    test("When fulfillment DOES NOT change, SUBMIT button DOES NOT appears", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        const checkDeliv = screen.getByLabelText("Delivery")
        userEvent.click(checkDeliv)

        const submitButton = screen.queryByRole("button", { name: /SUBMIT ORDER/i})

        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(submitButton).not.toBeInTheDocument()
    });

    test("Popup for Product selection", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        const addProduct = screen.getByLabelText("addProd")
        userEvent.click(addProduct)
        const chooseProduct = screen.getAllByText(/select a product/i)
        
        userEvent.click(chooseProduct[0])
        const prodDrop = screen.getAllByText(/baguette/i)
        userEvent.click(prodDrop[1])
        
    });

    test("when PONote is typed, it appears in textbox", async () => {

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <ToggleProvider>
                    <Ordering />
                </ToggleProvider>
            );
        })

        
        const poNote = screen.getByPlaceholderText("PO#/Special Instructions...")  
        UserEvent.type(poNote, '12345')    
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()
        expect(poNote).toHaveValue('12345')

    });

});