import React, { useContext, useState, useEffect } from "react";

import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';


import { promisedData } from "./helpers/databaseFetchers";
import { getDeliveriesByDate } from "./helpers/getDeliveriesByDate"

import { Auth } from "aws-amplify";

import styled from "styled-components";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "./API";
import { ToggleContext } from "./Contexts/ToggleContexts";
import Loader from "./Loader";
import { PushToTalk } from "./SpeechAppParts/PushToTalkButton";
import { Fulfill } from "./SpeechAppParts/FulfillOptions";
import { DataScroll } from "./SpeechAppParts/DataScroller";

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
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



  const { isLoading, setIsLoading } = useContext(ToggleContext)


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

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <PushToTalk setChosen={setChosen} setDelivDate={setDelivDate} />
      <BasicContainer>

        <Dropdown value={chosen} options={customerList} onChange={e => setChosen(e.value)} placeholder="Select a Customer" />
        <div className="field col-12 md:col-4">
          <Calendar id="touchUI" value={convertToDisplayDate(delivDate)} onChange={(e) => calDateSetter(e)} touchUI />
        </div>

      </BasicContainer>
      <Fulfill route={route} setRoute={setRoute} />
      <DataScroll chosen={chosen} database={database} order={order}/>
    </React.Fragment>
  );
};
