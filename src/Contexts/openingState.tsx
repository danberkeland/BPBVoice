import { Interface } from "readline";
import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

const { DateTime } = require("luxon");

let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]


export interface Opening {
    isLoading: boolean, 
    isModified: boolean,  
    userInfo: string, 
    customerList: { label: string; value: string; }[],
    chosen: string,  
    delivDate: string, 
    database: Database,  
    order: Order[],
    route: string,
    currentOrder: Order[],
    ponote: string,
}

export const openingState: Opening = {
    isLoading: false,
    isModified: false,
    userInfo: "Dan",
    customerList: [],
    chosen: "Novo",
    delivDate: today,
    database: [[], [], [], [], [], [], [], [], []],
    order: [],
    route: "",
    ponote: "",
    currentOrder: []
}