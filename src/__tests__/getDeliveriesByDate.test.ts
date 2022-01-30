import { getDeliveriesByDate } from "../helpers/getDeliveriesByDate";
import {
  Customer,
  Route,
  Standing,
  Dough,
  DoughComponent,
  AltPricing,
  InfoQBAuth,
  Order,
  Product,
} from "../API";
import { Database } from "../helpers/getDeliveriesByDate";

// Mock Customer Setup

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

const standing: Standing[] = [
  {
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
  },
];

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
  rate: 0,
  route: "deliv",
  PONote: "",
  __typename: "Order",
};

const Novo_w_zoneName_slopick: Customer[] = [
  {
    ...Novo,
    zoneName: "slopick",
  },
];

const customer: Customer[] = [Novo];

// Mock Order set up

const Novo_Zero_Croix_Order: Order = {
  ...NovoOrder,
  prodName: "Plain Croissant (baked)",
  qty: 0,
  SO: 0,
};

const Novo_Zero_Bag_Order: Order = {
  ...Novo_Zero_Croix_Order,
  prodName: "Baguette",
};

const NovoOrder_atownpick: Order = {
  ...NovoOrder,
  route: "atownpick"
}

const Novo_order_5_bag: Order[] = [NovoOrder];

const Novo_order_5_bag_0_croix: Order[] = [NovoOrder, Novo_Zero_Croix_Order];

const Novo_order_0_bag: Order[] = [Novo_Zero_Bag_Order];

const Novo_atownpick_order_5_bag: Order[]=[NovoOrder_atownpick]

// Mock database setup

type DB = [
  Product[],
  Customer[],
  Route[],
  Standing[],
  Order[],
  Dough[],
  DoughComponent[],
  AltPricing[],
  InfoQBAuth[]
];


const DB_Order_5_bag_0_croix_NO_STANDING: DB = [
  [],
  customer,
  [],
  [],
  Novo_order_5_bag_0_croix,
  [],
  [],
  [],
  [],
];
const DB_Order_5_bag_W_STANDING: DB = [
  [],
  customer,
  [],
  standing,
  Novo_order_5_bag,
  [],
  [],
  [],
  [],
];
const DB_ONLY_STANDING: DB = [[], customer, [], standing, [], [], [], [], []];
const DB_Order_0_bag_W_STANDING: DB = [
  [],
  customer,
  [],
  standing,
  Novo_order_0_bag,
  [],
  [],
  [],
  [],
];
const DB_Novo_slopick_NO_ORDER_W_STANDING: DB = [
  [],
  Novo_w_zoneName_slopick,
  [],
  standing,
  [],
  [],
  [],
  [],
  [],
];
const DB_Novo_slopick_ORDER_5_BAG_W_STANDING: DB = [
  [],
  Novo_w_zoneName_slopick,
  [],
  standing,
  Novo_order_5_bag,
  [],
  [],
  [],
  [],
];

const DB_Novo_slopick_ORDER_atownpick_5_BAG_W_STANDING: DB = [
  [],
  Novo_w_zoneName_slopick,
  [],
  standing,
  Novo_atownpick_order_5_bag,
  [],
  [],
  [],
  [],
];

type testResultFormat = [
  Order[],
  Database,
  {
    label: string;
    value: string;
  }[]
];

const mockCustResult: {
  label: string;
  value: string;
}[] = [{ label: "Novo", value: "novo" }];

describe("Test getDeliveriesByDate", () => {
  test("Orders with quantites of zero should not be included in full orders", () => {
    const expected1: testResultFormat = [
      [NovoOrder],
      DB_Order_5_bag_0_croix_NO_STANDING,
      mockCustResult,
    ];

    const actualValue1: testResultFormat = getDeliveriesByDate(
      "2022-01-24",
      DB_Order_5_bag_0_croix_NO_STANDING
    );
    expect(actualValue1[0]).toEqual(expected1[0]);
    expect(actualValue1[2]).toEqual(expected1[2])
  });

  test("Cart orders take precedence over standing orders", () => {
    const expected2: testResultFormat = [
      [NovoOrder],
      DB_Order_5_bag_W_STANDING,
      mockCustResult,
    ];

    const actualValue1: testResultFormat = getDeliveriesByDate(
      "2022-01-24",
      DB_Order_5_bag_W_STANDING
    );
    expect(actualValue1[0]).toEqual(expected2[0]);
  });

  test("Standing orders go to full order if no cart order exists", () => {
    const expected3: testResultFormat = [
      [standingNovoOrder],
      DB_ONLY_STANDING,
      mockCustResult,
    ];

    const actualValue1: testResultFormat = getDeliveriesByDate(
      "2022-01-24",
      DB_ONLY_STANDING
    );
    expect(actualValue1[0]).toEqual(expected3[0]);
  });

  test("Cart order of zero cancels standing order and results in no order in full Order", () => {
    const expected4: testResultFormat = [
      [],
      DB_Order_0_bag_W_STANDING,
      mockCustResult,
    ];

    const actualValue1: testResultFormat = getDeliveriesByDate(
      "2022-01-24",
      DB_Order_0_bag_W_STANDING
    );
    expect(actualValue1[0]).toEqual(expected4[0]);
  });
});

test("Standing orders with slopick customer route end up with slopick route", () => {
  const expected4: testResultFormat = [
    [
      {
        ...standingNovoOrder,
        route: "slopick",
      },
    ],
    DB_Novo_slopick_NO_ORDER_W_STANDING,
    mockCustResult,
  ];

  const actualValue1: testResultFormat = getDeliveriesByDate(
    "2022-01-24",
    DB_Novo_slopick_NO_ORDER_W_STANDING
  );
  expect(actualValue1[0]).toEqual(expected4[0]);
});

test("If Order is for delivery but zoneName is slopick, route is slopick, not deliv", () => {
  const expected5: testResultFormat = [
    [
      {
        ...NovoOrder,
        route: "slopick",
      },
    ],
    DB_Novo_slopick_ORDER_5_BAG_W_STANDING,
    mockCustResult,
  ];

  const actualValue1: testResultFormat = getDeliveriesByDate(
    "2022-01-24",
    DB_Novo_slopick_ORDER_5_BAG_W_STANDING
  );
  expect(actualValue1[0]).toEqual(expected5[0]);
});

test("If Order is for atownpick but zoneName is slopick, route is atownpick", () => {
  const expected6: testResultFormat = [
    [
      {
        ...NovoOrder,
        route: "atownpick",
      },
    ],
    DB_Novo_slopick_ORDER_atownpick_5_BAG_W_STANDING,
    mockCustResult,
  ];

  const actualValue1: testResultFormat = getDeliveriesByDate(
    "2022-01-24",
    DB_Novo_slopick_ORDER_atownpick_5_BAG_W_STANDING
  );
  expect(actualValue1[0]).toEqual(expected6[0]);
});

export {};
