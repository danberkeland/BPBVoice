import { Database } from "./getDeliveriesByDate";
import { getRate } from "./getDeliveriesByDate";
import { convertDatetoBPBDate } from "./getDeliveriesByDate";
import { graphqlOperation, API } from "aws-amplify";
import { updateOrder, createOrder } from "../graphql/mutations";
import { Order } from "../API";
import { confirmDialog } from 'primereact/confirmdialog'; 


const { DateTime, Interval } = require("luxon");

type curr = {curr: Order[], chosen: string, delivDate: string, route: string, ponote: string }
type updateDetails = {
        qty: number,
        prodName: string,
        custName: string,
        PONote: string,
        rate: number,
        route: string,
        SO: number,
        isWhole: boolean,
        isLate: number,
        delivDate: string,
        timeStamp: Date,
        id?: string,
        _version?: string
}

    
  export const handleCartUpdate = async (curr: curr, database: Database) => {

    curr = handleLateOrder(curr,database)

    const products = database[0]
    const altPricing = database[7]
    let ordsToUpdate = [...database[4]]
    for (let ord of curr.curr) {
     
      let rte = curr.route;
      let price = getRate(products, ord, altPricing);

      const updateDetails: updateDetails = {
        qty: ord["qty"],
        prodName: ord["prodName"],
        custName: curr.chosen,
        PONote: curr.ponote,
        rate: price,
        route: rte,
        SO: ord["qty"],
        isWhole: true,
        isLate: ord["isLate"],
        delivDate: convertDatetoBPBDate(curr.delivDate),
        timeStamp: new Date(),
        
      };

      if (ord["id"]) {
        updateDetails.id = ord["id"];
        updateDetails._version = ord["_version"];
        let ind = ordsToUpdate.findIndex(ord => ord.custName === curr.chosen && ord.delivDate === convertDatetoBPBDate(curr.delivDate))
        ordsToUpdate[ind].qty = ord.qty
        ordsToUpdate[ind].isLate = ord.isLate
        ordsToUpdate[ind].PONote = curr.ponote
        ordsToUpdate[ind].route = rte
        try {
          await API.graphql(
            graphqlOperation(updateOrder, { input: { ...updateDetails } })
          );
          // setOrders or setDatabase
          console.log(updateDetails.prodName, "Successful update");
        } catch (error) {
          confirmDialog({
            message: `It seems there was a problem updating ${updateDetails.prodName}`,
            header: 'Heads up!',
            icon: 'pi pi-exclamation-triangle',
        });
        }
      } else {
        console.log("trying create");
        //create new line for Orders
        try {
          await API.graphql(
            graphqlOperation(createOrder, { input: { ...updateDetails } })
          );
          
          console.log(updateDetails.prodName, "Successful create");
        } catch (error) {
          confirmDialog({
            message: `It seems there was a problem creating ${updateDetails.prodName}`,
            header: 'Heads up!',
            icon: 'pi pi-exclamation-triangle',
        });
        }
      }
    }
  };


  export const handleLateOrder = (curr: curr, database: Database) => {
 
  
  let today = DateTime.now().setZone("America/Los_Angeles");
  let ddate = DateTime.fromISO(curr.delivDate).setZone("America/Los_Angeles");
  let diff = Number(Math.ceil(Interval.fromDateTimes(today, ddate).length("days")))
    
  let products = database[0]
    for (let ord of curr.curr){
      let prodInd = products.findIndex(prod => ord.prodName===prod.prodName)
      let leadtime = products[prodInd].leadTime
      if (Number(leadtime) > Number(diff)){
        ord.isLate = Number(ord.isLate) + (Number(ord.qty)-Number(ord.SO))
        if (ord.isLate<0){
          ord.isLate=0
        }
      }
    }   
    return curr
  }

