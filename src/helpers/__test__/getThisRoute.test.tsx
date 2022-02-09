import { getThisRoute } from "../../helpers/getThisRoute"

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API";
type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]


const ord: Order[] = [{
  "__typename": "Order",
  "id": "c2f6ea16-3ed8-4b16-b136-6ae1b91b9329",
  "qty": 4,
  "prodName": "Olive Herb",
  "custName": "Novo",
  "PONote": "",
  "route": "atownpick",
  "SO": 4,
  "isWhole": true,
  "delivDate": "02/03/2022",
  "timeStamp": "2022-02-02T02:06:00.181Z",
  "rate": 5.84,
  "createdAt": "2022-02-02T02:06:00.781Z",
  "updatedAt": "2022-02-02T02:06:00.781Z"
}]


const customer: Customer[] = [{
    __typename: "Customer",
    id: "2b7f374c-fe23-4892-918e-dd2cb1499092",
    nickName: "novo",
    custName: "Novo",
    zoneName: "slopick",
    addr1: "Novo",
    addr2: "726 Higuera St",
    city: "SLO",
    zip: "93401",
    email: "accounting@bluemangomanagement.com",
    firstName: "Brian",
    lastName: "Parks",
    phone: "",
    toBePrinted: true,
    toBeEmailed: true,
    printDuplicate: false,
    terms: null,
    invoicing: "daily",
    prodsNotAllowed: null,
    latestFirstDeliv: 10,
    latestFinalDeliv: 10,
    webpageURL: null,
    picURL: null,
    gMap: null,
    specialInstructions: null,
    delivOrder: 47,
    customProd: [],
    templateProd: [
      "Brioche Burger Buns (8)",
      "Brioche Loaf",
      "Herbed Focaccia (half sheet)",
      "Large Levain",
      "Olive Herb",
      "Plain Croissant (Baked)",
    ],
    userSubs: ["498c5d90-3961-4bdf-b141-503172fc408d"],
    qbID: "68",
    currentBalance: "1786.38",
    createdAt: "2021-03-04T22:11:08.536Z",
    updatedAt: "2022-01-21T01:42:19.420Z",
  }]



describe("Testing getThisRoute", () => {
  test("Takes an order and sets route to route in order", () => {
    

    const expectedValue = "atownpick"
    const actualValue = getThisRoute("Novo", ord, customer)
    expect(actualValue).toEqual(expectedValue)
  });

  test("Takes a blank order and sets route to customers default", () => {
    

    const expectedValue = "slopick"
    const actualValue = getThisRoute("Novo", [], customer)
    expect(actualValue).toEqual(expectedValue)
  });

})

export { }