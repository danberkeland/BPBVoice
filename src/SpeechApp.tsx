import React, { useEffect, useState } from "react";
import { SpeechSegment, useSpeechContext } from "@speechly/react-client";

import {
  IntentType,
  parseIntent
} from "./parser";

import { PushToTalkButton } from "@speechly/react-ui";

export const SpeechApp: React.FC = (): JSX.Element => {
  const [filter, setFilter] = useState<IntentType>();
 
  const { toggleRecording, speechState, segment } = useSpeechContext();

  useEffect(() => {
    if (segment === undefined) {
      return;
    }
    const nextFilter: IntentType = parseSegment(segment);
    setFilter(nextFilter);

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

      <div>Display decision goes here.</div>
    </div>
  );
};

function parseSegment(segment: SpeechSegment): IntentType{
  const intent = parseIntent(segment);
  console.log(intent)
  return intent
}