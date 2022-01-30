import React, { useContext, useEffect, useState } from "react";
import { useSpeechContext } from "@speechly/react-client";

import {
  IntentType,
  EntityType,
  parseIntent,
  parseEntities
} from "./parser";

import { promisedData } from "./helpers/databaseFetchers";
import { getOrders } from "./helpers/getFullOrders"

import { PushToTalkButton } from "@speechly/react-ui";
import { Auth } from "aws-amplify";

import { PrimeIcons } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';

import styled from "styled-components";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "./API";
import { ToggleContext } from "./Contexts/ToggleContexts";
import Loader from "./Loader";

const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 20px 10px 5px 10px;
  color: rgb(66, 97, 201);
`;

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
`;


const FulfillOptions = styled.div`
  display: grid;
  grid-template-columns: 2fr .25fr 2fr .25fr 2fr .25fr;
  margin: 2px;
  align-items: center;
  justify-items: right;
`;

const { DateTime } = require("luxon");

let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]
console.log(today)


type Database = [Product[], Customer[], Route[], Standing[], Order[], Dough[], DoughComponent[], AltPricing[], InfoQBAuth[]]

export const SpeechApp: React.FC = (): JSX.Element => {

  const [userInfo, setUserInfo] = useState()
  const [customerList, setCustomerList] = useState<{ label: string; value: string; }[]>([])
  const [customer, setCustomer] = useState<string>('novo')
  const [delivDate, setDelivDate] = useState<string>(today)
  const [database, setDatabase] = useState<Database>([[], [], [], [], [], [], [], [], []])
  const [order, setOrder] = useState<Order[]>()
  const [route, setRoute] = useState();
  const options = [
    { value: 'deliv', icon: 'pi pi-globe' },
    { value: 'slopick', icon: 'pi pi-lock-open' },
    { value: 'atownpick', icon: 'pi pi-lock' }
  ];

  const { isLoading, setIsLoading } = useContext(ToggleContext)


  const [products, customers, routes, standing, orders] = database;


  const { segment } = useSpeechContext();

  const userInfoCheck = async () => {
    const user = await Auth.currentAuthenticatedUser()
    setUserInfo(user)
  }

  useEffect(() => {
    console.log("order", order)
  }, [order])

  useEffect(() => {
    userInfoCheck()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    userInfo &&
      promisedData()
        .then((db) =>
          getOrders(delivDate, db)).then((ords) => {
            setOrder(ords[0])
            setDatabase(ords[1])
            setCustomerList(ords[2])
            setIsLoading(false)
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
  let rt: string
  let custo: string = customers.length > 0 && customers[customers.findIndex(custo => custo.nickName === customer)].custName
  try {
    rt = custo && order ? order.filter(ord => ord.custName === custo)[0].route : ''


  } catch { }


  const calDateSetter = (e) => {
    var today = e.value
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    setDelivDate(today)
  }

  const convertToDisplayDate = (d: string): Date => {
    var dateSplit = d.split('-')
    return new Date(Number(dateSplit[0]), Number(dateSplit[1]) - 1, Number(dateSplit[2]), 0, 0)

  }

  const quantityTemplate = (rowData) => {
    console.log("rowData", rowData)
    return <InputNumber
      value={rowData.qty}
      size={4}
      buttonLayout="horizontal"
      incrementButtonIcon='pi pi-plus'
      decrementButtonIcon='pi pi-minus'
      onChange={e => console.log(rowData, e)}
      showButtons
    />;
  }

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <PushToTalkButton
        placement="bottom"
        captureKey=" "
        intro="Push to talk"
        size="80px" >
      </PushToTalkButton>
      <Title>{custo}</Title>
      <div className="field col-12 md:col-4">
        <Calendar id="touchUI" value={convertToDisplayDate(delivDate)} onChange={(e) => calDateSetter(e)} touchUI />
      </div>
      <BasicContainer>
        <FulfillOptions>
          <label htmlFor="city1">Delivery</label>
          <RadioButton inputId="rt1" name="route" value="deliv" checked={rt === 'deliv'} />


          <label htmlFor="city2">SLO Pickup</label>
          <RadioButton inputId="rt2" name="route" value="slopick" checked={rt === 'slopick'} />

          <label htmlFor="city2">SLO Pickup</label>
          <RadioButton inputId="rt3" name="route" value="atownpick" checked={rt === 'atownpick'} />

        </FulfillOptions>
      </BasicContainer>



      <Dropdown value={customer} options={customerList} onChange={e => setCustomer(e.value)} placeholder="Select a Customer" />
      <BasicContainer>
        <div className="card">
          <DataTable value={customers && order?.filter(or => (or.custName === custo && or.qty > 0))} responsiveLayout="scroll">
            <Column header="Quantity" body={e => quantityTemplate(e)}></Column>
            <Column field="prodName" header="Product"></Column>
          </DataTable>
        </div>
      </BasicContainer>
    </React.Fragment>




  );
};
