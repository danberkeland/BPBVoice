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

export const SpeechApp: React.FC = (): JSX.Element => {
  const [filter, setFilter] = useState<IntentType>();
  const [entities, setEntities] = useState<{ type: EntityType; value: string; }[]>();
  const [userInfo, setUserInfo] = useState()
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
          });

  }, [userInfo, delivDate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (segment === undefined) {
      return;
    }
    const nextFilter: IntentType = parseIntent(segment);
    const nextEntities: { type: EntityType; value: string; }[] = parseEntities(segment);

    for (let ent of nextEntities){
      if (ent.type === "custName"){
        setCustomer(ent.value)
      }
      if (ent.type === "delivDate"){
        setDelivDate(ent.value)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

  let custo = customers[customers.findIndex(custo => custo.nickName === customer)].custName

  return (
    <div>
      <PushToTalkButton
        placement="bottom"
        captureKey=" "
        intro="Push to talk"
        size="80px" >
      </PushToTalkButton>
      <h1>{custo}</h1>
      <h2>{delivDate}</h2>
      {customers && order?.filter(or => (or.custName === custo) && or.qty > 0).map((ord: any) => {
        return (
          <React.Fragment key={ord.delivDate + ord.prodName + ord.custName}>
            
            {ord.qty} {ord.prodName}<br />
          </React.Fragment>
        )
      })}

    </div>
  );
};
