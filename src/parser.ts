import { SpeechSegment } from "@speechly/react-client";

export enum IntentType {
  Unknown = "unknown",
  Customer = "customer",
  Prado_pickup = "prado_pickup",
  DelivDate = "delivDate",
  Order = "order",
  Check_prod_order = "check_prod_order"
}

export enum EntityType {
  CustName = "custName",
  DelivDate = "delivDate",
  ProdName = "prodName",
  Qty = 'qty'
}


const SpeechIntentValues = Object.values(IntentType) as string[];

export function parseIntent(segment: SpeechSegment): IntentType {
  const { intent } = segment;

  if (SpeechIntentValues.includes(intent.intent)) {
    return intent.intent as IntentType;
  }

  return IntentType.Unknown;
}

export function parseEntities(segment: SpeechSegment): { type: EntityType, value: string }[] {
  const orderInfo: { 
    type: EntityType; 
    value: string; 
  }[] = []
  for (const e of segment.entities) { 
      let toAdd: { type: EntityType, value: string }  = {type: e.type as EntityType, value: e.value}
       orderInfo.push(toAdd);   
  }
  return orderInfo;
}
