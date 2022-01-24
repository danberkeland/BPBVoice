import React, { useEffect, useState } from "react";
import { useSpeechContext } from "@speechly/react-client";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "./API";

import {
  IntentType,
  EntityType,
  parseIntent,
  parseEntities
} from "./parser";

import { promisedData } from "./helpers/databaseFetchers";
import { getFullOrders } from "./helpers/getFullOrders"

import { PushToTalkButton } from "@speechly/react-ui";
import { Auth } from "aws-amplify";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

import styled from "styled-components";

const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 40px 10px 5px 10px;
  color: rgb(66, 97, 201);
`;

const DateStyle = styled.h3`
  padding: 0;
  color: black;
  margin: 5px 10px 25px 10px;
`;


const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: auto;
  box-sizing: border-box;
`;

export const SpeechApp: React.FC = (): JSX.Element => {

  const [userInfo, setUserInfo] = useState()
  const [customerList, setCustomerList ] = useState([])
  const [customer, setCustomer] = useState<string>('novo')
  const [delivDate, setDelivDate] = useState<string>('2022-01-24')
  const [database, setDatabase] = useState<any>([])
  const [order, setOrder] = useState<any>()

  const [products, customers, routes, standing, orders] = database;


  const { segment } = useSpeechContext();

  const userInfoCheck = async () => {
    const user = await Auth.currentAuthenticatedUser()
    console.log("user", user)
    setUserInfo(user)
  }

  useEffect(() => {
    userInfoCheck()
  }, [])

  useEffect(() => {
    userInfo &&
      promisedData()
        .then((db) =>
          getFullOrders(delivDate, db)).then((ords: any) => {
            setOrder(ords[0])
            setDatabase(ords[1])
            setCustomerList(ords[2])
          });

  }, [userInfo, delivDate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (segment === undefined) {
      return;
    }
    
    const nextEntities: { type: EntityType; value: string; }[] = parseEntities(segment);

    for (let ent of nextEntities) {
      if (ent.type === "custName") {
        setCustomer(ent.value)
      }
      if (ent.type === "delivDate") {
        setDelivDate(ent.value)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

  let custo = customers && customers[customers.findIndex(custo => custo.nickName === customer)].custName

  return (
    <div>
      <PushToTalkButton
        placement="bottom"
        captureKey=" "
        intro="Push to talk"
        size="80px" >
      </PushToTalkButton>
      <Title>{custo}</Title>
      <DateStyle>{delivDate}</DateStyle>
      <Dropdown value={custo} options={customerList} optionLabel="label" placeholder="Select a Customer" />
      <BasicContainer>
        <div className="card">
          <DataTable value={customers && order?.filter(or => (or.custName === custo  && or.qty > 0))} responsiveLayout="scroll">
            <Column field="qty" header="Quantity"></Column>
            <Column field="prodName" header="Product"></Column>
          </DataTable>
        </div>
      </BasicContainer>


    </div>
  );
};
