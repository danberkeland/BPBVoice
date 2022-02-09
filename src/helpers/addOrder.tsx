
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

    
    let customers = database[1]
    let products = database[0]
   
    let newItem: Order = {
        "__typename": "Order",
        "id": null,
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

   

    let altpricing = database[7]
    let rate = getRate(products, newItem, altpricing)
    

    let ratedOrder = { ...newItem, "rate": rate }
    ordersToUpdate.push(ratedOrder)
    sortAtoZDataByIndex(ordersToUpdate, "prodName")

    return ordersToUpdate


}