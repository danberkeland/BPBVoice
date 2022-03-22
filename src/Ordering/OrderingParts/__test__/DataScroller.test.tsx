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
                <DataScroll checked={false}/>
            </ToggleProvider>
        )

        const qtyInput = screen.getAllByRole("spinbutton") 

        
        UserEvent.type(qtyInput[0], '{backspace}4{enter}')
        expect(qtyInput[0]).toHaveDisplayValue('4')
        


        const productName = screen.getAllByText("Baguette")
        const productRate = screen.getAllByText("$2.00/ea.")
        const productTotal = screen.getAllByText("$8.00")
        

        expect(productName[0]).toBeInTheDocument()
        expect(productRate[0]).toBeInTheDocument()
        expect(productTotal[0]).toBeInTheDocument()



    });
});
