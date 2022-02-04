
import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";
import { getRate, sortAtoZDataByIndex } from "./getDeliveriesByDate";
type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]



export const addOrder = (
    database: Database,
    currentOrder:
        {
            curr: Order[],
            chosen: string,
            delivDate: string,
            route: string,
            ponote: string
        },
    simpleItem: string,
    qty: number): Order[] => {
    let ordersToUpdate = [...currentOrder.curr]
    for (let ord of ordersToUpdate) {
        if (ord.prodName === simpleItem) {
            ord.qty = qty
            return ordersToUpdate
        }
    }
    if (qty === 0) {
        return ordersToUpdate
    }

    let delivDate = currentOrder.delivDate.split('/')[0] + currentOrder.delivDate.split('/')[1] + currentOrder.delivDate.split('/')[2]
    let customers = database[1]
    let products = database[0]
    let custNick = customers[customers.findIndex(cust => cust.custName === currentOrder.chosen)].nickName
    let prodNick = products[products.findIndex(prod => prod.prodName === simpleItem)].nickName
    let id = delivDate + custNick + qty + prodNick

    let newItem: Order = {
        "__typename": "Order",
        "id": id,
        "qty": qty,
        "prodName": simpleItem,
        "custName": currentOrder.chosen,
        "PONote": currentOrder.ponote,
        "route": currentOrder.route,
        "SO": qty,
        "isWhole": true,
        "delivDate": currentOrder.delivDate,
        "timeStamp": "",
        "rate": -1,
        "createdAt": "",
        "updatedAt": ""
    }

    console.log("newItem", newItem)

    let altpricing = database[7]
    let rate = getRate(products, newItem, altpricing)
    console.log("gottenRate", rate)

    let ratedOrder = { ...newItem, "rate": rate }
    ordersToUpdate.push(ratedOrder)
    sortAtoZDataByIndex(ordersToUpdate, "prodName")

    return ordersToUpdate


}