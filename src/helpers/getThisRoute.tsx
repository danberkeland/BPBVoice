

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";
type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]



export const getThisRoute = (chosen: string, orders: Order[], customers: Customer[]): string => {
    let route: string = "deliv"
    try{
        route = orders.filter(ord => ord.custName === chosen)[0].route
    
    }catch{
       
        let zone: string = customers[customers.findIndex(cust => cust.custName === chosen)].zoneName
        if (zone === "slopick" || zone === "Prado Retail") {
            route = "slopick"
        }
        if (zone === "atownpick" || zone === "Carlton Retail") {
            route = "atownpick"
        }
    }
    
    return route
}