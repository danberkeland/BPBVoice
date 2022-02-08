/**
 * @jest-environment jsdom
 */

import React, { useState, createContext } from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from '@testing-library/user-event'
import { mockedOpeningState } from "../../../Contexts/mockedOpeningState"

import { ToggleProvider } from "../../../Contexts/ToggleContexts";
import { DataScroll } from "../DataScroller";


jest.mock('../../../Contexts/openingState', () => ({ openingState: mockedOpeningState }))



describe("Testing DataScroll Component", () => {
    it("Shows all the right stuff in all the right places", () => {

        render(
            <ToggleProvider>
                <DataScroll />
            </ToggleProvider>
        )

        const qtyInput = screen.getByRole("spinbutton") 

        
        UserEvent.type(qtyInput, '{backspace}4{enter}')
        expect(qtyInput).toHaveDisplayValue('4')
        


        const productName = screen.getByText("Baguette")
        const productRate = screen.getByText("$2.00/ea.")
        const productTotal = screen.getByText("$8.00")
        

        expect(productName).toBeInTheDocument()
        expect(productRate).toBeInTheDocument()
        expect(productTotal).toBeInTheDocument()



    });
});
