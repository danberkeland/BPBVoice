import React, { useEffect, useState } from "react";
import { SpeechSegment, useSpeechContext } from "@speechly/react-client";

import {
  IntentType,
  EntityType,
  parseIntent,
  parseEntities
} from "./parser";

import { PushToTalkButton } from "@speechly/react-ui";
import { setSyntheticTrailingComments } from "typescript";

export const SpeechApp: React.FC = (): JSX.Element => {
  const [filter, setFilter ] = useState<IntentType>();
  const [entities, setEntities ] = useState<{ type: EntityType; value: string; }[]>();
 
  const { toggleRecording, speechState, segment } = useSpeechContext();

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
