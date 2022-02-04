import React, { useContext } from "react";

import { InputNumber } from 'primereact/inputnumber';
import { DataScroller } from 'primereact/datascroller';
import { Button } from "primereact/button";

import { addOrder } from "../../helpers/addOrder";
import { ToggleContext, ToggleInterface } from "../../Contexts/ToggleContexts";

import styled from "styled-components";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API";
import { AddProduct } from "./AddProduct";
import { createMethodSignature } from "typescript";
import { stringify } from "querystring";

const ProductTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1.3em;
  padding: 0;
  margin 0;
  color: rgb(36, 31, 31);
`;

const ProductTotal = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1.3em;
  padding: 0;
  margin 0;
  color: rgb(36, 31, 31);
`;

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2px 0px;
  align-items: center;
  
`;

const AlignRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: right;
`;


export const DataScroll: React.FC = (): JSX.Element => {

const { 

  setCurrentOrder,
  database,
  currentOrder,
  chosen,
  delivDate,
  route,
  ponote
  

} = useContext<ToggleInterface>(ToggleContext)
    
const Quantity = (item): JSX.Element => {
  let simpleItem = item.prodName
  let curr = {curr: currentOrder, chosen: chosen, delivDate: delivDate, route: route, ponote: ponote }

  const makeChange = (e) => {
    console.log(e)
    let newOrder = addOrder(database, curr, simpleItem, e.value)
    setCurrentOrder(newOrder)
  }

  return (
    <InputNumber
      key={simpleItem}
      value={item.qty}
      size={3}
      buttonLayout="horizontal"
      onValueChange= {e => makeChange(e)}
      
    />
    )
}

const Previous = (item): JSX.Element => {
  return (
    <React.Fragment></React.Fragment>
  )
}

const Rate = (item): JSX.Element => {
  return (
    <div>${item.rate}/ea.</div>
  )
}
  
const TrashCan = (item: Order): JSX.Element => {
  
  let simpleItem = item.prodName
  let curr = {curr: currentOrder, chosen: chosen, delivDate: delivDate, route: route, ponote: ponote }
  return (
    <AlignRight>
      
      <Button 
        icon="pi pi-trash" 
        className="p-button-rounded p-button-help p-button-outlined" 
        onClick = {e => setCurrentOrder(addOrder(database, curr, simpleItem, 0))}/>
      
      
    </AlignRight>
  )
}

const itemTemplate = (item: Order) => {

  console.log("item", item)
  return (
    <React.Fragment>
      <BasicContainer>
        <TwoColumn>
        <div style={{ textAlign: "left" }}>
          <ProductTitle>{item.prodName}</ProductTitle>
          <Rate {...item} />
        </div>
        
          <TrashCan {...item}/>
        
        
        </TwoColumn>
        
        <TwoColumn>
          <Quantity {...item} />
          <Previous />
          <ProductTotal>Total: ${(item.rate * item.qty).toFixed(2)}</ProductTotal>
        </TwoColumn>
      </BasicContainer>
    </React.Fragment>
  )
}


    return (
        <DataScroller value={currentOrder} itemTemplate={item => itemTemplate(item)} rows={10} inline></DataScroller>
    );
};
