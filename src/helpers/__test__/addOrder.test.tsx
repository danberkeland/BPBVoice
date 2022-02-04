import { addOrder } from "../../helpers/addOrder"
import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API";

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

const product: Product[] = [{
  __typename: "Product",
  id: "3d84f944-196c-402c-9ed5-a2e16496ce04",
  prodName: "Baguette",
  nickName: "bag",
  packGroup: "rustic breads",
  packSize: 1,
  doughType: "Baguette",
  freezerThaw: false,
  eodCount: null,
  packGroupOrder: 0,
  readyTime: 5,
  bakedWhere: ["Carlton"],
  wholePrice: 2.31,
  retailPrice: 4.5,
  isWhole: true,
  depends: "NONE",
  weight: 1.14,
  descrip: "23in. rustic baguette",
  picURL: "",
  squareID: "BPB Baguette",
  currentStock: null,
  whoCountedLast: null,
  forBake: "Baguette",
  bakeExtra: null,
  batchSize: null,
  preshaped: 133,
  prepreshaped: 133,
  updatePreDate: "2022-02-01",
  updateFreezerDate: null,
  backporchbakerypre: null,
  backporchbakery: null,
  bpbextrapre: null,
  bpbextra: null,
  bpbssetoutpre: null,
  bpbssetout: null,
  defaultInclude: true,
  leadTime: 2.31,
  qbID: "240",
  freezerCount: null,
  freezerClosing: null,
  sheetMake: null,
  freezerNorth: null,
  freezerNorthClosing: 12,
  freezerNorthFlag: "2021-12-06",
  createdAt: "2021-03-12T14:37:10.761Z",
  updatedAt: "2022-01-31T09:36:03.869Z",
}]

const customer: Customer[] = [{
  __typename: "Customer",
  id: "2b7f374c-fe23-4892-918e-dd2cb1499092",
  nickName: "novo",
  custName: "Novo",
  zoneName: "Downtown SLO",
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
}
  
]
const altpricing: AltPricing[] = []
const database: Database = [product,customer,[],[],[],[],[],altpricing,[]]
const order1lglv: Order = {
  "__typename": "Order",
  "id": "9260f245-23e8-49e7-b800-b521fb9b8c28",
  "qty": 1,
  "prodName": "Large Levain",
  "custName": "Novo",
  "PONote": "",
  "route": "deliv",
  "SO": 1,
  "isWhole": true,
  "delivDate": "02/03/2022",
  "timeStamp": "2022-02-02T02:05:59.920Z",
  "rate": 5.37,
  "createdAt": "2022-02-02T02:06:00.631Z",
  "updatedAt": "2022-02-02T02:06:00.631Z"
}

const order4oli: Order = {
  "__typename": "Order",
  "id": "c2f6ea16-3ed8-4b16-b136-6ae1b91b9329",
  "qty": 4,
  "prodName": "Olive Herb",
  "custName": "Novo",
  "PONote": "",
  "route": "deliv",
  "SO": 4,
  "isWhole": true,
  "delivDate": "02/03/2022",
  "timeStamp": "2022-02-02T02:06:00.181Z",
  "rate": 5.84,
  "createdAt": "2022-02-02T02:06:00.781Z",
  "updatedAt": "2022-02-02T02:06:00.781Z"
}

const order3bag: Order = {
  "__typename": "Order",
  "id": "02032022novo3bag",
  "qty": 3,
  "prodName": "Baguette",
  "custName": "Novo",
  "PONote": "",
  "route": "deliv",
  "SO": 3,
  "isWhole": true,
  "delivDate": "02/03/2022",
  "timeStamp": "",
  "rate": 2.31,
  "createdAt": "",
  "updatedAt": ""
}

const curr: { curr: Order[]; chosen: string; delivDate: string; route: string; ponote: string; } = 
  { 
    curr: [ order1lglv, order4oli ],
    chosen: "Novo",
    delivDate: "02/03/2022",
    route: "deliv",
    ponote: ""
  }



describe("Testing addOrder", () => {
  test("Takes a trash can click and returns an order with qty 0 for item", () => {
    
    const ord = "Olive Herb"
    const expectedValue = [order1lglv,{...order4oli, "qty": 0}]
    const actualValue = addOrder(database, curr, ord, 0)
    expect(actualValue).toEqual(expectedValue)
  });

  test("Takes an order and adds it to the current order", () => {
    const ord = "Baguette"
    const expectedValue = [order3bag,order1lglv,order4oli]
    const actualValue = addOrder(database,curr, ord, 3)
    expect(actualValue).toEqual(expectedValue)
  });

  test("Takes a changed qty and applies it to an item in the current order", () => {
    const ord = "Olive Herb"
    const expectedValue = [order1lglv,{...order4oli, "qty": 2}]
    const actualValue = addOrder(database,curr, ord, 2)
    expect(actualValue).toEqual(expectedValue)
  });

  test("if product is added with qty of 0, it is ignored", () => {
    const ord = "Baguette"
    const expectedValue = [order1lglv,order4oli]
    const actualValue = addOrder(database,curr, ord, 0)
    expect(actualValue).toEqual(expectedValue)
  });

  test("if there is no current order, first order is created", () => {
    const curr = { 
      curr: [],
      chosen: "Novo",
      delivDate: "02/03/2022",
      route: "deliv",
      ponote: ""
    }
    const ord = "Baguette"
    const expectedValue = [order3bag]
    const actualValue = addOrder(database, curr, ord, 3)
    expect(actualValue).toEqual(expectedValue)
  });

  test("Order is returned in alphabetical order by prodName", () => {
    const ord = "Baguette"
    const expectedValue = [order3bag, order1lglv, order4oli]
    const actualValue = addOrder(database,curr, ord, 3)
    expect(actualValue).toEqual(expectedValue)
  });






})

export { }