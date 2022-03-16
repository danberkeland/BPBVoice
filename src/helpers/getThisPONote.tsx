

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";
type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]



export const getThisPONote = (chosen: string, orders: Order[]): string => {
    let poNote: string = ''
    try{
        if (orders.filter(ord => ord.custName === chosen)[0].PONote){
            poNote = orders.filter(ord => ord.custName === chosen)[0].PONote
        }

    
    }catch{}
    
    return poNote
}