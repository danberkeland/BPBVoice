import React, { useContext } from "react";

import { InputNumber } from 'primereact/inputnumber';
import { DataScroller } from 'primereact/datascroller';
import { Button } from "primereact/button";
import { confirmPopup } from 'primereact/confirmpopup';

import { addOrder } from "../../helpers/addOrder";
import { ToggleContext, ToggleInterface } from "../../Contexts/ToggleContexts";

import styled from "styled-components";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../../API";


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
  setIsModified,
  currentOrder,
  chosen,
  delivDate,
  route,
  ponote
  

} = useContext<ToggleInterface>(ToggleContext)

let curr = {curr: currentOrder, chosen: chosen, delivDate: delivDate, route: route, ponote: ponote }


const makeChange = (e, simpleItem) => {

  if (e === 0){
    confirmPopup({
      message: 'Are you sure you want to delete this item?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {setIsModified(true)
        let newOrder = addOrder(database, curr, simpleItem, e)
        setCurrentOrder(newOrder)},
      reject: () => {return}
  });
  }
}
    
const Quantity = (item): JSX.Element => {
  
  let simpleItem = item.prodName

  return (
    <InputNumber
      key={simpleItem}
      value={item.qty}
      size={3}
      buttonLayout="horizontal"
      onValueChange= {e => makeChange(e.value, simpleItem)}
      
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
  
  return (
    <AlignRight>
      
      <Button 
        icon="pi pi-trash" 
        className="p-button-rounded p-button-help p-button-outlined" 
        onClick = {e => makeChange(0, simpleItem)}/>
      
      
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
        <DataScroller value={currentOrder && currentOrder.filter(curr => curr.qty !== 0)} itemTemplate={item => itemTemplate(item)} rows={10} inline></DataScroller>
    );
};
