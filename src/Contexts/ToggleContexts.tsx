import React, { useState, createContext } from 'react';
import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";


const { DateTime } = require("luxon");

let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]

export interface ToggleInterface {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userInfo: string,
    setUserInfo: React.Dispatch<React.SetStateAction<string>>,
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
    setCurrentOrder: React.Dispatch<React.SetStateAction<Order[]>>

}


type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]



export const ToggleContext = createContext<ToggleInterface | undefined>(undefined);


export const ToggleProvider = (props: any) => {

    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState()
    const [customerList, setCustomerList] = useState<{ label: string; value: string; }[]>([])
    const [chosen, setChosen] = useState<string>('novo')
    const [delivDate, setDelivDate] = useState<string>(today)
    const [database, setDatabase] = useState<Database>([[], [], [], [], [], [], [], [], []])
    const [order, setOrder] = useState<Order[]>()
    const [route, setRoute] = useState<string>();
    const [currentOrder, setCurrentOrder] = useState<Order[]>()

    return (
        <ToggleContext.Provider
            value={{

                isLoading, setIsLoading,
                userInfo, setUserInfo,
                customerList, setCustomerList,
                chosen, setChosen,
                delivDate, setDelivDate,
                database, setDatabase,
                order, setOrder,
                route, setRoute,
                currentOrder, setCurrentOrder

            }}>
            {props.children}
        </ToggleContext.Provider>
    );

};