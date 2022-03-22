import React, { useState, useContext, useEffect, useRef } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';


import { promisedData } from "../helpers/databaseFetchers";
import { getDeliveriesByDate } from "../helpers/getDeliveriesByDate"
import { getThisRoute } from "../helpers/getThisRoute";

import { userInfoCheck } from "../helpers/userInfoCheck";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";
import { ToggleContext, ToggleInterface } from "../Contexts/ToggleContexts";
import Loader from "../Loader";
import { PushToTalk } from "./OrderingParts/PushToTalkButton";
import { Fulfill } from "./OrderingParts/FulfillOptions";
import { DataScroll } from "./OrderingParts/DataScroller";
import { Cal } from "./OrderingParts/Calendar";
import { AddProduct } from "./OrderingParts/AddProduct";



import styled from "styled-components";
import { handleCartUpdate } from "../helpers/handleCartUpdate";
import { getThisPONote } from "../helpers/getThisPONote";

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


const PONote: React.FC<{
  ponote: string,
  setPonote: React.Dispatch<React.SetStateAction<string>>
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ ponote, setPonote, setIsModified }): JSX.Element => {
  return (
    <React.Fragment>
     
      <InputText value={ponote} onChange={(e) => handlePonote(e.target.value, setPonote, setIsModified)} placeholder="PO#/Special Instructions..." />
      
    </React.Fragment>
  )
}

const handlePonote = (
  val: string, 
  setPonote:React.Dispatch<React.SetStateAction<string>>, 
  setIsModified:React.Dispatch<React.SetStateAction<boolean>>) => {
  setPonote(val)
  setIsModified(true)
}


const AddProdMod: React.FC<{
    op:any,  
    isModified:boolean, 
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>
    curr: any,
    database: Database,
    setIsModified:React.Dispatch<React.SetStateAction<boolean>>
  }> = ({ op, isModified, setIsLoading, curr, database, setIsModified }):JSX.Element => {
  return (
    <React.Fragment>
      <AddProduct op={op} />
      <OrderButtonsFloat>
        {isModified && 
          <Submit 
            handleSubmit={handleSubmit} 
            setIsLoading={setIsLoading} 
            curr={curr} 
            database={database} 
            setIsModified={setIsModified}
          />
        }
        <label htmlFor="addProd" hidden>addProd</label>
        <Button
          type="button"
          id = "addProd"
          icon="pi pi-plus"
          onClick={(e) => op.current.toggle(e)}
          className="p-button-rounded" />
      </OrderButtonsFloat>
    </React.Fragment>
  )
}


const Submit: React.FC<{
    handleSubmit: any,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    curr: any,
    database: Database,
    setIsModified: React.Dispatch<React.SetStateAction<boolean>>  
  }> = ({ handleSubmit, setIsLoading, curr, database, setIsModified }):JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <Button 
          label="SUBMIT ORDER" 
          className="p-button-raised p-button-rounded p-button-danger" 
          onClick = {e => handleSubmit(setIsLoading, curr, database, setIsModified)}
          /></div>
    </React.Fragment>
  )
}



const CustList: React.FC<{
    chosen: string,
    setChosen: React.Dispatch<React.SetStateAction<string>>
    customerList: any,
    setIsModified: React.Dispatch<React.SetStateAction<boolean>>
  }>  = ({ chosen, setChosen, customerList, setIsModified }):JSX.Element => {
  return (
    <Dropdown 
        value={chosen} 
        name="custDropDown"
        options={customerList} 
        onChange={e => {
          setIsModified(false);
          setChosen(e.value)} 
        }
        placeholder="Select a Customer" />
  )
}


const getThisOrder = (chosen: string, ords: [Order[], Database, {
  label: string;
  value: string;
}[]]): Order[] => {
  
  let thisOrder: Order[] = ords[0].filter(or => (or.custName === chosen && or.qty > 0))
  return thisOrder
}

const handleSubmit = async ( 
  setIsLoading:React.Dispatch<React.SetStateAction<boolean>>, 
  curr:any,
  database:Database, 
  setIsModified:React.Dispatch<React.SetStateAction<boolean>> ) => {
  setIsLoading(true)
  
  await handleCartUpdate(curr, database)
  setIsModified(false)
  setIsLoading(false)
}




export const Ordering: React.FC = (): JSX.Element => {


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
  ponote, setPonote,
  currentOrder, setCurrentOrder

} = useContext<ToggleInterface>(ToggleContext)


const [checked, setChecked] = useState(false)


  const op = useRef(null);
  let curr = {curr: currentOrder, chosen: chosen, delivDate: delivDate, route: route, ponote: ponote }

  useEffect(() => {
    userInfoCheck().then(user => setUserInfo(user)).catch(err => console.log("Uh oh",err))
  }, [])

  useEffect(() => {
    setIsLoading(true)
    
    userInfo.authType &&
      promisedData()
        .then((db) =>getDeliveriesByDate(delivDate, db, userInfo)
          ).then((ords) => {
            setOrder(ords[0])
            setDatabase(ords[1])
            setCustomerList(ords[2])
            setIsLoading(false)
            setRoute(getThisRoute(chosen, ords[0],ords[1][1]))
            setPonote(getThisPONote(chosen, ords[0]))
            setCurrentOrder(getThisOrder(chosen, ords))
          }).catch(err => console.log("Uh oh",err));

  }, [userInfo, delivDate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    try{
      setChosen(customerList[0].value)
    }catch{

    }
    
  },[customerList])

  useEffect(() => {
    let ords: [Order[], Database, {
      label: string;
      value: string;
  }[]] = [order, database, customerList]
  try{
    setRoute(getThisRoute(chosen, ords[0],ords[1][1]))
    setPonote(getThisPONote(chosen, ords[0]))
    setCurrentOrder(getThisOrder(chosen, ords))
  } catch {}
    
  },[chosen])


  const ControlPanel: React.FC = ():JSX.Element => {
    return (
      <React.Fragment></React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <PushToTalk />

      {isLoading && <Loader />}
      
      <AddProdMod 
        op={op} 
        isModified={isModified} 
        setIsLoading={setIsLoading}
        curr={curr}
        database={database}
        setIsModified={setIsModified}
      />
      <BasicContainer>
        {userInfo.authType==="bpbadmin" ? <button>ORDER GUARD ON</button> : <button>ORDER GUARD OFF</button>}
        <CustList chosen={chosen} setChosen={setChosen} customerList={customerList} setIsModified={setIsModified}/>
        <Cal />
        <div className="field-checkbox">
                <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                <label htmlFor="binary">{checked ? ' EDITING LATE ORDERS' : ' NOT EDITING LATE ORDERS'}</label>
              </div>
            
      </BasicContainer>
      <Fulfill />
      <PONote ponote={ponote} setPonote={setPonote} setIsModified={setIsModified}/>
      <DataScroll checked={checked}/>
      <ControlPanel />
      
    </React.Fragment>
  );
};

