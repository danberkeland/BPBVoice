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

import { PushToTalkButton } from "@speechly/react-ui";

export const SpeechApp: React.FC = (): JSX.Element => {
  const [ filter, setFilter ] = useState<IntentType>();
  const [ entities, setEntities ] = useState<{ type: EntityType; value: string; }[]>();
  const [ database, setDatabase ] = useState<(Product[] | Customer[] | Route[] | Standing[] | Dough[] | DoughComponent[] | AltPricing[] | InfoQBAuth[] | Order[])[]>([])
 
  const { segment } = useSpeechContext();

  useEffect(() => {
    try{
      console.log(database[0])
    } catch{
      console.log("Not loaded yet")
    }
    
  },[database])

  useEffect(() => {
    promisedData()
      .then((db) => setDatabase(db));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (segment === undefined) {
      return;
    }
    const nextFilter: IntentType = parseIntent(segment);
    const nextEntities: { type: EntityType; value: string; }[] = parseEntities(segment);
    
    setFilter(nextFilter);
    setEntities(nextEntities)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

  return (
    <div>
      <PushToTalkButton
        placement="bottom"
        captureKey=" "
        intro="Push to talk"
        size="80px" >
      </PushToTalkButton>

      <div>Display decisions: </div>
      <div>{filter}</div>
      {entities?.map((ent) => {
        return(
          <React.Fragment>
            {ent.type} {ent.value}<br />
          </React.Fragment>
        )
      })}
    </div>
  );
};
