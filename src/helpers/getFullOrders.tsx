import { wildcardRegExp } from "wildcard-regex";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";

const clonedeep = require("lodash.clonedeep");

const { DateTime } = require("luxon");


export type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

export const convertDatetoBPBDate = (ISODate: string) => {
    let splitDate = ISODate.split("-");
    let day = splitDate[1];
    let mo = splitDate[2];
    let year = splitDate[0];
    return day + "/" + mo + "/" + year;
};


export const getOrders = (delivDate: string, database: Database): [Order[], Database, {
    label: string;
    value: string;
}[]] => {
    const [products, customers, routes, standing, orders] = database;
    let buildOrders: Order[] = buildCartList("*", delivDate, orders);
    let buildStand: Order[] = buildStandList("*", delivDate, standing);
    let Order: Order[] = compileOrderList(buildOrders, buildStand);
    Order = Order.filter(full => full.qty>0)
    let customerList: { label: string, value: string }[] = buildCustomerList(Order, customers)
    return [Order, database, customerList];
};


export const buildCartList = (chosen: string, delivDate: string, orders: Order[]) => {
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

export const buildStandList = (chosen: string, delivDate: string, standing: Standing[]): Order[] => {
    let filteredStanding: Standing[] = clonedeep(standing);
    let builtStandList: Standing[] = [];
    builtStandList = filteredStanding.filter((stand: any) =>
        stand["custName"].match(wildcardRegExp(`${chosen}`))
    );

    builtStandList = builtStandList.filter((stand: any) => stand.isStand === true);

    let convertedStandList: Order[] = convertStandListtoStandArray(
        builtStandList,
        delivDate

    );
    return convertedStandList;
};


const convertStandListtoStandArray = (
    builtStandList: Standing[],
    delivDate: string

): Order[] => {
    let dateSplit = delivDate.split("-");
    let dayOfWeek = DateTime.local(
        Number(dateSplit[0]),
        Number(dateSplit[1]),
        Number(dateSplit[2])
    ).weekdayShort;
    let convertedStandList: Order[] = builtStandList.map((order) => ({
       
        id: null,
        qty: order[dayOfWeek],
        prodName: order["prodName"],
        custName: order["custName"],

        isWhole: true,
        delivDate: convertDatetoBPBDate(delivDate),
        timeStamp: order["timeStamp"],
        SO: order[dayOfWeek],
        rate: 0,
        route: '',
        createdAt: '',
        updatedAt: '',
        PONote: '',
        __typename: "Order",   
       
    }));
    return convertedStandList;
};


export const compileOrderList = (cartList: Order[], standList: Order[]) => {
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

    sortAtoZDataByIndex(orderList, "prodName");
    return orderList;
};


export const sortAtoZDataByIndex = (data: any[], index: string) => {
    data.sort(function (a: any, b: any) {
      return a[index] > b[index] ? 1 : -1;
    });
    return data;
  };

export const buildCustomerList = (Order: Order[], customers: Customer[]) => {
    Order = Order.filter(full => full.isWhole === true)
    let customerList: string[] = Order.map(ord => ord.custName)
    let customerListSet = new Set(customerList)
    let customerListArray = Array.from(customerListSet)
    let customerListObj = customerListArray.map(custo => ({
        label: custo,
        value: customers[customers.findIndex(cust => cust.custName===custo)].nickName
    }))
    sortAtoZDataByIndex(customerListObj,"label")
    return customerListObj
}


