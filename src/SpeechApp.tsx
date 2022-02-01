import React, { useContext, useState, useEffect, useRef } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";

import { promisedData } from "./helpers/databaseFetchers";
import { getDeliveriesByDate } from "./helpers/getDeliveriesByDate"

import { Auth } from "aws-amplify";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "./API";
import { ToggleContext } from "./Contexts/ToggleContexts";
import Loader from "./Loader";
import { PushToTalk } from "./SpeechAppParts/PushToTalkButton";
import { Fulfill } from "./SpeechAppParts/FulfillOptions";
import { DataScroll } from "./SpeechAppParts/DataScroller";
import { Cal } from "./SpeechAppParts/Calendar";
import { AddProduct } from "./SpeechAppParts/AddProduct";

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
  top: 40px;
  justify-content: space-around;
  width: 100%;
  margin: 5px 0;
`;

const { DateTime } = require("luxon");

let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]
console.log(today)

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

export const SpeechApp: React.FC = (): JSX.Element => {

  const [userInfo, setUserInfo] = useState()
  const [customerList, setCustomerList] = useState<{ label: string; value: string; }[]>([])
  const [chosen, setChosen] = useState<string>('novo')
  const [delivDate, setDelivDate] = useState<string>(today)
  const [database, setDatabase] = useState<Database>([[], [], [], [], [], [], [], [], []])
  const [order, setOrder] = useState<Order[]>()
  const [route, setRoute] = useState<string>();
  const [currentOrder, setCurrentOrder] = useState<Order[]>()
  const [addProduct, setAddProduct] = useState<boolean>(false)

  const op = useRef(null);

  const userInfoCheck = async () => {
    const user = await Auth.currentAuthenticatedUser()
    setUserInfo(user)
  }

  useEffect(() => {
    console.log(addProduct)
  }, [addProduct])

  useEffect(() => {
    userInfoCheck()
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
            let custo: string = ords[1][1][ords[1][1].findIndex(custo => custo.nickName === chosen)].custName
            let thisOrder: Order[] = ords[0].filter(or => (or.custName === custo && or.qty > 0))
            setRoute(ords[0].filter(ord => ord.custName === custo)[0].route)
            setCurrentOrder(thisOrder)
          });

  }, [userInfo, delivDate]); // eslint-disable-line react-hooks/exhaustive-deps

  interface ToggleInterface {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

  const { isLoading, setIsLoading } = useContext<ToggleInterface>(ToggleContext)

  const applyNewChosen = (cust: string, customers: Customer[]): void => {
    let custo: string = customers[customers.findIndex(custo => custo.nickName === cust)].custName
    let thisOrder: Order[] = order?.filter(or => (or.custName === custo && or.qty > 0))
    setCurrentOrder(thisOrder)
    setChosen(cust)
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
          onChange={e => applyNewChosen(e.value, database[1])} 
          placeholder="Select a Customer" />
        <Cal delivDate={delivDate} setDelivDate={setDelivDate} />
      </BasicContainer>
      <Fulfill route={route} setRoute={setRoute} />
      <DataScroll thisOrder={currentOrder} />
    </React.Fragment>
  );
};
