import { wildcardRegExp } from "wildcard-regex";

const clonedeep = require("lodash.clonedeep");

const { DateTime } = require("luxon");


export const convertDatetoBPBDate = (ISODate: any) => {
    let splitDate = ISODate.split("-");
    let day = splitDate[1];
    let mo = splitDate[2];
    let year = splitDate[0];
    return day + "/" + mo + "/" + year;
};


export const getFullOrders = (delivDate: any, database: any) => {
    const [products, customers, routes, standing, orders] = database;
    let buildOrders = buildCartList("*", delivDate, orders);
    let buildStand = buildStandList("*", delivDate, standing);
    let fullOrder = compileFullOrderList(buildOrders, buildStand);
    let customerList = buildCustomerList(fullOrder, customers)
    console.log(customerList)

    return [fullOrder, database, customerList];
};


export const buildCartList = (chosen: any, delivDate: any, orders: any) => {
    let BPBDate = convertDatetoBPBDate(delivDate);
    let filteredOrders = clonedeep(orders);
    let builtCartList = [];
    if (filteredOrders) {
        builtCartList = filteredOrders.filter(
            (order: any) =>
                order["delivDate"] === BPBDate &&
                order["custName"].match(wildcardRegExp(`${chosen}`))
        );
    }

    return builtCartList;
};

export const buildStandList = (chosen: any, delivDate: any, standing: any) => {
    let filteredStanding = clonedeep(standing);
    let builtStandList = [];
    builtStandList = filteredStanding.filter((stand: any) =>
        stand["custName"].match(wildcardRegExp(`${chosen}`))
    );

    builtStandList = builtStandList.filter((stand: any) => stand.isStand === true);

    let convertedStandList = convertStandListtoStandArray(
        builtStandList,
        delivDate

    );
    return convertedStandList;
};


const convertStandListtoStandArray = (
    builtStandList: any,
    delivDate: any

) => {
    let dateSplit = delivDate.split("-");
    let dayOfWeek = DateTime.local(
        Number(dateSplit[0]),
        Number(dateSplit[1]),
        Number(dateSplit[2])
    ).weekdayShort;
    let convertedStandList = builtStandList.map((order: any) => ({
        id: null,
        version: order["_version"],
        qty: order[dayOfWeek],
        prodName: order["prodName"],
        custName: order["custName"],

        isWhole: true,
        delivDate: convertDatetoBPBDate(delivDate),
        timeStamp: order["timeStamp"],
        SO: order[dayOfWeek],
    }));
    return convertedStandList;
};


export const compileFullOrderList = (cartList: any, standList: any) => {
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


export const sortAtoZDataByIndex = (data: any, index: any) => {
    data.sort(function (a: any, b: any) {
      return a[index] > b[index] ? 1 : -1;
    });
    return data;
  };

export const buildCustomerList = (fullOrder, customers) => {
    fullOrder = fullOrder.filter(full => full.isWhole === true)
    let customerList = fullOrder.map(ord => ord.custName)
    customerList = new Set(customerList)
    customerList = Array.from(customerList)
    console.log(customers)
    let customerListObj = customerList.map(custo => ({
        label: custo,
        value: customers[customers.findIndex(cust => cust.custName===custo)].nickName
    }))
    sortAtoZDataByIndex(customerListObj,"label")
    return customerListObj
}


