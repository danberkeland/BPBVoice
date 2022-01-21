import { SpeechSegment } from "@speechly/react-client";

export enum IntentType {
  Unknown = "unknown",
  Sort = "sort",
  Filter = "filter",
  Reset = "reset",
}

export enum EntityType {
  CustName = "custName",
  SortField = "sort_field",
}

export enum SortEntityType {
  Unknown = "unknown",
  DelivDate = "delivDate",
  CustName = "custName",
  ProdName = "prodName",
  Qty = "qty"
  
}

const SpeechIntentValues = Object.values(IntentType) as string[];
const SortTypeValues = Object.values(SortEntityType) as string[];

export function parseIntent(segment: SpeechSegment): IntentType {
  const { intent } = segment;

  if (SpeechIntentValues.includes(intent.intent)) {
    return intent.intent as IntentType;
  }

  return IntentType.Unknown;
}

export function parseCustNameEntity(segment: SpeechSegment): string[] {
  const langs: string[] = [];

  for (const e of segment.entities) {
    if (e.type === EntityType.CustName) {
      langs.push(e.value.toLowerCase());
    }
  }

  return langs;
}

export function parseSortEntity(segment: SpeechSegment): SortEntityType {
  let s = SortEntityType.Unknown;

  for (const e of segment.entities) {
    const val = e.value.toLowerCase();

    if (e.type === EntityType.SortField && SortTypeValues.includes(val)) {
      s = val as SortEntityType;
    }
  }

  return s;
}