
/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { fireEvent, render, screen } from "@testing-library/react";
 import { ToggleProvider } from "../../../Contexts/ToggleContexts";
 import { Cal } from "../Calendar";
import { convertDatetoBPBDate } from "../../../helpers/getDeliveriesByDate";


 const { DateTime } = require("luxon");
 let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]

 let newToday = convertDatetoBPBDate(today)
 let newFifteen = newToday.split('/')[0]+'/15/'+newToday.split('/')[2]
 
 
 describe("Testing Calendar Component", () => {
     it("When date is picked, it shows properly in display (mm/dd/yyyy)", async () => {
         render(
             <ToggleProvider>
                 <Cal />
             </ToggleProvider>
         )

        // eslint-disable-next-line testing-library/await-async-query
        let findDate = await screen.findByDisplayValue(newToday)

         let cal = screen.getByRole("textbox")
         fireEvent.focus(cal)
         let fifteenth = screen.getByText("15")
         fireEvent.click(fifteenth)
         
         expect(findDate).toHaveDisplayValue(newFifteen)
     });
 });
 