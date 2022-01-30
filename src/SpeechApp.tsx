import React, { useContext, useEffect, useState } from "react";
import { useSpeechContext } from "@speechly/react-client";

import {
  IntentType,
  EntityType,
  parseIntent,
  parseEntities
} from "./parser";

import { promisedData } from "./helpers/databaseFetchers";
import { getDeliveriesByDate } from "./helpers/getDeliveriesByDate"

import { PushToTalkButton } from "@speechly/react-ui";
import { Auth } from "aws-amplify";

import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { DataScroller } from 'primereact/datascroller';

import styled from "styled-components";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "./API";
import { ToggleContext } from "./Contexts/ToggleContexts";
import Loader from "./Loader";


const ProductTitle = styled.h2`
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


const FulfillOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr .5fr 1fr .5fr 1fr .5fr;
  margin: 2px;
  align-items: center;
  justify-items: right;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2px 0px;
  align-items: center;
  justify-items: left;
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
            setRoute(ords[0].filter(ord => ord.custName === custo)[0].route)
          });

  }, [userInfo, delivDate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (segment === undefined) {
      return;
    }

    const nextEntities: { type: EntityType; value: string; }[] = parseEntities(segment);

    for (let ent of nextEntities) {
      if (ent.type === "custName") {
        setChosen(ent.value)
      }
      if (ent.type === "delivDate") {
        setDelivDate(ent.value)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

  let custo: string = customers.length > 0 && customers[customers.findIndex(custo => custo.nickName === chosen)].custName


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
      size={1}
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
        <div style={{textAlign:"left"}}>
          <ProductTitle>{item.prodName}</ProductTitle>
          <div>${item.rate.toFixed(2)}/ea.</div>
          </div>
        <TwoColumn>
          
        

          

            <div>{quantityTemplate(item)}</div>


            <ProductTitle>Total: ${(item.rate * item.qty).toFixed(2)}</ProductTitle>
          </TwoColumn>
        </BasicContainer>

      </React.Fragment>
    )


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
      <BasicContainer>

        <Dropdown value={chosen} options={customerList} onChange={e => setChosen(e.value)} placeholder="Select a Customer" />
        <div className="field col-12 md:col-4">
          <Calendar id="touchUI" value={convertToDisplayDate(delivDate)} onChange={(e) => calDateSetter(e)} touchUI />
        </div>

      </BasicContainer>


      <BasicContainer>
        <FulfillOptions>
          <label htmlFor="fulfilldeliv">Delivery</label>
          <RadioButton inputId="fulfilldeliv" name="route" value="deliv" checked={route === 'deliv'} onChange={(e) => setRoute(e.value)} />


          <label htmlFor="fulfillslo">SLO</label>
          <RadioButton inputId="fulfillslo" name="route" value="slopick" checked={route === 'slopick'} onChange={(e) => setRoute(e.value)} />

          <label htmlFor="fulfillatown">Atown</label>
          <RadioButton inputId="fulfillatown" name="route" value="atownpick" checked={route === 'atownpick'} onChange={(e) => setRoute(e.value)} />

        </FulfillOptions>
      </BasicContainer>


      <div className="card">
        <DataScroller value={customers && order?.filter(or => (or.custName === custo && or.qty > 0))} itemTemplate={itemTemplate} rows={10} inline></DataScroller>

      </div>

    </React.Fragment>




  );
};
