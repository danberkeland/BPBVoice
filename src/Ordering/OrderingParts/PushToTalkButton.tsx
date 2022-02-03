import React, { useEffect, useContext } from "react";
import { useSpeechContext } from "@speechly/react-client";
import { ToggleContext, ToggleInterface } from '../../Contexts/ToggleContexts'

import { PushToTalkButton } from "@speechly/react-ui";

import {
  IntentType,
  EntityType,
  parseIntent,
  parseEntities
} from "../../parser";


export const PushToTalk: React.FC = (): JSX.Element => {

  const {
    setChosen,
    setDelivDate,
  } = useContext<ToggleInterface>(ToggleContext)

  const { segment } = useSpeechContext();

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



  return (

    <PushToTalkButton
      placement="bottom"
      captureKey=" "
      intro="Push to talk"
      size="80px" >
    </PushToTalkButton>





  );
};
