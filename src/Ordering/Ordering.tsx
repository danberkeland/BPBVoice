import React, { Fragment, useContext, useEffect, useRef } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";

import { promisedData } from "../helpers/databaseFetchers";
import { getDeliveriesByDate } from "../helpers/getDeliveriesByDate"

import { Auth } from "aws-amplify";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";
import { ToggleContext, ToggleInterface } from "../Contexts/ToggleContexts";
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


const BigBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: 10px auto 1000px auto;
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

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

export const Ordering: React.FC<{}> = (): JSX.Element => {

const { 
  isLoading, setIsLoading, 
  isModified, setIsModified,
  userInfo, setUserInfo, 
  customerList, setCustomerList, 
  chosen, setChosen, 
  delivDate, setDelivDate,
  database, setDatabase,
  order, setOrder,
  route, setRoute,
  currentOrder, setCurrentOrder

} = useContext<ToggleInterface>(ToggleContext)


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
    
    let thisOrder: Order[] = ords[0].filter(or => (or.custName === chosen && or.qty > 0))
    return thisOrder
  }

  const getThisRoute = (ords: [Order[], Database, {
    label: string;
    value: string;
  }[]]): string => {
 
    let route = ords[0].filter(ord => ord.custName === chosen)[0].route
    return route
  }

  const AddProdMod = () => {
    return (
      <React.Fragment>
        <AddProduct op={op} />
        <OrderButtonsFloat>
          {isModified && <Submit />}
          <Button
            type="button"
            icon="pi pi-plus"
            onClick={(e) => op.current.toggle(e)}
            className="p-button-rounded" />
        </OrderButtonsFloat>
      </React.Fragment>
    )
  }

  const Submit = () => {
    return (
      <React.Fragment>
        <div><Button label="SUBMIT ORDER" className="p-button-raised p-button-rounded p-button-danger" /></div>
      </React.Fragment>
    )
  }


  const CustList = () => {
    return (
      <Dropdown 
          value={chosen} 
          options={customerList} 
          onChange={e => setChosen(e.value)} 
          placeholder="Select a Customer" />
    )
  }

  const PONote = () => {
    return (
      <React.Fragment></React.Fragment>
    )
  }


  const ControlPanel = () => {
    return (
      <React.Fragment></React.Fragment>
    )
  }


  return (
    <React.Fragment>
      <PushToTalk />

      {isLoading && <Loader />}
      
      <AddProdMod />
      <BasicContainer>
        <CustList />
        <Cal />
      </BasicContainer>
      <Fulfill />
      <PONote />
      <DataScroll />
      <ControlPanel />
      
    </React.Fragment>
  );
};
