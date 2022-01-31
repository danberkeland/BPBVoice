import React from "react";

import { InputNumber } from 'primereact/inputnumber';
import { DataScroller } from 'primereact/datascroller';

import styled from "styled-components";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";

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

type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

type Props = {
    chosen: string,
    database: Database,
    order: Order[]
}

export const DataScroll: React.FC<Props> = ({ chosen, database, order }): JSX.Element => {

  const [products, customers, routes, standing, orders] = database;

  let custo: string = customers.length > 0 && customers[customers.findIndex(custo => custo.nickName === chosen)].custName

  const quantityTemplate = (rowData) => {
    console.log("rowData", rowData)
    return <InputNumber
      value={rowData.qty}
      size={3}
      buttonLayout="horizontal"
      incrementButtonIcon='pi pi-plus'
      decrementButtonIcon='pi pi-minus'
      onChange={e => console.log(rowData, e)}
      showButtons
    />;
  }

  const itemTemplate = (item: Order) => {
    return (
      <React.Fragment>
        <BasicContainer>
          <div style={{ textAlign: "left" }}>
            <ProductTitle>{item.prodName}</ProductTitle>
            <div>${item.rate.toFixed(2)}/ea.</div>
          </div>
          <TwoColumn>
            <div>{quantityTemplate(item)}</div>
            <ProductTotal>Total: ${(item.rate * item.qty).toFixed(2)}</ProductTotal>
          </TwoColumn>
        </BasicContainer>
      </React.Fragment>
    )
  }

    return (
        <DataScroller value={customers && order?.filter(or => (or.custName === custo && or.qty > 0))} itemTemplate={itemTemplate} rows={10} inline></DataScroller>
    );
};
