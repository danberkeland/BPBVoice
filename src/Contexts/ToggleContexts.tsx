import React, { useState, createContext } from 'react';
import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";
import { openingState } from './openingState';


const { DateTime } = require("luxon");

let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]

export interface ToggleInterface {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isModified: boolean,
    setIsModified: React.Dispatch<React.SetStateAction<boolean>>,
    userInfo: { sub: string, userName: string, authType: string},
    setUserInfo: React.Dispatch<React.SetStateAction<{ sub: string, userName: string, authType: String}>>,
    customerList: { label: string; value: string; }[],
    setCustomerList: React.Dispatch<React.SetStateAction<{ label: string; value: string; }[]>>,
    chosen: string,
    setChosen: React.Dispatch<React.SetStateAction<string>>,
    delivDate: string,
    setDelivDate: React.Dispatch<React.SetStateAction<string>>,
    database: Database,
    setDatabase: React.Dispatch<React.SetStateAction<Database>>,
    order: Order[],
    setOrder: React.Dispatch<React.SetStateAction<Order[]>>,
    route: string,
    setRoute: React.Dispatch<React.SetStateAction<string>>,
    currentOrder: Order[],
    ponote: string,
    setPonote: React.Dispatch<React.SetStateAction<string>>,
    setCurrentOrder: React.Dispatch<React.SetStateAction<Order[]>>,
    orderGuard: boolean,
    setOrderGuard: React.Dispatch<React.SetStateAction<boolean>>,

}


type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]



export const ToggleContext = createContext<ToggleInterface | undefined>(undefined);


export const ToggleProvider = (props: any) => {

    const [isLoading, setIsLoading] = useState(openingState.isLoading)
    const [isModified, setIsModified] = useState(openingState.isModified)
    const [userInfo, setUserInfo] = useState<{ sub: string, userName: string, authType: string}>(openingState.userInfo)
    const [customerList, setCustomerList] = useState<{ label: string; value: string; }[]>(openingState.customerList)
    const [chosen, setChosen] = useState<string>(openingState.chosen)
    const [delivDate, setDelivDate] = useState<string>(openingState.delivDate)
    const [database, setDatabase] = useState<Database>(openingState.database)
    const [order, setOrder] = useState<Order[]>(openingState.order)
    const [route, setRoute] = useState<string>(openingState.route);
    const [ponote, setPonote] = useState<string>(openingState.ponote);
    const [orderGuard, setOrderGuard] = useState<boolean>(openingState.orderGuard)
    const [currentOrder, setCurrentOrder] = useState<Order[]>(openingState.currentOrder)

    return (
        <ToggleContext.Provider
            value={{

                isLoading, setIsLoading,
                isModified, setIsModified,
                userInfo, setUserInfo,
                customerList, setCustomerList,
                chosen, setChosen,
                delivDate, setDelivDate,
                database, setDatabase,
                order, setOrder,
                route, setRoute,
                ponote, setPonote,
                currentOrder, setCurrentOrder,
                orderGuard, setOrderGuard

            }}>
            {props.children}
        </ToggleContext.Provider>
    );

};