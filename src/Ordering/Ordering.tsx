import React, { useContext, useState, useEffect, useRef } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";

import { promisedData } from "../helpers/databaseFetchers";
import { getDeliveriesByDate } from "../helpers/getDeliveriesByDate"

import { Auth } from "aws-amplify";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";
import { ToggleContext } from "../Contexts/ToggleContexts";
import Loader from "../Loader";
import { PushToTalk } from "./OrderingParts/PushToTalkButton";
import { Fulfill } from "./OrderingParts/FulfillOptions";
import { DataScroll } from "./OrderingParts/DataScroller";
import { Cal } from "./OrderingParts/Calendar";
import { AddProduct } from "./OrderingParts/AddProduct";

import styled from "styled-components";

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
`;

const OrderButtonsFloat = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  top: 100px;
  justify-content: space-around;
  width: 100%;
  margin: 5px 0;
`;

const { DateTime } = require("luxon");

let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]



export const Ordering: React.FC<{}> = (): JSX.Element => {

  const [userInfo, setUserInfo] = useState()
  const [customerList, setCustomerList] = useState<{ label: string; value: string; }[]>([])
  const [chosen, setChosen] = useState<string>('novo')
  const [delivDate, setDelivDate] = useState<string>(today)
  const [database, setDatabase] = useState<Database>([[], [], [], [], [], [], [], [], []])
  const [order, setOrder] = useState<Order[]>()
  const [route, setRoute] = useState<string>();
  const [currentOrder, setCurrentOrder] = useState<Order[]>()
  const [addProduct, setAddProduct] = useState<boolean>(false)

  
  interface ToggleInterface {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const { isLoading, setIsLoading } = useContext<ToggleInterface>(ToggleContext)


  const op = useRef(null);

  const userInfoCheck = async () => {
    const user = await Auth.currentAuthenticatedUser()
    console.log("user",user)
    return user
  }

  useEffect(() => {
    userInfoCheck().then(user => setUserInfo(user))
  }, [])

  useEffect(() => {
    setIsLoading(true)
    userInfo &&
      promisedData()
        .then((db) =>
          getDeliveriesByDate(delivDate, db)).then((ords) => {
            setOrder(ords[0])
            setDatabase(ords[1])
            setCustomerList(ords[2])
            setIsLoading(false)
            setRoute(getThisRoute(ords))
            setCurrentOrder(getThisOrder(ords))
          });

  }, [userInfo, delivDate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let ords: [Order[], Database, {
      label: string;
      value: string;
  }[]] = [order, database, customerList]
  try{
    setRoute(getThisRoute(ords))
    setCurrentOrder(getThisOrder(ords))
  } catch {}
    
  },[chosen])


  const getThisOrder = (ords: [Order[], Database, {
    label: string;
    value: string;
  }[]]): Order[] => {
    let custo: string = ords[1][1][ords[1][1].findIndex(custo => custo.nickName === chosen)].custName
    let thisOrder: Order[] = ords[0].filter(or => (or.custName === custo && or.qty > 0))
    return thisOrder
  }

  const getThisRoute = (ords: [Order[], Database, {
    label: string;
    value: string;
  }[]]): string => {
    let custo: string = ords[1][1][ords[1][1].findIndex(custo => custo.nickName === chosen)].custName
    let route = ords[0].filter(ord => ord.custName === custo)[0].route
    return route
  }

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <AddProduct chosen={chosen} setChosen={setChosen} customerList={customerList} op={op} />
      <OrderButtonsFloat>
        <Button 
          type="button" 
          icon="pi pi-plus" 
          onClick={(e) => op.current.toggle(e)} 
          className="p-button-rounded" />
      </OrderButtonsFloat>
      <PushToTalk setChosen={setChosen} setDelivDate={setDelivDate} />
      <BasicContainer>
        <Dropdown 
          value={chosen} 
          options={customerList} 
          onChange={e => setChosen(e.value)} 
          placeholder="Select a Customer" />
        <Cal delivDate={delivDate} setDelivDate={setDelivDate} />
      </BasicContainer>
      <Fulfill route={route} setRoute={setRoute} />
      <DataScroll thisOrder={currentOrder} />
    </React.Fragment>
  );
};
