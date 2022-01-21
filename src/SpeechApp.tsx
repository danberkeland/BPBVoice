import React, { useEffect, useState } from "react";
import { SpeechSegment, useSpeechContext } from "@speechly/react-client";

import { orders, orderRepo } from "./data";
import { Filter, filterOrders } from "./filter";
import {
  IntentType,
  SortEntityType,
  parseIntent,
  parseCustNameEntity,
  parseSortEntity,
} from "./parser";

import { OrderList } from "./OrderList";
import { Microphone } from "./Microphone";

export const SpeechApp: React.FC = (): JSX.Element => {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  const [orderList, setorderList] = useState<orderRepo[]>(orders);

  const { toggleRecording, speechState, segment } = useSpeechContext();

  useEffect(() => {
    if (segment === undefined) {
      return;
    }

    const nextFilter = {
      ...filter,
      ...parseSegment(segment),
    };

    setFilter(nextFilter);
    setorderList(filterOrders(orders, nextFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

  return (
    <div>
      <Microphone
        segment={segment}
        state={speechState}
        onRecord={toggleRecording}
      />
      
      <OrderList orderList={orderList} />
    </div>
  );
};

const emptyFilter: Filter = {};
const defaultFilter: Filter = {
  custNames: [],
  sortBy: SortEntityType.DelivDate,
};

function parseSegment(segment: SpeechSegment): Filter {
  const intent = parseIntent(segment);

  switch (intent) {
    case IntentType.Filter:
      const custNames = parseCustNameEntity(segment);

      if (custNames.length === 0) {
        return emptyFilter;
      }

      return {
        custNames,
      };
    case IntentType.Sort:
      const sortBy = parseSortEntity(segment);
      if (sortBy !== SortEntityType.Unknown) {
        return {
          sortBy,
        };
      }

      return emptyFilter;
    case IntentType.Reset:
      return defaultFilter;
    default:
      return emptyFilter;
  }
}