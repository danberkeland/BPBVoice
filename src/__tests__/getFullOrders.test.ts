import { getOrders } from "../../src/helpers/getFullOrders";
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
import { Database } from "../../src/helpers/getFullOrders";


const customer: Customer[] = [
  {
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
  },
];


const customer2: Customer[] = [
  {
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
  },
];


const order1: Order[] = [
    {
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
      updatedAt: "123"
      
    },
    {
        __typename: "Order",
        id: "123",
        qty: 0,
        prodName: "Plain Croissant (baked)",
        custName: "Novo",
        PONote: "",
        route: "deliv",
        SO: 0,
        isWhole: true,
        delivDate: "01/24/2022",
        timeStamp: "123",
        rate: 2,
        createdAt: "123",
        updatedAt: "123"
       
      },
  ];

const order: Order[] = [
  {
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
    updatedAt: "123"
   
  },
];

const order3: Order[] = [
  {
    __typename: "Order",
    id: "123",
    qty: 0,
    prodName: "Baguette",
    custName: "Novo",
    PONote: "",
    route: "deliv",
    SO: 0,
    isWhole: true,
    delivDate: "01/24/2022",
    timeStamp: "123",
    rate: 2,
    createdAt: "123",
    updatedAt: "123"
    
  },
];


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

const database1: [
  Product[],
  Customer[],
  Route[],
  Standing[],
  Order[],
  Dough[],
  DoughComponent[],
  AltPricing[],
  InfoQBAuth[]
] = [[], customer, [], [], order1, [], [], [], []];

const database2: [
    Product[],
    Customer[],
    Route[],
    Standing[],
    Order[],
    Dough[],
    DoughComponent[],
    AltPricing[],
    InfoQBAuth[]
  ] = [[], customer, [], standing , order, [], [], [], []];

  const database3: [
    Product[],
    Customer[],
    Route[],
    Standing[],
    Order[],
    Dough[],
    DoughComponent[],
    AltPricing[],
    InfoQBAuth[]
  ] = [[], customer, [], standing , [], [], [], [], []];

  const database4: [
    Product[],
    Customer[],
    Route[],
    Standing[],
    Order[],
    Dough[],
    DoughComponent[],
    AltPricing[],
    InfoQBAuth[]
  ] = [[], customer, [], standing , order3, [], [], [], []];

  const database5: [
    Product[],
    Customer[],
    Route[],
    Standing[],
    Order[],
    Dough[],
    DoughComponent[],
    AltPricing[],
    InfoQBAuth[]
  ] = [[], customer2, [], standing , [], [], [], [], []];

  const database6: [
    Product[],
    Customer[],
    Route[],
    Standing[],
    Order[],
    Dough[],
    DoughComponent[],
    AltPricing[],
    InfoQBAuth[]
  ] = [[], customer2, [], standing , order, [], [], [], []];

describe("Test getOrders", () => {
  test("Orders with quantites of zero should not be included in full orders", () => {
    const expected1: [
      Order[],
      Database,
      {
        label: string;
        value: string;
      }[]
    ] = [
      [
        {
          PONote: "",
          SO: 5,
          __typename: "Order",
          custName: "Novo",
          delivDate: "01/24/2022",
          id: "123",
          isWhole: true,
          prodName: "Baguette",
          qty: 5,
          rate: 2,
          route: "deliv",
          timeStamp: "123",
          createdAt: "123",
          updatedAt: "123"
      
        },
      ],
      [[], customer, [], [], order, [], [], [], []],
      [{ label: "", value: "" }],
    ];

    const actualValue1: [
      Order[],
      Database,
      {
        label: string;
        value: string;
      }[]
    ] = getOrders("2022-01-24", database1);

    expect(actualValue1[0]).toEqual(expected1[0]);
  });

  test("Cart orders take precedence over standing orders", () => {
    const expected2: [
        Order[],
        Database,
        {
          label: string;
          value: string;
        }[]
      ] = [
        [
          {
            PONote: "",
            SO: 5,
            __typename: "Order",
            custName: "Novo",
            delivDate: "01/24/2022",
            id: "123",
            isWhole: true,
            prodName: "Baguette",
            qty: 5,
            rate: 2,
            route: "deliv",
            timeStamp: "123",
            createdAt: "123",
            updatedAt: "123"
          },
        ],
        [[], customer, [], standing, order, [], [], [], []],
        [{ label: "", value: "" }],
      ];
  
      const actualValue1: [
        Order[],
        Database,
        {
          label: string;
          value: string;
        }[]
      ] = getOrders("2022-01-24", database2);

    expect(actualValue1[0]).toEqual(expected2[0]);
  });



test("Standing orders go to full order if no cart order exists", () => {
    const expected3: [
        Order[],
        Database,
        {
          label: string;
          value: string;
        }[]
      ] = [
        [
          {  
            SO: 2,
            custName: "Novo",
            delivDate: "01/24/2022",
            isWhole: true,
            prodName: "Baguette",
            qty: 2,
            id: null,
            timeStamp: "2021-05-26T14:03:32.388Z",
            createdAt: '',
            updatedAt: '',
            rate: 0, 
            route: 'deliv', 
            PONote: '',
            __typename: "Order"     
          },
        ],
        [[], customer, [], standing, [], [], [], [], []],
        [{ label: "", value: "" }],
      ];
  
      const actualValue1: [
        Order[],
        Database,
        {
          label: string;
          value: string;
        }[]
      ] = getOrders("2022-01-24", database3);

    expect(actualValue1[0]).toEqual(expected3[0]);
  });


  test("Cart order of zero cancels standing order and results in no order in full Order", () => {
    const expected4: [
        Order[],
        Database,
        {
          label: string;
          value: string;
        }[]
      ] = [
        [
        ],
        [[], customer, [], standing, order3, [], [], [], []],
        [{ label: "", value: "" }],
      ];
  
      const actualValue1: [
        Order[],
        Database,
        {
          label: string;
          value: string;
        }[]
      ] = getOrders("2022-01-24", database4);

    expect(actualValue1[0]).toEqual(expected4[0]);
  });

});

test("Standing orders with slopick route end up with slopick route", () => {
  const expected4: [
      Order[],
      Database,
      {
        label: string;
        value: string;
      }[]
    ] = [
      [
        {  
          SO: 2,
          custName: "Novo",
          delivDate: "01/24/2022",
          isWhole: true,
          prodName: "Baguette",
          qty: 2,
          id: null,
          timeStamp: "2021-05-26T14:03:32.388Z",
          createdAt: '',
          updatedAt: '',
          rate: 0, 
          route: 'slopick', 
          PONote: '',
          __typename: "Order"     
        },
      ],
      [[], customer2, [], standing, [], [], [], [], []],
      [{ label: "", value: "" }],
    ];

    const actualValue1: [
      Order[],
      Database,
      {
        label: string;
        value: string;
      }[]
    ] = getOrders("2022-01-24", database5);

  expect(actualValue1[0]).toEqual(expected4[0]);
});

test("If Order is for delivery but zoneName is slopick, route is slopick, not deliv", () => {
  const expected5: [
      Order[],
      Database,
      {
        label: string;
        value: string;
      }[]
    ] = [
      [
        {  
          SO: 5,
          custName: "Novo",
          delivDate: "01/24/2022",
          isWhole: true,
          prodName: "Baguette",
          qty: 5,
          id: '123',
          timeStamp: "123",
          createdAt: '123',
          updatedAt: '123',
          rate: 2, 
          route: 'slopick', 
          PONote: '',
          __typename: "Order"     
        },
      ],
      [[], customer2, [], standing, order, [], [], [], []],
      [{ label: "", value: "" }],
    ];

    const actualValue1: [
      Order[],
      Database,
      {
        label: string;
        value: string;
      }[]
    ] = getOrders("2022-01-24", database6);

  expect(actualValue1[0]).toEqual(expected5[0]);
});





export {};
