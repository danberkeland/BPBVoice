import React from "react";

import { InputNumber } from 'primereact/inputnumber';
import { DataScroller } from 'primereact/datascroller';
import { Button } from "primereact/button";

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
  justify-items: left;
`;


type Props = {
    thisOrder: Order[]
}

const Quantity = (item): JSX.Element => {

  return (
    <InputNumber
      value={item.qty}
      size={3}
      buttonLayout="horizontal"
      incrementButtonIcon='pi pi-plus'
      decrementButtonIcon='pi pi-minus'
      onChange={e => console.log(item, e)}
      showButtons
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
  
const TrashCan = (item): JSX.Element => {
  return (
    <React.Fragment><Button icon="pi pi-trash" className="p-button-rounded p-button-help p-button-outlined" /></React.Fragment>
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
          <Rate item={item} />
        </div>
        <TrashCan item={item}/>
        </TwoColumn>
        
        <TwoColumn>
          <Quantity item={item} />
          <Previous />
          <ProductTotal>Total: ${(item.rate * item.qty).toFixed(2)}</ProductTotal>
        </TwoColumn>
      </BasicContainer>
    </React.Fragment>
  )
}

export const DataScroll: React.FC<Props> = ({ thisOrder }): JSX.Element => {

  

    return (
        <DataScroller value={thisOrder} itemTemplate={item => itemTemplate(item)} rows={10} inline></DataScroller>
    );
};
