import { wildcardRegExp } from "wildcard-regex";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";

const clonedeep = require("lodash.clonedeep");

const { DateTime } = require("luxon");


export type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

export const convertDatetoBPBDate = (ISODate: string): string => {
    let splitDate = ISODate.split("-");
    let day = splitDate[1];
    let mo = splitDate[2];
    let year = splitDate[0];
    return day + "/" + mo + "/" + year;
};


export const getDeliveriesByDate = (delivDate: string, database: Database): [Order[], Database, {
    label: string;
    value: string;
}[]] => {

    const [products, customers, routes, standing, orders, d, dd, altpricing] = database;
    let buildOrders: Order[] = buildCartList("*", delivDate, orders, customers);
    let buildStand: Order[] = buildStandList("*", delivDate, standing, customers);
    let Order: Order[] = compileOrderList(buildOrders, buildStand, customers);
    Order = Order.filter(full => full.qty > 0)

    Order.forEach(ord => {
        try {
            if (ord.rate === -1) {
                let rate = getRate(products, ord, altpricing)
                ord.rate = rate
            }
        } catch { }
    }

    )
    let customerList: { label: string, value: string }[] = buildCustomerList(customers)
    return [Order, database, customerList];
};


export const buildCartList = (chosen: string, delivDate: string, orders: Order[], customers: Customer[]): Order[] => {
    let BPBDate = convertDatetoBPBDate(delivDate);
    let filteredOrders: Order[] = clonedeep(orders);
    let builtCartList: Order[] = [];
    if (filteredOrders) {
        builtCartList = filteredOrders.filter(
            (order) =>
                order.delivDate === BPBDate &&
                order.custName.match(wildcardRegExp(`${chosen}`))
        );
    }
    return builtCartList;
};

export const buildStandList = (chosen: string, delivDate: string, standing: Standing[], customers: Customer[]): Order[] => {
    let filteredStanding: Standing[] = clonedeep(standing);
    let builtStandList: Standing[] = [];
    builtStandList = filteredStanding.filter((stand: any) =>
        stand["custName"].match(wildcardRegExp(`${chosen}`))
    );

    builtStandList = builtStandList.filter((stand: any) => stand.isStand === true);

    let convertedStandList: Order[] = convertStandListtoStandArray(
        builtStandList,
        delivDate,
        customers
    );
    return convertedStandList;
};


const convertStandListtoStandArray = (
    builtStandList: Standing[],
    delivDate: string,
    customers: Customer[]
): Order[] => {
    let rt: string

    let dateSplit = delivDate.split("-");
    let dayOfWeek = DateTime.local(
        Number(dateSplit[0]),
        Number(dateSplit[1]),
        Number(dateSplit[2])
    ).weekdayShort;
    let convertedStandList: Order[] = builtStandList.map((order) => {
        rt = "deliv"
        let zone: string = customers[customers.findIndex(cust => cust.custName === order["custName"])].zoneName
        if (zone === "slopick" || zone === "Prado Retail") {
            rt = "slopick"
        }
        if (zone === "atownpick" || zone === "Carlton Retail") {
            rt = "atownpick"
        }
        return {
            id: null,
            qty: order[dayOfWeek],
            prodName: order["prodName"],
            custName: order["custName"],
            isWhole: true,
            delivDate: convertDatetoBPBDate(delivDate),
            timeStamp: order["timeStamp"],
            SO: order[dayOfWeek],
            rate: -1,
            route: rt,
            createdAt: '',
            updatedAt: '',
            PONote: '',
            __typename: "Order",
        }
    }
    );
    return convertedStandList
};


export const compileOrderList = (cartList: Order[], standList: Order[], customers: Customer[]): Order[] => {
    let orderList = cartList.concat(standList);

    // Remove old cart order from orders if it exists
    for (let i = 0; i < orderList.length; ++i) {
        for (let j = i + 1; j < orderList.length; ++j) {
            if (
                orderList[i]["prodName"] === orderList[j]["prodName"] &&
                orderList[i]["custName"] === orderList[j]["custName"]
            ) {
                orderList.splice(j, 1);
            }
        }
    }

    for (let ord of orderList) {
        try {
            let zone: string = customers && customers[customers.findIndex(cust => cust.custName === ord["custName"])].zoneName

            if (ord.route === "deliv" && (zone === "slopick" || zone === "Prado Retail")) {
                ord.route = "slopick"
            }
            if (ord.route === "deliv" && (zone === "atownpick" || zone === "Carlton Retail")) {
                ord.route = "atownpick"
            }
        } catch { }
    }

    sortAtoZDataByIndex(orderList, "prodName");
    return orderList;
};


export const sortAtoZDataByIndex = (data: any[], index: string): any[] => {
    data.sort(function (a: any, b: any) {
        return a[index] > b[index] ? 1 : -1;
    });
    return data;
};

export const buildCustomerList = (customers: Customer[]): {
    label: string;
    value: string;
}[] => {

    let customerList: string[] = customers.map(cust => cust.custName)
    let customerListSet = new Set(customerList)
    let customerListArray = Array.from(customerListSet)
    let customerListObj = customerListArray.map(custo => ({
        label: custo,
        value: custo,
    }))
    sortAtoZDataByIndex(customerListObj, "label")
    return customerListObj
}

export const getRate = (products: Product[], order: Order, altPricing: AltPricing[]): number => {
    let checkInd: number = altPricing.findIndex(
        (alt) => alt.custName === order.custName && alt.prodName === order.prodName
    );
    if (checkInd > -1) {
        return altPricing[checkInd].wholePrice;
    }
    let ind: number = products.findIndex((prod) => prod.prodName === order.prodName);
    let price: number;
    if (order.rate >= 0) {
        price = order.rate;
    } else {
        price = products[ind].wholePrice;
    }

    if (!price) {
        price = 0
    }

    return price;
};


