/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
  nickName: string,
  custName: string,
  zoneName?: string | null,
  addr1?: string | null,
  addr2?: string | null,
  city?: string | null,
  zip?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phone?: string | null,
  toBePrinted?: boolean | null,
  toBeEmailed?: boolean | null,
  printDuplicate?: boolean | null,
  terms?: string | null,
  invoicing?: string | null,
  prodsNotAllowed?: Array< string | null > | null,
  latestFirstDeliv?: number | null,
  latestFinalDeliv?: number | null,
  webpageURL?: string | null,
  picURL?: string | null,
  gMap?: string | null,
  specialInstructions?: string | null,
  delivOrder?: number | null,
  customProd?: Array< string | null > | null,
  templateProd?: Array< string | null > | null,
  userSubs?: Array< string | null > | null,
  qbID?: string | null,
  currentBalance?: string | null,
};

export type ModelCustomerConditionInput = {
  nickName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  zoneName?: ModelStringInput | null,
  addr1?: ModelStringInput | null,
  addr2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  toBePrinted?: ModelBooleanInput | null,
  toBeEmailed?: ModelBooleanInput | null,
  printDuplicate?: ModelBooleanInput | null,
  terms?: ModelStringInput | null,
  invoicing?: ModelStringInput | null,
  prodsNotAllowed?: ModelStringInput | null,
  latestFirstDeliv?: ModelFloatInput | null,
  latestFinalDeliv?: ModelFloatInput | null,
  webpageURL?: ModelStringInput | null,
  picURL?: ModelStringInput | null,
  gMap?: ModelStringInput | null,
  specialInstructions?: ModelStringInput | null,
  delivOrder?: ModelIntInput | null,
  customProd?: ModelStringInput | null,
  templateProd?: ModelStringInput | null,
  userSubs?: ModelStringInput | null,
  qbID?: ModelStringInput | null,
  currentBalance?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  nickName: string,
  custName: string,
  zoneName?: string | null,
  addr1?: string | null,
  addr2?: string | null,
  city?: string | null,
  zip?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phone?: string | null,
  toBePrinted?: boolean | null,
  toBeEmailed?: boolean | null,
  printDuplicate?: boolean | null,
  terms?: string | null,
  invoicing?: string | null,
  prodsNotAllowed?: Array< string | null > | null,
  latestFirstDeliv?: number | null,
  latestFinalDeliv?: number | null,
  webpageURL?: string | null,
  picURL?: string | null,
  gMap?: string | null,
  specialInstructions?: string | null,
  delivOrder?: number | null,
  customProd?: Array< string | null > | null,
  templateProd?: Array< string | null > | null,
  userSubs?: Array< string | null > | null,
  qbID?: string | null,
  currentBalance?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCustomerInput = {
  id: string,
  nickName?: string | null,
  custName?: string | null,
  zoneName?: string | null,
  addr1?: string | null,
  addr2?: string | null,
  city?: string | null,
  zip?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phone?: string | null,
  toBePrinted?: boolean | null,
  toBeEmailed?: boolean | null,
  printDuplicate?: boolean | null,
  terms?: string | null,
  invoicing?: string | null,
  prodsNotAllowed?: Array< string | null > | null,
  latestFirstDeliv?: number | null,
  latestFinalDeliv?: number | null,
  webpageURL?: string | null,
  picURL?: string | null,
  gMap?: string | null,
  specialInstructions?: string | null,
  delivOrder?: number | null,
  customProd?: Array< string | null > | null,
  templateProd?: Array< string | null > | null,
  userSubs?: Array< string | null > | null,
  qbID?: string | null,
  currentBalance?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  prodName: string,
  nickName: string,
  packGroup?: string | null,
  packSize?: number | null,
  doughType?: string | null,
  freezerThaw?: boolean | null,
  eodCount?: boolean | null,
  packGroupOrder?: number | null,
  readyTime?: number | null,
  bakedWhere?: Array< string | null > | null,
  wholePrice?: number | null,
  retailPrice?: number | null,
  isWhole?: boolean | null,
  depends?: string | null,
  weight?: number | null,
  descrip?: string | null,
  picURL?: string | null,
  squareID?: string | null,
  currentStock?: number | null,
  whoCountedLast?: string | null,
  forBake?: string | null,
  bakeExtra?: number | null,
  batchSize?: number | null,
  preshaped?: number | null,
  prepreshaped?: number | null,
  updatePreDate?: string | null,
  updateFreezerDate?: string | null,
  backporchbakerypre?: number | null,
  backporchbakery?: number | null,
  bpbextrapre?: number | null,
  bpbextra?: number | null,
  bpbssetoutpre?: number | null,
  bpbssetout?: number | null,
  defaultInclude?: boolean | null,
  leadTime?: number | null,
  qbID?: string | null,
  freezerCount?: number | null,
  freezerClosing?: number | null,
  sheetMake?: number | null,
  freezerNorth?: number | null,
  freezerNorthClosing?: number | null,
  freezerNorthFlag?: string | null,
};

export type ModelProductConditionInput = {
  prodName?: ModelStringInput | null,
  nickName?: ModelStringInput | null,
  packGroup?: ModelStringInput | null,
  packSize?: ModelIntInput | null,
  doughType?: ModelStringInput | null,
  freezerThaw?: ModelBooleanInput | null,
  eodCount?: ModelBooleanInput | null,
  packGroupOrder?: ModelIntInput | null,
  readyTime?: ModelFloatInput | null,
  bakedWhere?: ModelStringInput | null,
  wholePrice?: ModelFloatInput | null,
  retailPrice?: ModelFloatInput | null,
  isWhole?: ModelBooleanInput | null,
  depends?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  descrip?: ModelStringInput | null,
  picURL?: ModelStringInput | null,
  squareID?: ModelStringInput | null,
  currentStock?: ModelIntInput | null,
  whoCountedLast?: ModelStringInput | null,
  forBake?: ModelStringInput | null,
  bakeExtra?: ModelIntInput | null,
  batchSize?: ModelIntInput | null,
  preshaped?: ModelIntInput | null,
  prepreshaped?: ModelIntInput | null,
  updatePreDate?: ModelStringInput | null,
  updateFreezerDate?: ModelStringInput | null,
  backporchbakerypre?: ModelIntInput | null,
  backporchbakery?: ModelIntInput | null,
  bpbextrapre?: ModelIntInput | null,
  bpbextra?: ModelIntInput | null,
  bpbssetoutpre?: ModelIntInput | null,
  bpbssetout?: ModelIntInput | null,
  defaultInclude?: ModelBooleanInput | null,
  leadTime?: ModelIntInput | null,
  qbID?: ModelStringInput | null,
  freezerCount?: ModelIntInput | null,
  freezerClosing?: ModelIntInput | null,
  sheetMake?: ModelIntInput | null,
  freezerNorth?: ModelIntInput | null,
  freezerNorthClosing?: ModelIntInput | null,
  freezerNorthFlag?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  prodName: string,
  nickName: string,
  packGroup?: string | null,
  packSize?: number | null,
  doughType?: string | null,
  freezerThaw?: boolean | null,
  eodCount?: boolean | null,
  packGroupOrder?: number | null,
  readyTime?: number | null,
  bakedWhere?: Array< string | null > | null,
  wholePrice?: number | null,
  retailPrice?: number | null,
  isWhole?: boolean | null,
  depends?: string | null,
  weight?: number | null,
  descrip?: string | null,
  picURL?: string | null,
  squareID?: string | null,
  currentStock?: number | null,
  whoCountedLast?: string | null,
  forBake?: string | null,
  bakeExtra?: number | null,
  batchSize?: number | null,
  preshaped?: number | null,
  prepreshaped?: number | null,
  updatePreDate?: string | null,
  updateFreezerDate?: string | null,
  backporchbakerypre?: number | null,
  backporchbakery?: number | null,
  bpbextrapre?: number | null,
  bpbextra?: number | null,
  bpbssetoutpre?: number | null,
  bpbssetout?: number | null,
  defaultInclude?: boolean | null,
  leadTime?: number | null,
  qbID?: string | null,
  freezerCount?: number | null,
  freezerClosing?: number | null,
  sheetMake?: number | null,
  freezerNorth?: number | null,
  freezerNorthClosing?: number | null,
  freezerNorthFlag?: string | null,
  createdAt: string,
  updatedAt: string,
  [key: string]: any,
};

export type UpdateProductInput = {
  id: string,
  prodName?: string | null,
  nickName?: string | null,
  packGroup?: string | null,
  packSize?: number | null,
  doughType?: string | null,
  freezerThaw?: boolean | null,
  eodCount?: boolean | null,
  packGroupOrder?: number | null,
  readyTime?: number | null,
  bakedWhere?: Array< string | null > | null,
  wholePrice?: number | null,
  retailPrice?: number | null,
  isWhole?: boolean | null,
  depends?: string | null,
  weight?: number | null,
  descrip?: string | null,
  picURL?: string | null,
  squareID?: string | null,
  currentStock?: number | null,
  whoCountedLast?: string | null,
  forBake?: string | null,
  bakeExtra?: number | null,
  batchSize?: number | null,
  preshaped?: number | null,
  prepreshaped?: number | null,
  updatePreDate?: string | null,
  updateFreezerDate?: string | null,
  backporchbakerypre?: number | null,
  backporchbakery?: number | null,
  bpbextrapre?: number | null,
  bpbextra?: number | null,
  bpbssetoutpre?: number | null,
  bpbssetout?: number | null,
  defaultInclude?: boolean | null,
  leadTime?: number | null,
  qbID?: string | null,
  freezerCount?: number | null,
  freezerClosing?: number | null,
  sheetMake?: number | null,
  freezerNorth?: number | null,
  freezerNorthClosing?: number | null,
  freezerNorthFlag?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  qty?: number | null,
  prodName: string,
  custName?: string | null,
  PONote?: string | null,
  route?: string | null,
  SO?: number | null,
  isWhole?: boolean | null,
  delivDate?: string | null,
  timeStamp?: string | null,
  rate?: number | null,
};

export type ModelOrderConditionInput = {
  qty?: ModelIntInput | null,
  prodName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  PONote?: ModelStringInput | null,
  route?: ModelStringInput | null,
  SO?: ModelIntInput | null,
  isWhole?: ModelBooleanInput | null,
  delivDate?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  rate?: ModelFloatInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id?: string,
  qty?: number | null,
  prodName: string,
  custName?: string | null,
  PONote?: string | null,
  route?: string | null,
  SO?: number | null,
  isWhole?: boolean | null,
  isLate?: number | null,
  delivDate?: string | null,
  timeStamp?: string | null,
  rate?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderInput = {
  id: string,
  qty?: number | null,
  prodName?: string | null,
  custName?: string | null,
  PONote?: string | null,
  route?: string | null,
  SO?: number | null,
  isWhole?: boolean | null,
  delivDate?: string | null,
  timeStamp?: string | null,
  rate?: number | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateStandingInput = {
  id?: string | null,
  timeStamp?: string | null,
  prodName?: string | null,
  custName?: string | null,
  isStand?: boolean | null,
  Sun?: number | null,
  Mon?: number | null,
  Tue?: number | null,
  Wed?: number | null,
  Thu?: number | null,
  Fri?: number | null,
  Sat?: number | null,
};

export type ModelStandingConditionInput = {
  timeStamp?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  isStand?: ModelBooleanInput | null,
  Sun?: ModelIntInput | null,
  Mon?: ModelIntInput | null,
  Tue?: ModelIntInput | null,
  Wed?: ModelIntInput | null,
  Thu?: ModelIntInput | null,
  Fri?: ModelIntInput | null,
  Sat?: ModelIntInput | null,
  and?: Array< ModelStandingConditionInput | null > | null,
  or?: Array< ModelStandingConditionInput | null > | null,
  not?: ModelStandingConditionInput | null,
};

export type Standing = {
  __typename: "Standing",
  id: string,
  timeStamp?: string | null,
  prodName?: string | null,
  custName?: string | null,
  isStand?: boolean | null,
  Sun?: number | null,
  Mon?: number | null,
  Tue?: number | null,
  Wed?: number | null,
  Thu?: number | null,
  Fri?: number | null,
  Sat?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStandingInput = {
  id: string,
  timeStamp?: string | null,
  prodName?: string | null,
  custName?: string | null,
  isStand?: boolean | null,
  Sun?: number | null,
  Mon?: number | null,
  Tue?: number | null,
  Wed?: number | null,
  Thu?: number | null,
  Fri?: number | null,
  Sat?: number | null,
};

export type DeleteStandingInput = {
  id: string,
};

export type CreateHoldingInput = {
  id?: string | null,
  timeStamp?: string | null,
  prodName?: string | null,
  custName?: string | null,
  Sun?: number | null,
  Mon?: number | null,
  Tue?: number | null,
  Wed?: number | null,
  Thu?: number | null,
  Fri?: number | null,
  Sat?: number | null,
  Test?: string | null,
};

export type ModelHoldingConditionInput = {
  timeStamp?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  Sun?: ModelIntInput | null,
  Mon?: ModelIntInput | null,
  Tue?: ModelIntInput | null,
  Wed?: ModelIntInput | null,
  Thu?: ModelIntInput | null,
  Fri?: ModelIntInput | null,
  Sat?: ModelIntInput | null,
  Test?: ModelStringInput | null,
  and?: Array< ModelHoldingConditionInput | null > | null,
  or?: Array< ModelHoldingConditionInput | null > | null,
  not?: ModelHoldingConditionInput | null,
};

export type Holding = {
  __typename: "Holding",
  id: string,
  timeStamp?: string | null,
  prodName?: string | null,
  custName?: string | null,
  Sun?: number | null,
  Mon?: number | null,
  Tue?: number | null,
  Wed?: number | null,
  Thu?: number | null,
  Fri?: number | null,
  Sat?: number | null,
  Test?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHoldingInput = {
  id: string,
  timeStamp?: string | null,
  prodName?: string | null,
  custName?: string | null,
  Sun?: number | null,
  Mon?: number | null,
  Tue?: number | null,
  Wed?: number | null,
  Thu?: number | null,
  Fri?: number | null,
  Sat?: number | null,
  Test?: string | null,
};

export type DeleteHoldingInput = {
  id: string,
};

export type CreateRouteInput = {
  id?: string | null,
  routeName?: string | null,
  routeStart?: number | null,
  routeTime?: number | null,
  RouteDepart?: string | null,
  RouteArrive?: string | null,
  RouteServe?: Array< string | null > | null,
  RouteSched?: Array< string | null > | null,
  printOrder?: number | null,
  driver?: string | null,
};

export type ModelRouteConditionInput = {
  routeName?: ModelStringInput | null,
  routeStart?: ModelFloatInput | null,
  routeTime?: ModelFloatInput | null,
  RouteDepart?: ModelStringInput | null,
  RouteArrive?: ModelStringInput | null,
  RouteServe?: ModelStringInput | null,
  RouteSched?: ModelStringInput | null,
  printOrder?: ModelIntInput | null,
  driver?: ModelStringInput | null,
  and?: Array< ModelRouteConditionInput | null > | null,
  or?: Array< ModelRouteConditionInput | null > | null,
  not?: ModelRouteConditionInput | null,
};

export type Route = {
  __typename: "Route",
  id: string,
  routeName?: string | null,
  routeStart?: number | null,
  routeTime?: number | null,
  RouteDepart?: string | null,
  RouteArrive?: string | null,
  RouteServe?: Array< string | null > | null,
  RouteSched?: Array< string | null > | null,
  printOrder?: number | null,
  driver?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRouteInput = {
  id: string,
  routeName?: string | null,
  routeStart?: number | null,
  routeTime?: number | null,
  RouteDepart?: string | null,
  RouteArrive?: string | null,
  RouteServe?: Array< string | null > | null,
  RouteSched?: Array< string | null > | null,
  printOrder?: number | null,
  driver?: string | null,
};

export type DeleteRouteInput = {
  id: string,
};

export type CreateZoneInput = {
  id?: string | null,
  zoneNum?: number | null,
  zoneName?: string | null,
  zoneFee?: number | null,
};

export type ModelZoneConditionInput = {
  zoneNum?: ModelIntInput | null,
  zoneName?: ModelStringInput | null,
  zoneFee?: ModelIntInput | null,
  and?: Array< ModelZoneConditionInput | null > | null,
  or?: Array< ModelZoneConditionInput | null > | null,
  not?: ModelZoneConditionInput | null,
};

export type Zone = {
  __typename: "Zone",
  id: string,
  zoneNum?: number | null,
  zoneName?: string | null,
  zoneFee?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateZoneInput = {
  id: string,
  zoneNum?: number | null,
  zoneName?: string | null,
  zoneFee?: number | null,
};

export type DeleteZoneInput = {
  id: string,
};

export type CreateAltPricingInput = {
  id?: string | null,
  custName?: string | null,
  prodName?: string | null,
  wholePrice?: number | null,
};

export type ModelAltPricingConditionInput = {
  custName?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  wholePrice?: ModelFloatInput | null,
  and?: Array< ModelAltPricingConditionInput | null > | null,
  or?: Array< ModelAltPricingConditionInput | null > | null,
  not?: ModelAltPricingConditionInput | null,
};

export type AltPricing = {
  __typename: "AltPricing",
  id: string,
  custName?: string | null,
  prodName?: string | null,
  wholePrice?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAltPricingInput = {
  id: string,
  custName?: string | null,
  prodName?: string | null,
  wholePrice?: number | null,
};

export type DeleteAltPricingInput = {
  id: string,
};

export type CreateClosureInput = {
  id?: string | null,
  custName?: string | null,
  firstDate?: string | null,
  lastDate?: string | null,
};

export type ModelClosureConditionInput = {
  custName?: ModelStringInput | null,
  firstDate?: ModelStringInput | null,
  lastDate?: ModelStringInput | null,
  and?: Array< ModelClosureConditionInput | null > | null,
  or?: Array< ModelClosureConditionInput | null > | null,
  not?: ModelClosureConditionInput | null,
};

export type Closure = {
  __typename: "Closure",
  id: string,
  custName?: string | null,
  firstDate?: string | null,
  lastDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateClosureInput = {
  id: string,
  custName?: string | null,
  firstDate?: string | null,
  lastDate?: string | null,
};

export type DeleteClosureInput = {
  id: string,
};

export type CreateHeldforWeeklyInvoicingInput = {
  id?: string | null,
  custName: string,
  delivDate: string,
  prodName: string,
  qty?: number | null,
  rate?: number | null,
};

export type ModelHeldforWeeklyInvoicingConditionInput = {
  custName?: ModelStringInput | null,
  delivDate?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  rate?: ModelFloatInput | null,
  and?: Array< ModelHeldforWeeklyInvoicingConditionInput | null > | null,
  or?: Array< ModelHeldforWeeklyInvoicingConditionInput | null > | null,
  not?: ModelHeldforWeeklyInvoicingConditionInput | null,
};

export type HeldforWeeklyInvoicing = {
  __typename: "HeldforWeeklyInvoicing",
  id: string,
  custName: string,
  delivDate: string,
  prodName: string,
  qty?: number | null,
  rate?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHeldforWeeklyInvoicingInput = {
  id: string,
  custName?: string | null,
  delivDate?: string | null,
  prodName?: string | null,
  qty?: number | null,
  rate?: number | null,
};

export type DeleteHeldforWeeklyInvoicingInput = {
  id: string,
};

export type CreateDoughInput = {
  id?: string | null,
  doughName?: string | null,
  hydration?: number | null,
  process?: Array< string | null > | null,
  batchSize?: number | null,
  mixedWhere?: string | null,
  components?: Array< string | null > | null,
  oldDough?: number | null,
  isBakeReady?: boolean | null,
  buffer?: number | null,
  bucketSets?: number | null,
  preBucketSets?: number | null,
  updatePreBucket?: string | null,
  saltInDry?: boolean | null,
};

export type ModelDoughConditionInput = {
  doughName?: ModelStringInput | null,
  hydration?: ModelFloatInput | null,
  process?: ModelStringInput | null,
  batchSize?: ModelFloatInput | null,
  mixedWhere?: ModelStringInput | null,
  components?: ModelStringInput | null,
  oldDough?: ModelFloatInput | null,
  isBakeReady?: ModelBooleanInput | null,
  buffer?: ModelFloatInput | null,
  bucketSets?: ModelIntInput | null,
  preBucketSets?: ModelIntInput | null,
  updatePreBucket?: ModelStringInput | null,
  saltInDry?: ModelBooleanInput | null,
  and?: Array< ModelDoughConditionInput | null > | null,
  or?: Array< ModelDoughConditionInput | null > | null,
  not?: ModelDoughConditionInput | null,
};

export type Dough = {
  __typename: "Dough",
  id: string,
  doughName?: string | null,
  hydration?: number | null,
  process?: Array< string | null > | null,
  batchSize?: number | null,
  mixedWhere?: string | null,
  components?: Array< string | null > | null,
  oldDough?: number | null,
  isBakeReady?: boolean | null,
  buffer?: number | null,
  bucketSets?: number | null,
  preBucketSets?: number | null,
  updatePreBucket?: string | null,
  saltInDry?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDoughInput = {
  id: string,
  doughName?: string | null,
  hydration?: number | null,
  process?: Array< string | null > | null,
  batchSize?: number | null,
  mixedWhere?: string | null,
  components?: Array< string | null > | null,
  oldDough?: number | null,
  isBakeReady?: boolean | null,
  buffer?: number | null,
  bucketSets?: number | null,
  preBucketSets?: number | null,
  updatePreBucket?: string | null,
  saltInDry?: boolean | null,
};

export type DeleteDoughInput = {
  id: string,
};

export type CreateDoughComponentInput = {
  id?: string | null,
  dough?: string | null,
  componentType?: string | null,
  componentName?: string | null,
  amount?: number | null,
};

export type ModelDoughComponentConditionInput = {
  dough?: ModelStringInput | null,
  componentType?: ModelStringInput | null,
  componentName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelDoughComponentConditionInput | null > | null,
  or?: Array< ModelDoughComponentConditionInput | null > | null,
  not?: ModelDoughComponentConditionInput | null,
};

export type DoughComponent = {
  __typename: "DoughComponent",
  id: string,
  dough?: string | null,
  componentType?: string | null,
  componentName?: string | null,
  amount?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDoughComponentInput = {
  id: string,
  dough?: string | null,
  componentType?: string | null,
  componentName?: string | null,
  amount?: number | null,
};

export type DeleteDoughComponentInput = {
  id: string,
};

export type CreateNotesInput = {
  id?: string | null,
  note?: string | null,
  forWhom?: string | null,
  byWhom?: string | null,
  when?: string | null,
};

export type ModelNotesConditionInput = {
  note?: ModelStringInput | null,
  forWhom?: ModelStringInput | null,
  byWhom?: ModelStringInput | null,
  when?: ModelStringInput | null,
  and?: Array< ModelNotesConditionInput | null > | null,
  or?: Array< ModelNotesConditionInput | null > | null,
  not?: ModelNotesConditionInput | null,
};

export type Notes = {
  __typename: "Notes",
  id: string,
  note?: string | null,
  forWhom?: string | null,
  byWhom?: string | null,
  when?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotesInput = {
  id: string,
  note?: string | null,
  forWhom?: string | null,
  byWhom?: string | null,
  when?: string | null,
};

export type DeleteNotesInput = {
  id: string,
};

export type CreateAuthSettingsInput = {
  id?: string | null,
  sub?: string | null,
  authType?: string | null,
  tempPassword?: string | null,
  tempUsername?: string | null,
  subSubs?: Array< string | null > | null,
  firstName?: string | null,
  lastName?: string | null,
  businessName?: string | null,
  phone?: string | null,
  email?: string | null,
  verified?: boolean | null,
};

export type ModelAuthSettingsConditionInput = {
  sub?: ModelStringInput | null,
  authType?: ModelStringInput | null,
  tempPassword?: ModelStringInput | null,
  tempUsername?: ModelStringInput | null,
  subSubs?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  businessName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelAuthSettingsConditionInput | null > | null,
  or?: Array< ModelAuthSettingsConditionInput | null > | null,
  not?: ModelAuthSettingsConditionInput | null,
};

export type AuthSettings = {
  __typename: "AuthSettings",
  id: string,
  sub?: string | null,
  authType?: string | null,
  tempPassword?: string | null,
  tempUsername?: string | null,
  subSubs?: Array< string | null > | null,
  firstName?: string | null,
  lastName?: string | null,
  businessName?: string | null,
  phone?: string | null,
  email?: string | null,
  verified?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAuthSettingsInput = {
  id: string,
  sub?: string | null,
  authType?: string | null,
  tempPassword?: string | null,
  tempUsername?: string | null,
  subSubs?: Array< string | null > | null,
  firstName?: string | null,
  lastName?: string | null,
  businessName?: string | null,
  phone?: string | null,
  email?: string | null,
  verified?: boolean | null,
};

export type DeleteAuthSettingsInput = {
  id: string,
};

export type CreateInfoQBAuthInput = {
  id?: string | null,
  infoName?: string | null,
  infoContent?: string | null,
};

export type ModelInfoQBAuthConditionInput = {
  infoName?: ModelStringInput | null,
  infoContent?: ModelStringInput | null,
  and?: Array< ModelInfoQBAuthConditionInput | null > | null,
  or?: Array< ModelInfoQBAuthConditionInput | null > | null,
  not?: ModelInfoQBAuthConditionInput | null,
};

export type InfoQBAuth = {
  __typename: "InfoQBAuth",
  id: string,
  infoName?: string | null,
  infoContent?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInfoQBAuthInput = {
  id: string,
  infoName?: string | null,
  infoContent?: string | null,
};

export type DeleteInfoQBAuthInput = {
  id: string,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  nickName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  zoneName?: ModelStringInput | null,
  addr1?: ModelStringInput | null,
  addr2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  toBePrinted?: ModelBooleanInput | null,
  toBeEmailed?: ModelBooleanInput | null,
  printDuplicate?: ModelBooleanInput | null,
  terms?: ModelStringInput | null,
  invoicing?: ModelStringInput | null,
  prodsNotAllowed?: ModelStringInput | null,
  latestFirstDeliv?: ModelFloatInput | null,
  latestFinalDeliv?: ModelFloatInput | null,
  webpageURL?: ModelStringInput | null,
  picURL?: ModelStringInput | null,
  gMap?: ModelStringInput | null,
  specialInstructions?: ModelStringInput | null,
  delivOrder?: ModelIntInput | null,
  customProd?: ModelStringInput | null,
  templateProd?: ModelStringInput | null,
  userSubs?: ModelStringInput | null,
  qbID?: ModelStringInput | null,
  currentBalance?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items?:  Array<Customer | null > | null,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  prodName?: ModelStringInput | null,
  nickName?: ModelStringInput | null,
  packGroup?: ModelStringInput | null,
  packSize?: ModelIntInput | null,
  doughType?: ModelStringInput | null,
  freezerThaw?: ModelBooleanInput | null,
  eodCount?: ModelBooleanInput | null,
  packGroupOrder?: ModelIntInput | null,
  readyTime?: ModelFloatInput | null,
  bakedWhere?: ModelStringInput | null,
  wholePrice?: ModelFloatInput | null,
  retailPrice?: ModelFloatInput | null,
  isWhole?: ModelBooleanInput | null,
  depends?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  descrip?: ModelStringInput | null,
  picURL?: ModelStringInput | null,
  squareID?: ModelStringInput | null,
  currentStock?: ModelIntInput | null,
  whoCountedLast?: ModelStringInput | null,
  forBake?: ModelStringInput | null,
  bakeExtra?: ModelIntInput | null,
  batchSize?: ModelIntInput | null,
  preshaped?: ModelIntInput | null,
  prepreshaped?: ModelIntInput | null,
  updatePreDate?: ModelStringInput | null,
  updateFreezerDate?: ModelStringInput | null,
  backporchbakerypre?: ModelIntInput | null,
  backporchbakery?: ModelIntInput | null,
  bpbextrapre?: ModelIntInput | null,
  bpbextra?: ModelIntInput | null,
  bpbssetoutpre?: ModelIntInput | null,
  bpbssetout?: ModelIntInput | null,
  defaultInclude?: ModelBooleanInput | null,
  leadTime?: ModelIntInput | null,
  qbID?: ModelStringInput | null,
  freezerCount?: ModelIntInput | null,
  freezerClosing?: ModelIntInput | null,
  sheetMake?: ModelIntInput | null,
  freezerNorth?: ModelIntInput | null,
  freezerNorthClosing?: ModelIntInput | null,
  freezerNorthFlag?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  prodName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  PONote?: ModelStringInput | null,
  route?: ModelStringInput | null,
  SO?: ModelIntInput | null,
  isWhole?: ModelBooleanInput | null,
  delivDate?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  rate?: ModelFloatInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
};

export type ModelStandingFilterInput = {
  id?: ModelIDInput | null,
  timeStamp?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  isStand?: ModelBooleanInput | null,
  Sun?: ModelIntInput | null,
  Mon?: ModelIntInput | null,
  Tue?: ModelIntInput | null,
  Wed?: ModelIntInput | null,
  Thu?: ModelIntInput | null,
  Fri?: ModelIntInput | null,
  Sat?: ModelIntInput | null,
  and?: Array< ModelStandingFilterInput | null > | null,
  or?: Array< ModelStandingFilterInput | null > | null,
  not?: ModelStandingFilterInput | null,
};

export type ModelStandingConnection = {
  __typename: "ModelStandingConnection",
  items?:  Array<Standing | null > | null,
  nextToken?: string | null,
};

export type ModelHoldingFilterInput = {
  id?: ModelIDInput | null,
  timeStamp?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  custName?: ModelStringInput | null,
  Sun?: ModelIntInput | null,
  Mon?: ModelIntInput | null,
  Tue?: ModelIntInput | null,
  Wed?: ModelIntInput | null,
  Thu?: ModelIntInput | null,
  Fri?: ModelIntInput | null,
  Sat?: ModelIntInput | null,
  Test?: ModelStringInput | null,
  and?: Array< ModelHoldingFilterInput | null > | null,
  or?: Array< ModelHoldingFilterInput | null > | null,
  not?: ModelHoldingFilterInput | null,
};

export type ModelHoldingConnection = {
  __typename: "ModelHoldingConnection",
  items?:  Array<Holding | null > | null,
  nextToken?: string | null,
};

export type ModelRouteFilterInput = {
  id?: ModelIDInput | null,
  routeName?: ModelStringInput | null,
  routeStart?: ModelFloatInput | null,
  routeTime?: ModelFloatInput | null,
  RouteDepart?: ModelStringInput | null,
  RouteArrive?: ModelStringInput | null,
  RouteServe?: ModelStringInput | null,
  RouteSched?: ModelStringInput | null,
  printOrder?: ModelIntInput | null,
  driver?: ModelStringInput | null,
  and?: Array< ModelRouteFilterInput | null > | null,
  or?: Array< ModelRouteFilterInput | null > | null,
  not?: ModelRouteFilterInput | null,
};

export type ModelRouteConnection = {
  __typename: "ModelRouteConnection",
  items?:  Array<Route | null > | null,
  nextToken?: string | null,
};

export type ModelZoneFilterInput = {
  id?: ModelIDInput | null,
  zoneNum?: ModelIntInput | null,
  zoneName?: ModelStringInput | null,
  zoneFee?: ModelIntInput | null,
  and?: Array< ModelZoneFilterInput | null > | null,
  or?: Array< ModelZoneFilterInput | null > | null,
  not?: ModelZoneFilterInput | null,
};

export type ModelZoneConnection = {
  __typename: "ModelZoneConnection",
  items?:  Array<Zone | null > | null,
  nextToken?: string | null,
};

export type ModelAltPricingFilterInput = {
  id?: ModelIDInput | null,
  custName?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  wholePrice?: ModelFloatInput | null,
  and?: Array< ModelAltPricingFilterInput | null > | null,
  or?: Array< ModelAltPricingFilterInput | null > | null,
  not?: ModelAltPricingFilterInput | null,
};

export type ModelAltPricingConnection = {
  __typename: "ModelAltPricingConnection",
  items?:  Array<AltPricing | null > | null,
  nextToken?: string | null,
};

export type ModelClosureFilterInput = {
  id?: ModelIDInput | null,
  custName?: ModelStringInput | null,
  firstDate?: ModelStringInput | null,
  lastDate?: ModelStringInput | null,
  and?: Array< ModelClosureFilterInput | null > | null,
  or?: Array< ModelClosureFilterInput | null > | null,
  not?: ModelClosureFilterInput | null,
};

export type ModelClosureConnection = {
  __typename: "ModelClosureConnection",
  items?:  Array<Closure | null > | null,
  nextToken?: string | null,
};

export type ModelHeldforWeeklyInvoicingFilterInput = {
  id?: ModelIDInput | null,
  custName?: ModelStringInput | null,
  delivDate?: ModelStringInput | null,
  prodName?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  rate?: ModelFloatInput | null,
  and?: Array< ModelHeldforWeeklyInvoicingFilterInput | null > | null,
  or?: Array< ModelHeldforWeeklyInvoicingFilterInput | null > | null,
  not?: ModelHeldforWeeklyInvoicingFilterInput | null,
};

export type ModelHeldforWeeklyInvoicingConnection = {
  __typename: "ModelHeldforWeeklyInvoicingConnection",
  items?:  Array<HeldforWeeklyInvoicing | null > | null,
  nextToken?: string | null,
};

export type ModelDoughFilterInput = {
  id?: ModelIDInput | null,
  doughName?: ModelStringInput | null,
  hydration?: ModelFloatInput | null,
  process?: ModelStringInput | null,
  batchSize?: ModelFloatInput | null,
  mixedWhere?: ModelStringInput | null,
  components?: ModelStringInput | null,
  oldDough?: ModelFloatInput | null,
  isBakeReady?: ModelBooleanInput | null,
  buffer?: ModelFloatInput | null,
  bucketSets?: ModelIntInput | null,
  preBucketSets?: ModelIntInput | null,
  updatePreBucket?: ModelStringInput | null,
  saltInDry?: ModelBooleanInput | null,
  and?: Array< ModelDoughFilterInput | null > | null,
  or?: Array< ModelDoughFilterInput | null > | null,
  not?: ModelDoughFilterInput | null,
};

export type ModelDoughConnection = {
  __typename: "ModelDoughConnection",
  items?:  Array<Dough | null > | null,
  nextToken?: string | null,
};

export type ModelDoughComponentFilterInput = {
  id?: ModelIDInput | null,
  dough?: ModelStringInput | null,
  componentType?: ModelStringInput | null,
  componentName?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelDoughComponentFilterInput | null > | null,
  or?: Array< ModelDoughComponentFilterInput | null > | null,
  not?: ModelDoughComponentFilterInput | null,
};

export type ModelDoughComponentConnection = {
  __typename: "ModelDoughComponentConnection",
  items?:  Array<DoughComponent | null > | null,
  nextToken?: string | null,
};

export type ModelNotesFilterInput = {
  id?: ModelIDInput | null,
  note?: ModelStringInput | null,
  forWhom?: ModelStringInput | null,
  byWhom?: ModelStringInput | null,
  when?: ModelStringInput | null,
  and?: Array< ModelNotesFilterInput | null > | null,
  or?: Array< ModelNotesFilterInput | null > | null,
  not?: ModelNotesFilterInput | null,
};

export type ModelNotesConnection = {
  __typename: "ModelNotesConnection",
  items?:  Array<Notes | null > | null,
  nextToken?: string | null,
};

export type ModelAuthSettingsFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelStringInput | null,
  authType?: ModelStringInput | null,
  tempPassword?: ModelStringInput | null,
  tempUsername?: ModelStringInput | null,
  subSubs?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  businessName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelAuthSettingsFilterInput | null > | null,
  or?: Array< ModelAuthSettingsFilterInput | null > | null,
  not?: ModelAuthSettingsFilterInput | null,
};

export type ModelAuthSettingsConnection = {
  __typename: "ModelAuthSettingsConnection",
  items?:  Array<AuthSettings | null > | null,
  nextToken?: string | null,
};

export type ModelInfoQBAuthFilterInput = {
  id?: ModelIDInput | null,
  infoName?: ModelStringInput | null,
  infoContent?: ModelStringInput | null,
  and?: Array< ModelInfoQBAuthFilterInput | null > | null,
  or?: Array< ModelInfoQBAuthFilterInput | null > | null,
  not?: ModelInfoQBAuthFilterInput | null,
};

export type ModelInfoQBAuthConnection = {
  __typename: "ModelInfoQBAuthConnection",
  items?:  Array<InfoQBAuth | null > | null,
  nextToken?: string | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    nickName: string,
    custName: string,
    zoneName?: string | null,
    addr1?: string | null,
    addr2?: string | null,
    city?: string | null,
    zip?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phone?: string | null,
    toBePrinted?: boolean | null,
    toBeEmailed?: boolean | null,
    printDuplicate?: boolean | null,
    terms?: string | null,
    invoicing?: string | null,
    prodsNotAllowed?: Array< string | null > | null,
    latestFirstDeliv?: number | null,
    latestFinalDeliv?: number | null,
    webpageURL?: string | null,
    picURL?: string | null,
    gMap?: string | null,
    specialInstructions?: string | null,
    delivOrder?: number | null,
    customProd?: Array< string | null > | null,
    templateProd?: Array< string | null > | null,
    userSubs?: Array< string | null > | null,
    qbID?: string | null,
    currentBalance?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    nickName: string,
    custName: string,
    zoneName?: string | null,
    addr1?: string | null,
    addr2?: string | null,
    city?: string | null,
    zip?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phone?: string | null,
    toBePrinted?: boolean | null,
    toBeEmailed?: boolean | null,
    printDuplicate?: boolean | null,
    terms?: string | null,
    invoicing?: string | null,
    prodsNotAllowed?: Array< string | null > | null,
    latestFirstDeliv?: number | null,
    latestFinalDeliv?: number | null,
    webpageURL?: string | null,
    picURL?: string | null,
    gMap?: string | null,
    specialInstructions?: string | null,
    delivOrder?: number | null,
    customProd?: Array< string | null > | null,
    templateProd?: Array< string | null > | null,
    userSubs?: Array< string | null > | null,
    qbID?: string | null,
    currentBalance?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    nickName: string,
    custName: string,
    zoneName?: string | null,
    addr1?: string | null,
    addr2?: string | null,
    city?: string | null,
    zip?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phone?: string | null,
    toBePrinted?: boolean | null,
    toBeEmailed?: boolean | null,
    printDuplicate?: boolean | null,
    terms?: string | null,
    invoicing?: string | null,
    prodsNotAllowed?: Array< string | null > | null,
    latestFirstDeliv?: number | null,
    latestFinalDeliv?: number | null,
    webpageURL?: string | null,
    picURL?: string | null,
    gMap?: string | null,
    specialInstructions?: string | null,
    delivOrder?: number | null,
    customProd?: Array< string | null > | null,
    templateProd?: Array< string | null > | null,
    userSubs?: Array< string | null > | null,
    qbID?: string | null,
    currentBalance?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    prodName: string,
    nickName: string,
    packGroup?: string | null,
    packSize?: number | null,
    doughType?: string | null,
    freezerThaw?: boolean | null,
    eodCount?: boolean | null,
    packGroupOrder?: number | null,
    readyTime?: number | null,
    bakedWhere?: Array< string | null > | null,
    wholePrice?: number | null,
    retailPrice?: number | null,
    isWhole?: boolean | null,
    depends?: string | null,
    weight?: number | null,
    descrip?: string | null,
    picURL?: string | null,
    squareID?: string | null,
    currentStock?: number | null,
    whoCountedLast?: string | null,
    forBake?: string | null,
    bakeExtra?: number | null,
    batchSize?: number | null,
    preshaped?: number | null,
    prepreshaped?: number | null,
    updatePreDate?: string | null,
    updateFreezerDate?: string | null,
    backporchbakerypre?: number | null,
    backporchbakery?: number | null,
    bpbextrapre?: number | null,
    bpbextra?: number | null,
    bpbssetoutpre?: number | null,
    bpbssetout?: number | null,
    defaultInclude?: boolean | null,
    leadTime?: number | null,
    qbID?: string | null,
    freezerCount?: number | null,
    freezerClosing?: number | null,
    sheetMake?: number | null,
    freezerNorth?: number | null,
    freezerNorthClosing?: number | null,
    freezerNorthFlag?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    prodName: string,
    nickName: string,
    packGroup?: string | null,
    packSize?: number | null,
    doughType?: string | null,
    freezerThaw?: boolean | null,
    eodCount?: boolean | null,
    packGroupOrder?: number | null,
    readyTime?: number | null,
    bakedWhere?: Array< string | null > | null,
    wholePrice?: number | null,
    retailPrice?: number | null,
    isWhole?: boolean | null,
    depends?: string | null,
    weight?: number | null,
    descrip?: string | null,
    picURL?: string | null,
    squareID?: string | null,
    currentStock?: number | null,
    whoCountedLast?: string | null,
    forBake?: string | null,
    bakeExtra?: number | null,
    batchSize?: number | null,
    preshaped?: number | null,
    prepreshaped?: number | null,
    updatePreDate?: string | null,
    updateFreezerDate?: string | null,
    backporchbakerypre?: number | null,
    backporchbakery?: number | null,
    bpbextrapre?: number | null,
    bpbextra?: number | null,
    bpbssetoutpre?: number | null,
    bpbssetout?: number | null,
    defaultInclude?: boolean | null,
    leadTime?: number | null,
    qbID?: string | null,
    freezerCount?: number | null,
    freezerClosing?: number | null,
    sheetMake?: number | null,
    freezerNorth?: number | null,
    freezerNorthClosing?: number | null,
    freezerNorthFlag?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    prodName: string,
    nickName: string,
    packGroup?: string | null,
    packSize?: number | null,
    doughType?: string | null,
    freezerThaw?: boolean | null,
    eodCount?: boolean | null,
    packGroupOrder?: number | null,
    readyTime?: number | null,
    bakedWhere?: Array< string | null > | null,
    wholePrice?: number | null,
    retailPrice?: number | null,
    isWhole?: boolean | null,
    depends?: string | null,
    weight?: number | null,
    descrip?: string | null,
    picURL?: string | null,
    squareID?: string | null,
    currentStock?: number | null,
    whoCountedLast?: string | null,
    forBake?: string | null,
    bakeExtra?: number | null,
    batchSize?: number | null,
    preshaped?: number | null,
    prepreshaped?: number | null,
    updatePreDate?: string | null,
    updateFreezerDate?: string | null,
    backporchbakerypre?: number | null,
    backporchbakery?: number | null,
    bpbextrapre?: number | null,
    bpbextra?: number | null,
    bpbssetoutpre?: number | null,
    bpbssetout?: number | null,
    defaultInclude?: boolean | null,
    leadTime?: number | null,
    qbID?: string | null,
    freezerCount?: number | null,
    freezerClosing?: number | null,
    sheetMake?: number | null,
    freezerNorth?: number | null,
    freezerNorthClosing?: number | null,
    freezerNorthFlag?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    qty?: number | null,
    prodName: string,
    custName?: string | null,
    PONote?: string | null,
    route?: string | null,
    SO?: number | null,
    isWhole?: boolean | null,
    delivDate?: string | null,
    timeStamp?: string | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    qty?: number | null,
    prodName: string,
    custName?: string | null,
    PONote?: string | null,
    route?: string | null,
    SO?: number | null,
    isWhole?: boolean | null,
    delivDate?: string | null,
    timeStamp?: string | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    qty?: number | null,
    prodName: string,
    custName?: string | null,
    PONote?: string | null,
    route?: string | null,
    SO?: number | null,
    isWhole?: boolean | null,
    delivDate?: string | null,
    timeStamp?: string | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStandingMutationVariables = {
  input: CreateStandingInput,
  condition?: ModelStandingConditionInput | null,
};

export type CreateStandingMutation = {
  createStanding?:  {
    __typename: "Standing",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    isStand?: boolean | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStandingMutationVariables = {
  input: UpdateStandingInput,
  condition?: ModelStandingConditionInput | null,
};

export type UpdateStandingMutation = {
  updateStanding?:  {
    __typename: "Standing",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    isStand?: boolean | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStandingMutationVariables = {
  input: DeleteStandingInput,
  condition?: ModelStandingConditionInput | null,
};

export type DeleteStandingMutation = {
  deleteStanding?:  {
    __typename: "Standing",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    isStand?: boolean | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHoldingMutationVariables = {
  input: CreateHoldingInput,
  condition?: ModelHoldingConditionInput | null,
};

export type CreateHoldingMutation = {
  createHolding?:  {
    __typename: "Holding",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    Test?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHoldingMutationVariables = {
  input: UpdateHoldingInput,
  condition?: ModelHoldingConditionInput | null,
};

export type UpdateHoldingMutation = {
  updateHolding?:  {
    __typename: "Holding",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    Test?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHoldingMutationVariables = {
  input: DeleteHoldingInput,
  condition?: ModelHoldingConditionInput | null,
};

export type DeleteHoldingMutation = {
  deleteHolding?:  {
    __typename: "Holding",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    Test?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRouteMutationVariables = {
  input: CreateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type CreateRouteMutation = {
  createRoute?:  {
    __typename: "Route",
    id: string,
    routeName?: string | null,
    routeStart?: number | null,
    routeTime?: number | null,
    RouteDepart?: string | null,
    RouteArrive?: string | null,
    RouteServe?: Array< string | null > | null,
    RouteSched?: Array< string | null > | null,
    printOrder?: number | null,
    driver?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRouteMutationVariables = {
  input: UpdateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type UpdateRouteMutation = {
  updateRoute?:  {
    __typename: "Route",
    id: string,
    routeName?: string | null,
    routeStart?: number | null,
    routeTime?: number | null,
    RouteDepart?: string | null,
    RouteArrive?: string | null,
    RouteServe?: Array< string | null > | null,
    RouteSched?: Array< string | null > | null,
    printOrder?: number | null,
    driver?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRouteMutationVariables = {
  input: DeleteRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type DeleteRouteMutation = {
  deleteRoute?:  {
    __typename: "Route",
    id: string,
    routeName?: string | null,
    routeStart?: number | null,
    routeTime?: number | null,
    RouteDepart?: string | null,
    RouteArrive?: string | null,
    RouteServe?: Array< string | null > | null,
    RouteSched?: Array< string | null > | null,
    printOrder?: number | null,
    driver?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateZoneMutationVariables = {
  input: CreateZoneInput,
  condition?: ModelZoneConditionInput | null,
};

export type CreateZoneMutation = {
  createZone?:  {
    __typename: "Zone",
    id: string,
    zoneNum?: number | null,
    zoneName?: string | null,
    zoneFee?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateZoneMutationVariables = {
  input: UpdateZoneInput,
  condition?: ModelZoneConditionInput | null,
};

export type UpdateZoneMutation = {
  updateZone?:  {
    __typename: "Zone",
    id: string,
    zoneNum?: number | null,
    zoneName?: string | null,
    zoneFee?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteZoneMutationVariables = {
  input: DeleteZoneInput,
  condition?: ModelZoneConditionInput | null,
};

export type DeleteZoneMutation = {
  deleteZone?:  {
    __typename: "Zone",
    id: string,
    zoneNum?: number | null,
    zoneName?: string | null,
    zoneFee?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAltPricingMutationVariables = {
  input: CreateAltPricingInput,
  condition?: ModelAltPricingConditionInput | null,
};

export type CreateAltPricingMutation = {
  createAltPricing?:  {
    __typename: "AltPricing",
    id: string,
    custName?: string | null,
    prodName?: string | null,
    wholePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAltPricingMutationVariables = {
  input: UpdateAltPricingInput,
  condition?: ModelAltPricingConditionInput | null,
};

export type UpdateAltPricingMutation = {
  updateAltPricing?:  {
    __typename: "AltPricing",
    id: string,
    custName?: string | null,
    prodName?: string | null,
    wholePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAltPricingMutationVariables = {
  input: DeleteAltPricingInput,
  condition?: ModelAltPricingConditionInput | null,
};

export type DeleteAltPricingMutation = {
  deleteAltPricing?:  {
    __typename: "AltPricing",
    id: string,
    custName?: string | null,
    prodName?: string | null,
    wholePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClosureMutationVariables = {
  input: CreateClosureInput,
  condition?: ModelClosureConditionInput | null,
};

export type CreateClosureMutation = {
  createClosure?:  {
    __typename: "Closure",
    id: string,
    custName?: string | null,
    firstDate?: string | null,
    lastDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClosureMutationVariables = {
  input: UpdateClosureInput,
  condition?: ModelClosureConditionInput | null,
};

export type UpdateClosureMutation = {
  updateClosure?:  {
    __typename: "Closure",
    id: string,
    custName?: string | null,
    firstDate?: string | null,
    lastDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClosureMutationVariables = {
  input: DeleteClosureInput,
  condition?: ModelClosureConditionInput | null,
};

export type DeleteClosureMutation = {
  deleteClosure?:  {
    __typename: "Closure",
    id: string,
    custName?: string | null,
    firstDate?: string | null,
    lastDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHeldforWeeklyInvoicingMutationVariables = {
  input: CreateHeldforWeeklyInvoicingInput,
  condition?: ModelHeldforWeeklyInvoicingConditionInput | null,
};

export type CreateHeldforWeeklyInvoicingMutation = {
  createHeldforWeeklyInvoicing?:  {
    __typename: "HeldforWeeklyInvoicing",
    id: string,
    custName: string,
    delivDate: string,
    prodName: string,
    qty?: number | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHeldforWeeklyInvoicingMutationVariables = {
  input: UpdateHeldforWeeklyInvoicingInput,
  condition?: ModelHeldforWeeklyInvoicingConditionInput | null,
};

export type UpdateHeldforWeeklyInvoicingMutation = {
  updateHeldforWeeklyInvoicing?:  {
    __typename: "HeldforWeeklyInvoicing",
    id: string,
    custName: string,
    delivDate: string,
    prodName: string,
    qty?: number | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHeldforWeeklyInvoicingMutationVariables = {
  input: DeleteHeldforWeeklyInvoicingInput,
  condition?: ModelHeldforWeeklyInvoicingConditionInput | null,
};

export type DeleteHeldforWeeklyInvoicingMutation = {
  deleteHeldforWeeklyInvoicing?:  {
    __typename: "HeldforWeeklyInvoicing",
    id: string,
    custName: string,
    delivDate: string,
    prodName: string,
    qty?: number | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDoughMutationVariables = {
  input: CreateDoughInput,
  condition?: ModelDoughConditionInput | null,
};

export type CreateDoughMutation = {
  createDough?:  {
    __typename: "Dough",
    id: string,
    doughName?: string | null,
    hydration?: number | null,
    process?: Array< string | null > | null,
    batchSize?: number | null,
    mixedWhere?: string | null,
    components?: Array< string | null > | null,
    oldDough?: number | null,
    isBakeReady?: boolean | null,
    buffer?: number | null,
    bucketSets?: number | null,
    preBucketSets?: number | null,
    updatePreBucket?: string | null,
    saltInDry?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDoughMutationVariables = {
  input: UpdateDoughInput,
  condition?: ModelDoughConditionInput | null,
};

export type UpdateDoughMutation = {
  updateDough?:  {
    __typename: "Dough",
    id: string,
    doughName?: string | null,
    hydration?: number | null,
    process?: Array< string | null > | null,
    batchSize?: number | null,
    mixedWhere?: string | null,
    components?: Array< string | null > | null,
    oldDough?: number | null,
    isBakeReady?: boolean | null,
    buffer?: number | null,
    bucketSets?: number | null,
    preBucketSets?: number | null,
    updatePreBucket?: string | null,
    saltInDry?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDoughMutationVariables = {
  input: DeleteDoughInput,
  condition?: ModelDoughConditionInput | null,
};

export type DeleteDoughMutation = {
  deleteDough?:  {
    __typename: "Dough",
    id: string,
    doughName?: string | null,
    hydration?: number | null,
    process?: Array< string | null > | null,
    batchSize?: number | null,
    mixedWhere?: string | null,
    components?: Array< string | null > | null,
    oldDough?: number | null,
    isBakeReady?: boolean | null,
    buffer?: number | null,
    bucketSets?: number | null,
    preBucketSets?: number | null,
    updatePreBucket?: string | null,
    saltInDry?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDoughComponentMutationVariables = {
  input: CreateDoughComponentInput,
  condition?: ModelDoughComponentConditionInput | null,
};

export type CreateDoughComponentMutation = {
  createDoughComponent?:  {
    __typename: "DoughComponent",
    id: string,
    dough?: string | null,
    componentType?: string | null,
    componentName?: string | null,
    amount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDoughComponentMutationVariables = {
  input: UpdateDoughComponentInput,
  condition?: ModelDoughComponentConditionInput | null,
};

export type UpdateDoughComponentMutation = {
  updateDoughComponent?:  {
    __typename: "DoughComponent",
    id: string,
    dough?: string | null,
    componentType?: string | null,
    componentName?: string | null,
    amount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDoughComponentMutationVariables = {
  input: DeleteDoughComponentInput,
  condition?: ModelDoughComponentConditionInput | null,
};

export type DeleteDoughComponentMutation = {
  deleteDoughComponent?:  {
    __typename: "DoughComponent",
    id: string,
    dough?: string | null,
    componentType?: string | null,
    componentName?: string | null,
    amount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotesMutationVariables = {
  input: CreateNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type CreateNotesMutation = {
  createNotes?:  {
    __typename: "Notes",
    id: string,
    note?: string | null,
    forWhom?: string | null,
    byWhom?: string | null,
    when?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotesMutationVariables = {
  input: UpdateNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type UpdateNotesMutation = {
  updateNotes?:  {
    __typename: "Notes",
    id: string,
    note?: string | null,
    forWhom?: string | null,
    byWhom?: string | null,
    when?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotesMutationVariables = {
  input: DeleteNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type DeleteNotesMutation = {
  deleteNotes?:  {
    __typename: "Notes",
    id: string,
    note?: string | null,
    forWhom?: string | null,
    byWhom?: string | null,
    when?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthSettingsMutationVariables = {
  input: CreateAuthSettingsInput,
  condition?: ModelAuthSettingsConditionInput | null,
};

export type CreateAuthSettingsMutation = {
  createAuthSettings?:  {
    __typename: "AuthSettings",
    id: string,
    sub?: string | null,
    authType?: string | null,
    tempPassword?: string | null,
    tempUsername?: string | null,
    subSubs?: Array< string | null > | null,
    firstName?: string | null,
    lastName?: string | null,
    businessName?: string | null,
    phone?: string | null,
    email?: string | null,
    verified?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthSettingsMutationVariables = {
  input: UpdateAuthSettingsInput,
  condition?: ModelAuthSettingsConditionInput | null,
};

export type UpdateAuthSettingsMutation = {
  updateAuthSettings?:  {
    __typename: "AuthSettings",
    id: string,
    sub?: string | null,
    authType?: string | null,
    tempPassword?: string | null,
    tempUsername?: string | null,
    subSubs?: Array< string | null > | null,
    firstName?: string | null,
    lastName?: string | null,
    businessName?: string | null,
    phone?: string | null,
    email?: string | null,
    verified?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthSettingsMutationVariables = {
  input: DeleteAuthSettingsInput,
  condition?: ModelAuthSettingsConditionInput | null,
};

export type DeleteAuthSettingsMutation = {
  deleteAuthSettings?:  {
    __typename: "AuthSettings",
    id: string,
    sub?: string | null,
    authType?: string | null,
    tempPassword?: string | null,
    tempUsername?: string | null,
    subSubs?: Array< string | null > | null,
    firstName?: string | null,
    lastName?: string | null,
    businessName?: string | null,
    phone?: string | null,
    email?: string | null,
    verified?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInfoQBAuthMutationVariables = {
  input: CreateInfoQBAuthInput,
  condition?: ModelInfoQBAuthConditionInput | null,
};

export type CreateInfoQBAuthMutation = {
  createInfoQBAuth?:  {
    __typename: "InfoQBAuth",
    id: string,
    infoName?: string | null,
    infoContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInfoQBAuthMutationVariables = {
  input: UpdateInfoQBAuthInput,
  condition?: ModelInfoQBAuthConditionInput | null,
};

export type UpdateInfoQBAuthMutation = {
  updateInfoQBAuth?:  {
    __typename: "InfoQBAuth",
    id: string,
    infoName?: string | null,
    infoContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInfoQBAuthMutationVariables = {
  input: DeleteInfoQBAuthInput,
  condition?: ModelInfoQBAuthConditionInput | null,
};

export type DeleteInfoQBAuthMutation = {
  deleteInfoQBAuth?:  {
    __typename: "InfoQBAuth",
    id: string,
    infoName?: string | null,
    infoContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    nickName: string,
    custName: string,
    zoneName?: string | null,
    addr1?: string | null,
    addr2?: string | null,
    city?: string | null,
    zip?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phone?: string | null,
    toBePrinted?: boolean | null,
    toBeEmailed?: boolean | null,
    printDuplicate?: boolean | null,
    terms?: string | null,
    invoicing?: string | null,
    prodsNotAllowed?: Array< string | null > | null,
    latestFirstDeliv?: number | null,
    latestFinalDeliv?: number | null,
    webpageURL?: string | null,
    picURL?: string | null,
    gMap?: string | null,
    specialInstructions?: string | null,
    delivOrder?: number | null,
    customProd?: Array< string | null > | null,
    templateProd?: Array< string | null > | null,
    userSubs?: Array< string | null > | null,
    qbID?: string | null,
    currentBalance?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items?:  Array< {
      __typename: "Customer",
      id: string,
      nickName: string,
      custName: string,
      zoneName?: string | null,
      addr1?: string | null,
      addr2?: string | null,
      city?: string | null,
      zip?: string | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phone?: string | null,
      toBePrinted?: boolean | null,
      toBeEmailed?: boolean | null,
      printDuplicate?: boolean | null,
      terms?: string | null,
      invoicing?: string | null,
      prodsNotAllowed?: Array< string | null > | null,
      latestFirstDeliv?: number | null,
      latestFinalDeliv?: number | null,
      webpageURL?: string | null,
      picURL?: string | null,
      gMap?: string | null,
      specialInstructions?: string | null,
      delivOrder?: number | null,
      customProd?: Array< string | null > | null,
      templateProd?: Array< string | null > | null,
      userSubs?: Array< string | null > | null,
      qbID?: string | null,
      currentBalance?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    prodName: string,
    nickName: string,
    packGroup?: string | null,
    packSize?: number | null,
    doughType?: string | null,
    freezerThaw?: boolean | null,
    eodCount?: boolean | null,
    packGroupOrder?: number | null,
    readyTime?: number | null,
    bakedWhere?: Array< string | null > | null,
    wholePrice?: number | null,
    retailPrice?: number | null,
    isWhole?: boolean | null,
    depends?: string | null,
    weight?: number | null,
    descrip?: string | null,
    picURL?: string | null,
    squareID?: string | null,
    currentStock?: number | null,
    whoCountedLast?: string | null,
    forBake?: string | null,
    bakeExtra?: number | null,
    batchSize?: number | null,
    preshaped?: number | null,
    prepreshaped?: number | null,
    updatePreDate?: string | null,
    updateFreezerDate?: string | null,
    backporchbakerypre?: number | null,
    backporchbakery?: number | null,
    bpbextrapre?: number | null,
    bpbextra?: number | null,
    bpbssetoutpre?: number | null,
    bpbssetout?: number | null,
    defaultInclude?: boolean | null,
    leadTime?: number | null,
    qbID?: string | null,
    freezerCount?: number | null,
    freezerClosing?: number | null,
    sheetMake?: number | null,
    freezerNorth?: number | null,
    freezerNorthClosing?: number | null,
    freezerNorthFlag?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      prodName: string,
      nickName: string,
      packGroup?: string | null,
      packSize?: number | null,
      doughType?: string | null,
      freezerThaw?: boolean | null,
      eodCount?: boolean | null,
      packGroupOrder?: number | null,
      readyTime?: number | null,
      bakedWhere?: Array< string | null > | null,
      wholePrice?: number | null,
      retailPrice?: number | null,
      isWhole?: boolean | null,
      depends?: string | null,
      weight?: number | null,
      descrip?: string | null,
      picURL?: string | null,
      squareID?: string | null,
      currentStock?: number | null,
      whoCountedLast?: string | null,
      forBake?: string | null,
      bakeExtra?: number | null,
      batchSize?: number | null,
      preshaped?: number | null,
      prepreshaped?: number | null,
      updatePreDate?: string | null,
      updateFreezerDate?: string | null,
      backporchbakerypre?: number | null,
      backporchbakery?: number | null,
      bpbextrapre?: number | null,
      bpbextra?: number | null,
      bpbssetoutpre?: number | null,
      bpbssetout?: number | null,
      defaultInclude?: boolean | null,
      leadTime?: number | null,
      qbID?: string | null,
      freezerCount?: number | null,
      freezerClosing?: number | null,
      sheetMake?: number | null,
      freezerNorth?: number | null,
      freezerNorthClosing?: number | null,
      freezerNorthFlag?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    qty?: number | null,
    prodName: string,
    custName?: string | null,
    PONote?: string | null,
    route?: string | null,
    SO?: number | null,
    isWhole?: boolean | null,
    delivDate?: string | null,
    timeStamp?: string | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      qty?: number | null,
      prodName: string,
      custName?: string | null,
      PONote?: string | null,
      route?: string | null,
      SO?: number | null,
      isWhole?: boolean | null,
      delivDate?: string | null,
      timeStamp?: string | null,
      rate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetStandingQueryVariables = {
  id: string,
};

export type GetStandingQuery = {
  getStanding?:  {
    __typename: "Standing",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    isStand?: boolean | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStandingsQueryVariables = {
  filter?: ModelStandingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStandingsQuery = {
  listStandings?:  {
    __typename: "ModelStandingConnection",
    items?:  Array< {
      __typename: "Standing",
      id: string,
      timeStamp?: string | null,
      prodName?: string | null,
      custName?: string | null,
      isStand?: boolean | null,
      Sun?: number | null,
      Mon?: number | null,
      Tue?: number | null,
      Wed?: number | null,
      Thu?: number | null,
      Fri?: number | null,
      Sat?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHoldingQueryVariables = {
  id: string,
};

export type GetHoldingQuery = {
  getHolding?:  {
    __typename: "Holding",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    Test?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHoldingsQueryVariables = {
  filter?: ModelHoldingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHoldingsQuery = {
  listHoldings?:  {
    __typename: "ModelHoldingConnection",
    items?:  Array< {
      __typename: "Holding",
      id: string,
      timeStamp?: string | null,
      prodName?: string | null,
      custName?: string | null,
      Sun?: number | null,
      Mon?: number | null,
      Tue?: number | null,
      Wed?: number | null,
      Thu?: number | null,
      Fri?: number | null,
      Sat?: number | null,
      Test?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRouteQueryVariables = {
  id: string,
};

export type GetRouteQuery = {
  getRoute?:  {
    __typename: "Route",
    id: string,
    routeName?: string | null,
    routeStart?: number | null,
    routeTime?: number | null,
    RouteDepart?: string | null,
    RouteArrive?: string | null,
    RouteServe?: Array< string | null > | null,
    RouteSched?: Array< string | null > | null,
    printOrder?: number | null,
    driver?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutesQuery = {
  listRoutes?:  {
    __typename: "ModelRouteConnection",
    items?:  Array< {
      __typename: "Route",
      id: string,
      routeName?: string | null,
      routeStart?: number | null,
      routeTime?: number | null,
      RouteDepart?: string | null,
      RouteArrive?: string | null,
      RouteServe?: Array< string | null > | null,
      RouteSched?: Array< string | null > | null,
      printOrder?: number | null,
      driver?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetZoneQueryVariables = {
  id: string,
};

export type GetZoneQuery = {
  getZone?:  {
    __typename: "Zone",
    id: string,
    zoneNum?: number | null,
    zoneName?: string | null,
    zoneFee?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListZonesQueryVariables = {
  filter?: ModelZoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListZonesQuery = {
  listZones?:  {
    __typename: "ModelZoneConnection",
    items?:  Array< {
      __typename: "Zone",
      id: string,
      zoneNum?: number | null,
      zoneName?: string | null,
      zoneFee?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAltPricingQueryVariables = {
  id: string,
};

export type GetAltPricingQuery = {
  getAltPricing?:  {
    __typename: "AltPricing",
    id: string,
    custName?: string | null,
    prodName?: string | null,
    wholePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAltPricingsQueryVariables = {
  filter?: ModelAltPricingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAltPricingsQuery = {
  listAltPricings?:  {
    __typename: "ModelAltPricingConnection",
    items?:  Array< {
      __typename: "AltPricing",
      id: string,
      custName?: string | null,
      prodName?: string | null,
      wholePrice?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetClosureQueryVariables = {
  id: string,
};

export type GetClosureQuery = {
  getClosure?:  {
    __typename: "Closure",
    id: string,
    custName?: string | null,
    firstDate?: string | null,
    lastDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClosuresQueryVariables = {
  filter?: ModelClosureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClosuresQuery = {
  listClosures?:  {
    __typename: "ModelClosureConnection",
    items?:  Array< {
      __typename: "Closure",
      id: string,
      custName?: string | null,
      firstDate?: string | null,
      lastDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHeldforWeeklyInvoicingQueryVariables = {
  id: string,
};

export type GetHeldforWeeklyInvoicingQuery = {
  getHeldforWeeklyInvoicing?:  {
    __typename: "HeldforWeeklyInvoicing",
    id: string,
    custName: string,
    delivDate: string,
    prodName: string,
    qty?: number | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHeldforWeeklyInvoicingsQueryVariables = {
  filter?: ModelHeldforWeeklyInvoicingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHeldforWeeklyInvoicingsQuery = {
  listHeldforWeeklyInvoicings?:  {
    __typename: "ModelHeldforWeeklyInvoicingConnection",
    items?:  Array< {
      __typename: "HeldforWeeklyInvoicing",
      id: string,
      custName: string,
      delivDate: string,
      prodName: string,
      qty?: number | null,
      rate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDoughQueryVariables = {
  id: string,
};

export type GetDoughQuery = {
  getDough?:  {
    __typename: "Dough",
    id: string,
    doughName?: string | null,
    hydration?: number | null,
    process?: Array< string | null > | null,
    batchSize?: number | null,
    mixedWhere?: string | null,
    components?: Array< string | null > | null,
    oldDough?: number | null,
    isBakeReady?: boolean | null,
    buffer?: number | null,
    bucketSets?: number | null,
    preBucketSets?: number | null,
    updatePreBucket?: string | null,
    saltInDry?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDoughsQueryVariables = {
  filter?: ModelDoughFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDoughsQuery = {
  listDoughs?:  {
    __typename: "ModelDoughConnection",
    items?:  Array< {
      __typename: "Dough",
      id: string,
      doughName?: string | null,
      hydration?: number | null,
      process?: Array< string | null > | null,
      batchSize?: number | null,
      mixedWhere?: string | null,
      components?: Array< string | null > | null,
      oldDough?: number | null,
      isBakeReady?: boolean | null,
      buffer?: number | null,
      bucketSets?: number | null,
      preBucketSets?: number | null,
      updatePreBucket?: string | null,
      saltInDry?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDoughComponentQueryVariables = {
  id: string,
};

export type GetDoughComponentQuery = {
  getDoughComponent?:  {
    __typename: "DoughComponent",
    id: string,
    dough?: string | null,
    componentType?: string | null,
    componentName?: string | null,
    amount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDoughComponentsQueryVariables = {
  filter?: ModelDoughComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDoughComponentsQuery = {
  listDoughComponents?:  {
    __typename: "ModelDoughComponentConnection",
    items?:  Array< {
      __typename: "DoughComponent",
      id: string,
      dough?: string | null,
      componentType?: string | null,
      componentName?: string | null,
      amount?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNotesQueryVariables = {
  id: string,
};

export type GetNotesQuery = {
  getNotes?:  {
    __typename: "Notes",
    id: string,
    note?: string | null,
    forWhom?: string | null,
    byWhom?: string | null,
    when?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotessQueryVariables = {
  filter?: ModelNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotessQuery = {
  listNotess?:  {
    __typename: "ModelNotesConnection",
    items?:  Array< {
      __typename: "Notes",
      id: string,
      note?: string | null,
      forWhom?: string | null,
      byWhom?: string | null,
      when?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAuthSettingsQueryVariables = {
  id: string,
};

export type GetAuthSettingsQuery = {
  getAuthSettings?:  {
    __typename: "AuthSettings",
    id: string,
    sub?: string | null,
    authType?: string | null,
    tempPassword?: string | null,
    tempUsername?: string | null,
    subSubs?: Array< string | null > | null,
    firstName?: string | null,
    lastName?: string | null,
    businessName?: string | null,
    phone?: string | null,
    email?: string | null,
    verified?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthSettingssQueryVariables = {
  filter?: ModelAuthSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthSettingssQuery = {
  listAuthSettingss?:  {
    __typename: "ModelAuthSettingsConnection",
    items?:  Array< {
      __typename: "AuthSettings",
      id: string,
      sub?: string | null,
      authType?: string | null,
      tempPassword?: string | null,
      tempUsername?: string | null,
      subSubs?: Array< string | null > | null,
      firstName?: string | null,
      lastName?: string | null,
      businessName?: string | null,
      phone?: string | null,
      email?: string | null,
      verified?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetInfoQBAuthQueryVariables = {
  id: string,
};

export type GetInfoQBAuthQuery = {
  getInfoQBAuth?:  {
    __typename: "InfoQBAuth",
    id: string,
    infoName?: string | null,
    infoContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInfoQBAuthsQueryVariables = {
  filter?: ModelInfoQBAuthFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInfoQBAuthsQuery = {
  listInfoQBAuths?:  {
    __typename: "ModelInfoQBAuthConnection",
    items?:  Array< {
      __typename: "InfoQBAuth",
      id: string,
      infoName?: string | null,
      infoContent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    nickName: string,
    custName: string,
    zoneName?: string | null,
    addr1?: string | null,
    addr2?: string | null,
    city?: string | null,
    zip?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phone?: string | null,
    toBePrinted?: boolean | null,
    toBeEmailed?: boolean | null,
    printDuplicate?: boolean | null,
    terms?: string | null,
    invoicing?: string | null,
    prodsNotAllowed?: Array< string | null > | null,
    latestFirstDeliv?: number | null,
    latestFinalDeliv?: number | null,
    webpageURL?: string | null,
    picURL?: string | null,
    gMap?: string | null,
    specialInstructions?: string | null,
    delivOrder?: number | null,
    customProd?: Array< string | null > | null,
    templateProd?: Array< string | null > | null,
    userSubs?: Array< string | null > | null,
    qbID?: string | null,
    currentBalance?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    nickName: string,
    custName: string,
    zoneName?: string | null,
    addr1?: string | null,
    addr2?: string | null,
    city?: string | null,
    zip?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phone?: string | null,
    toBePrinted?: boolean | null,
    toBeEmailed?: boolean | null,
    printDuplicate?: boolean | null,
    terms?: string | null,
    invoicing?: string | null,
    prodsNotAllowed?: Array< string | null > | null,
    latestFirstDeliv?: number | null,
    latestFinalDeliv?: number | null,
    webpageURL?: string | null,
    picURL?: string | null,
    gMap?: string | null,
    specialInstructions?: string | null,
    delivOrder?: number | null,
    customProd?: Array< string | null > | null,
    templateProd?: Array< string | null > | null,
    userSubs?: Array< string | null > | null,
    qbID?: string | null,
    currentBalance?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    nickName: string,
    custName: string,
    zoneName?: string | null,
    addr1?: string | null,
    addr2?: string | null,
    city?: string | null,
    zip?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phone?: string | null,
    toBePrinted?: boolean | null,
    toBeEmailed?: boolean | null,
    printDuplicate?: boolean | null,
    terms?: string | null,
    invoicing?: string | null,
    prodsNotAllowed?: Array< string | null > | null,
    latestFirstDeliv?: number | null,
    latestFinalDeliv?: number | null,
    webpageURL?: string | null,
    picURL?: string | null,
    gMap?: string | null,
    specialInstructions?: string | null,
    delivOrder?: number | null,
    customProd?: Array< string | null > | null,
    templateProd?: Array< string | null > | null,
    userSubs?: Array< string | null > | null,
    qbID?: string | null,
    currentBalance?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    prodName: string,
    nickName: string,
    packGroup?: string | null,
    packSize?: number | null,
    doughType?: string | null,
    freezerThaw?: boolean | null,
    eodCount?: boolean | null,
    packGroupOrder?: number | null,
    readyTime?: number | null,
    bakedWhere?: Array< string | null > | null,
    wholePrice?: number | null,
    retailPrice?: number | null,
    isWhole?: boolean | null,
    depends?: string | null,
    weight?: number | null,
    descrip?: string | null,
    picURL?: string | null,
    squareID?: string | null,
    currentStock?: number | null,
    whoCountedLast?: string | null,
    forBake?: string | null,
    bakeExtra?: number | null,
    batchSize?: number | null,
    preshaped?: number | null,
    prepreshaped?: number | null,
    updatePreDate?: string | null,
    updateFreezerDate?: string | null,
    backporchbakerypre?: number | null,
    backporchbakery?: number | null,
    bpbextrapre?: number | null,
    bpbextra?: number | null,
    bpbssetoutpre?: number | null,
    bpbssetout?: number | null,
    defaultInclude?: boolean | null,
    leadTime?: number | null,
    qbID?: string | null,
    freezerCount?: number | null,
    freezerClosing?: number | null,
    sheetMake?: number | null,
    freezerNorth?: number | null,
    freezerNorthClosing?: number | null,
    freezerNorthFlag?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    prodName: string,
    nickName: string,
    packGroup?: string | null,
    packSize?: number | null,
    doughType?: string | null,
    freezerThaw?: boolean | null,
    eodCount?: boolean | null,
    packGroupOrder?: number | null,
    readyTime?: number | null,
    bakedWhere?: Array< string | null > | null,
    wholePrice?: number | null,
    retailPrice?: number | null,
    isWhole?: boolean | null,
    depends?: string | null,
    weight?: number | null,
    descrip?: string | null,
    picURL?: string | null,
    squareID?: string | null,
    currentStock?: number | null,
    whoCountedLast?: string | null,
    forBake?: string | null,
    bakeExtra?: number | null,
    batchSize?: number | null,
    preshaped?: number | null,
    prepreshaped?: number | null,
    updatePreDate?: string | null,
    updateFreezerDate?: string | null,
    backporchbakerypre?: number | null,
    backporchbakery?: number | null,
    bpbextrapre?: number | null,
    bpbextra?: number | null,
    bpbssetoutpre?: number | null,
    bpbssetout?: number | null,
    defaultInclude?: boolean | null,
    leadTime?: number | null,
    qbID?: string | null,
    freezerCount?: number | null,
    freezerClosing?: number | null,
    sheetMake?: number | null,
    freezerNorth?: number | null,
    freezerNorthClosing?: number | null,
    freezerNorthFlag?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    prodName: string,
    nickName: string,
    packGroup?: string | null,
    packSize?: number | null,
    doughType?: string | null,
    freezerThaw?: boolean | null,
    eodCount?: boolean | null,
    packGroupOrder?: number | null,
    readyTime?: number | null,
    bakedWhere?: Array< string | null > | null,
    wholePrice?: number | null,
    retailPrice?: number | null,
    isWhole?: boolean | null,
    depends?: string | null,
    weight?: number | null,
    descrip?: string | null,
    picURL?: string | null,
    squareID?: string | null,
    currentStock?: number | null,
    whoCountedLast?: string | null,
    forBake?: string | null,
    bakeExtra?: number | null,
    batchSize?: number | null,
    preshaped?: number | null,
    prepreshaped?: number | null,
    updatePreDate?: string | null,
    updateFreezerDate?: string | null,
    backporchbakerypre?: number | null,
    backporchbakery?: number | null,
    bpbextrapre?: number | null,
    bpbextra?: number | null,
    bpbssetoutpre?: number | null,
    bpbssetout?: number | null,
    defaultInclude?: boolean | null,
    leadTime?: number | null,
    qbID?: string | null,
    freezerCount?: number | null,
    freezerClosing?: number | null,
    sheetMake?: number | null,
    freezerNorth?: number | null,
    freezerNorthClosing?: number | null,
    freezerNorthFlag?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    qty?: number | null,
    prodName: string,
    custName?: string | null,
    PONote?: string | null,
    route?: string | null,
    SO?: number | null,
    isWhole?: boolean | null,
    delivDate?: string | null,
    timeStamp?: string | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    qty?: number | null,
    prodName: string,
    custName?: string | null,
    PONote?: string | null,
    route?: string | null,
    SO?: number | null,
    isWhole?: boolean | null,
    delivDate?: string | null,
    timeStamp?: string | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    qty?: number | null,
    prodName: string,
    custName?: string | null,
    PONote?: string | null,
    route?: string | null,
    SO?: number | null,
    isWhole?: boolean | null,
    delivDate?: string | null,
    timeStamp?: string | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStandingSubscription = {
  onCreateStanding?:  {
    __typename: "Standing",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    isStand?: boolean | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStandingSubscription = {
  onUpdateStanding?:  {
    __typename: "Standing",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    isStand?: boolean | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStandingSubscription = {
  onDeleteStanding?:  {
    __typename: "Standing",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    isStand?: boolean | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHoldingSubscription = {
  onCreateHolding?:  {
    __typename: "Holding",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    Test?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHoldingSubscription = {
  onUpdateHolding?:  {
    __typename: "Holding",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    Test?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHoldingSubscription = {
  onDeleteHolding?:  {
    __typename: "Holding",
    id: string,
    timeStamp?: string | null,
    prodName?: string | null,
    custName?: string | null,
    Sun?: number | null,
    Mon?: number | null,
    Tue?: number | null,
    Wed?: number | null,
    Thu?: number | null,
    Fri?: number | null,
    Sat?: number | null,
    Test?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRouteSubscription = {
  onCreateRoute?:  {
    __typename: "Route",
    id: string,
    routeName?: string | null,
    routeStart?: number | null,
    routeTime?: number | null,
    RouteDepart?: string | null,
    RouteArrive?: string | null,
    RouteServe?: Array< string | null > | null,
    RouteSched?: Array< string | null > | null,
    printOrder?: number | null,
    driver?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRouteSubscription = {
  onUpdateRoute?:  {
    __typename: "Route",
    id: string,
    routeName?: string | null,
    routeStart?: number | null,
    routeTime?: number | null,
    RouteDepart?: string | null,
    RouteArrive?: string | null,
    RouteServe?: Array< string | null > | null,
    RouteSched?: Array< string | null > | null,
    printOrder?: number | null,
    driver?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRouteSubscription = {
  onDeleteRoute?:  {
    __typename: "Route",
    id: string,
    routeName?: string | null,
    routeStart?: number | null,
    routeTime?: number | null,
    RouteDepart?: string | null,
    RouteArrive?: string | null,
    RouteServe?: Array< string | null > | null,
    RouteSched?: Array< string | null > | null,
    printOrder?: number | null,
    driver?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateZoneSubscription = {
  onCreateZone?:  {
    __typename: "Zone",
    id: string,
    zoneNum?: number | null,
    zoneName?: string | null,
    zoneFee?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateZoneSubscription = {
  onUpdateZone?:  {
    __typename: "Zone",
    id: string,
    zoneNum?: number | null,
    zoneName?: string | null,
    zoneFee?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteZoneSubscription = {
  onDeleteZone?:  {
    __typename: "Zone",
    id: string,
    zoneNum?: number | null,
    zoneName?: string | null,
    zoneFee?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAltPricingSubscription = {
  onCreateAltPricing?:  {
    __typename: "AltPricing",
    id: string,
    custName?: string | null,
    prodName?: string | null,
    wholePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAltPricingSubscription = {
  onUpdateAltPricing?:  {
    __typename: "AltPricing",
    id: string,
    custName?: string | null,
    prodName?: string | null,
    wholePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAltPricingSubscription = {
  onDeleteAltPricing?:  {
    __typename: "AltPricing",
    id: string,
    custName?: string | null,
    prodName?: string | null,
    wholePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClosureSubscription = {
  onCreateClosure?:  {
    __typename: "Closure",
    id: string,
    custName?: string | null,
    firstDate?: string | null,
    lastDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClosureSubscription = {
  onUpdateClosure?:  {
    __typename: "Closure",
    id: string,
    custName?: string | null,
    firstDate?: string | null,
    lastDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClosureSubscription = {
  onDeleteClosure?:  {
    __typename: "Closure",
    id: string,
    custName?: string | null,
    firstDate?: string | null,
    lastDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHeldforWeeklyInvoicingSubscription = {
  onCreateHeldforWeeklyInvoicing?:  {
    __typename: "HeldforWeeklyInvoicing",
    id: string,
    custName: string,
    delivDate: string,
    prodName: string,
    qty?: number | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHeldforWeeklyInvoicingSubscription = {
  onUpdateHeldforWeeklyInvoicing?:  {
    __typename: "HeldforWeeklyInvoicing",
    id: string,
    custName: string,
    delivDate: string,
    prodName: string,
    qty?: number | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHeldforWeeklyInvoicingSubscription = {
  onDeleteHeldforWeeklyInvoicing?:  {
    __typename: "HeldforWeeklyInvoicing",
    id: string,
    custName: string,
    delivDate: string,
    prodName: string,
    qty?: number | null,
    rate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDoughSubscription = {
  onCreateDough?:  {
    __typename: "Dough",
    id: string,
    doughName?: string | null,
    hydration?: number | null,
    process?: Array< string | null > | null,
    batchSize?: number | null,
    mixedWhere?: string | null,
    components?: Array< string | null > | null,
    oldDough?: number | null,
    isBakeReady?: boolean | null,
    buffer?: number | null,
    bucketSets?: number | null,
    preBucketSets?: number | null,
    updatePreBucket?: string | null,
    saltInDry?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDoughSubscription = {
  onUpdateDough?:  {
    __typename: "Dough",
    id: string,
    doughName?: string | null,
    hydration?: number | null,
    process?: Array< string | null > | null,
    batchSize?: number | null,
    mixedWhere?: string | null,
    components?: Array< string | null > | null,
    oldDough?: number | null,
    isBakeReady?: boolean | null,
    buffer?: number | null,
    bucketSets?: number | null,
    preBucketSets?: number | null,
    updatePreBucket?: string | null,
    saltInDry?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDoughSubscription = {
  onDeleteDough?:  {
    __typename: "Dough",
    id: string,
    doughName?: string | null,
    hydration?: number | null,
    process?: Array< string | null > | null,
    batchSize?: number | null,
    mixedWhere?: string | null,
    components?: Array< string | null > | null,
    oldDough?: number | null,
    isBakeReady?: boolean | null,
    buffer?: number | null,
    bucketSets?: number | null,
    preBucketSets?: number | null,
    updatePreBucket?: string | null,
    saltInDry?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDoughComponentSubscription = {
  onCreateDoughComponent?:  {
    __typename: "DoughComponent",
    id: string,
    dough?: string | null,
    componentType?: string | null,
    componentName?: string | null,
    amount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDoughComponentSubscription = {
  onUpdateDoughComponent?:  {
    __typename: "DoughComponent",
    id: string,
    dough?: string | null,
    componentType?: string | null,
    componentName?: string | null,
    amount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDoughComponentSubscription = {
  onDeleteDoughComponent?:  {
    __typename: "DoughComponent",
    id: string,
    dough?: string | null,
    componentType?: string | null,
    componentName?: string | null,
    amount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotesSubscription = {
  onCreateNotes?:  {
    __typename: "Notes",
    id: string,
    note?: string | null,
    forWhom?: string | null,
    byWhom?: string | null,
    when?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotesSubscription = {
  onUpdateNotes?:  {
    __typename: "Notes",
    id: string,
    note?: string | null,
    forWhom?: string | null,
    byWhom?: string | null,
    when?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotesSubscription = {
  onDeleteNotes?:  {
    __typename: "Notes",
    id: string,
    note?: string | null,
    forWhom?: string | null,
    byWhom?: string | null,
    when?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthSettingsSubscription = {
  onCreateAuthSettings?:  {
    __typename: "AuthSettings",
    id: string,
    sub?: string | null,
    authType?: string | null,
    tempPassword?: string | null,
    tempUsername?: string | null,
    subSubs?: Array< string | null > | null,
    firstName?: string | null,
    lastName?: string | null,
    businessName?: string | null,
    phone?: string | null,
    email?: string | null,
    verified?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthSettingsSubscription = {
  onUpdateAuthSettings?:  {
    __typename: "AuthSettings",
    id: string,
    sub?: string | null,
    authType?: string | null,
    tempPassword?: string | null,
    tempUsername?: string | null,
    subSubs?: Array< string | null > | null,
    firstName?: string | null,
    lastName?: string | null,
    businessName?: string | null,
    phone?: string | null,
    email?: string | null,
    verified?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthSettingsSubscription = {
  onDeleteAuthSettings?:  {
    __typename: "AuthSettings",
    id: string,
    sub?: string | null,
    authType?: string | null,
    tempPassword?: string | null,
    tempUsername?: string | null,
    subSubs?: Array< string | null > | null,
    firstName?: string | null,
    lastName?: string | null,
    businessName?: string | null,
    phone?: string | null,
    email?: string | null,
    verified?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInfoQBAuthSubscription = {
  onCreateInfoQBAuth?:  {
    __typename: "InfoQBAuth",
    id: string,
    infoName?: string | null,
    infoContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInfoQBAuthSubscription = {
  onUpdateInfoQBAuth?:  {
    __typename: "InfoQBAuth",
    id: string,
    infoName?: string | null,
    infoContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInfoQBAuthSubscription = {
  onDeleteInfoQBAuth?:  {
    __typename: "InfoQBAuth",
    id: string,
    infoName?: string | null,
    infoContent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
