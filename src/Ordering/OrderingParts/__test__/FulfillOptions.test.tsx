
/**
 * @jest-environment jsdom
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Fulfill } from "../FulfillOptions";
import { ToggleProvider } from '../../../Contexts/ToggleContexts'


describe("Testing Fulfillment Component", () => {
    it("When clicked on one, should not show on other", () => {
        render(
            <ToggleProvider>
                <Fulfill />
            </ToggleProvider>
        )

        const fulfillSloButton = screen.getByLabelText("SLO")
        const fulfillAtownButton = screen.getByLabelText("Atown")
        const fulfillDelivButton = screen.getByLabelText("Delivery")

        fireEvent.click(fulfillSloButton)
        expect(fulfillSloButton).toBeChecked()
        expect(fulfillAtownButton).not.toBeChecked()
        expect(fulfillDelivButton).not.toBeChecked()

    });
});
