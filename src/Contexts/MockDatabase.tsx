
import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]


const { DateTime } = require("luxon");

let month = DateTime.now().setZone("America/Los_Angeles").get('month');
let year = DateTime.now().setZone("America/Los_Angeles").get('year');
let day = DateTime.now().setZone("America/Los_Angeles").get('day');
let testDay = 15

if (day === 15){
    testDay = 16
}

let testMonth = month.toString()
if (testMonth.length === 1){
    testMonth = "0"+testMonth
}

let orderDate = testMonth + "/" + testDay + "/" + year

const Novo: Customer = {
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
};

const NovoOrder: Order = {
    __typename: "Order",
    id: "123",
    qty: 5,
    prodName: "Baguette",
    custName: "Novo",
    PONote: "",
    route: "deliv",
    SO: 5,
    isWhole: true,
    delivDate: "01/24/2022",
    timeStamp: "123",
    rate: 2,
    createdAt: "123",
    updatedAt: "123",
};

const NovoOrder2: Order = {
    ...NovoOrder,
    delivDate: orderDate
}

const standingNovoBag: Standing = {
    __typename: "Standing",
    id: "54c48f44-62cd-4fb5-bd75-21dad46e1f23",
    timeStamp: "2021-05-26T14:03:32.388Z",
    prodName: "Baguette",
    custName: "Novo",
    isStand: true,
    Sun: 2,
    Mon: 2,
    Tue: 2,
    Wed: 2,
    Thu: 2,
    Fri: 2,
    Sat: 2,
    createdAt: "2021-03-16T01:17:43.381Z",
    updatedAt: "2021-05-26T14:03:32.336Z",
};

const standingNovoOrder: Order = {
    SO: 2,
    custName: "Novo",
    delivDate: "01/24/2022",
    isWhole: true,
    prodName: "Baguette",
    qty: 2,
    id: null,
    timeStamp: "2021-05-26T14:03:32.388Z",
    createdAt: "",
    updatedAt: "",
    rate: 2,
    route: "deliv",
    PONote: "",
    __typename: "Order",
};


const baguette: Product = {
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
    wholePrice: 2,
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
    leadTime: 2,
    qbID: "240",
    freezerCount: null,
    freezerClosing: null,
    sheetMake: null,
    freezerNorth: null,
    freezerNorthClosing: 12,
    freezerNorthFlag: "2021-12-06",
    createdAt: "2021-03-12T14:37:10.761Z",
    updatedAt: "2022-01-31T09:36:03.869Z",
};

const altNovoPricing: AltPricing = {
    __typename: "AltPricing",
    id: "9",
    custName: "Novo",
    prodName: "Baguette",
    wholePrice: 1.98,
    createdAt: "2021-03-16T12:25:29.874Z",
    updatedAt: "2021-03-16T12:25:29.874Z",
};

const product: Product[] = [
    baguette
]

const customer: Customer[] = [
    Novo
]

const standing: Standing[] = [
    standingNovoBag
]

const order: Order[] = [
    NovoOrder,
    NovoOrder2
]

const altPricing: AltPricing[] = [
    altNovoPricing
]



export const MockDatabasePromise: Promise<(Database)> = new Promise(( resolve,reject) => {
    setTimeout(() => {
        resolve([product, customer, [], standing, order, [], [], altPricing, []])
    }, 300)
    
});

export const MockDatabase: Database = [product, customer, [], standing, order, [], [], altPricing, []]
