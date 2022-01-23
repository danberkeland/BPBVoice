import {
    listProducts,
    listCustomers,
    listRoutes,
    listStandings,
    listOrders,
    listAltPricings,
    listDoughs,
    listDoughComponents,
    listInfoQBAuths,
  } from "../graphql/queries";
  
 
  
  import { sortAtoZDataByIndex } from "./sortDataHelpers";
  
  
  import { API, graphqlOperation } from "aws-amplify";

  
const fetchFromDataBase = async (baseFunc: any, base: any, limit: any) => {
    try {
      const data: any = await API.graphql(
        graphqlOperation(baseFunc, { limit: limit })
      );
  
      const list = data.data[base].items;
      return list;
    } catch (error) {
      console.log(`error on fetching ${base} data`, error);
    }
  };
  
  
  const fetchFromDataBaseWithFilter = async (baseFunc: any, base: any, limit: any) => {
    try {
      const data: any = await API.graphql(
        graphqlOperation(baseFunc, {
          limit: limit
        })
      );
  
      const list = data.data[base].items;
  
      return list;
    } catch (error) {
      console.log(`error on fetching ${base} data`, error);
    }
  };
  
  export const fetchProducts = async () => {
    let prodList = await fetchFromDataBase(listProducts, "listProducts", "500");
    sortAtoZDataByIndex(prodList, "prodName");
    return prodList;
  };
  
  export const fetchCustomers = async () => {
    let custList: any = await fetchFromDataBase(listCustomers, "listCustomers", "500");
    sortAtoZDataByIndex(custList, "custName");
    custList = custList.filter((cust: any) => cust["_deleted"] !== true);
    return custList;
  };
  
  export const fetchRoutes = async () => {
    let routeList = await fetchFromDataBase(listRoutes, "listRoutes", "500");
    sortAtoZDataByIndex(routeList, "routeStart");
    return routeList;
  };
  
  export const fetchStanding = async () => {
    let standList = await fetchFromDataBase(
      listStandings,
      "listStandings",
      "5000"
    );
    let noDelete = standList.filter((stand: any) => stand["_deleted"] !== true);
    let sortedData = sortAtoZDataByIndex(noDelete, "timeStamp");
    return sortedData;
  };
  
  export const fetchDoughs = async () => {
    let dough = await fetchFromDataBase(listDoughs, "listDoughs", "1000");
    return dough;
  };
  
  export const fetchDoughComponents = async () => {
    let doughComponents = await fetchFromDataBase(
      listDoughComponents,
      "listDoughComponents",
      "1000"
    );
    return doughComponents;
  };
  
  export const fetchAltPricing = async () => {
    let altPricing = await fetchFromDataBase(
      listAltPricings,
      "listAltPricings",
      "1000"
    );
    return altPricing;
  };
  
  export const fetchQBInfo = async () => {
    let QBInfo = await fetchFromDataBase(
      listInfoQBAuths,
      "listInfoQBAuths",
      "1000"
    );
    return QBInfo;
  };
  
  
  export const fetchOrders = async () => {
    let ordList = await fetchFromDataBaseWithFilter(
      listOrders,
      "listOrders",
      "5000"
    );
    let noDelete = ordList.filter((cust: any) => cust["_deleted"] !== true);
    let sortedData = sortAtoZDataByIndex(noDelete, "timeStamp");
    sortedData = sortAtoZDataByIndex(sortedData, "prodName");
  
    return sortedData;
  };
  
  export const promisedData = () => {
    const all = new Promise((resolve, reject) => {
      resolve(fetchData());
    });
  
    return all;
  };
  
  const fetchData = async () => {
    
  
    let products = await fetchProducts();
    let customers = await fetchCustomers();
    let routes = await fetchRoutes();
    let standing = await fetchStanding();
    let orders = await fetchOrders();
    let doughs = await fetchDoughs();
    let doughComponents = await fetchDoughComponents();
    let altPricing = await fetchAltPricing();
    let QBInfo = await fetchQBInfo();
    let data = [
      products,
      customers,
      routes,
      standing,
      orders,
      doughs,
      doughComponents,
      altPricing,
      QBInfo,
    ];
    
    return data;
  };

