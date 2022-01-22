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
  const [entities, setEntities ] = useState<string[]>();
 
  const { toggleRecording, speechState, segment } = useSpeechContext();

  useEffect(() => {
    if (segment === undefined) {
      return;
    }
    const nextFilter: IntentType = parseSegment(segment);
    const nextEntities: string[] = parseEntities(segment);
    
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

      <div>Display decision goes here. </div>
      <div>{filter}</div>
      <div>{entities}</div>
    </div>
  );
};

function parseSegment(segment: SpeechSegment): IntentType{
  const intent = parseIntent(segment);
  console.log(intent)
  return intent
}
