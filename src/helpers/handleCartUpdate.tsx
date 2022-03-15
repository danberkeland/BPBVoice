import { Database } from "./getDeliveriesByDate";
import { getRate } from "./getDeliveriesByDate";
import { convertDatetoBPBDate } from "./getDeliveriesByDate";
import { graphqlOperation, API } from "aws-amplify";
import { updateOrder, createOrder } from "../graphql/mutations";
import { Order } from "../API";
import { confirmDialog } from 'primereact/confirmdialog'; 

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
        delivDate: string,
        timeStamp: Date,
        id?: string,
        _version?: string
}

    
  export const handleCartUpdate = async (curr: curr, database: Database) => {

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
        delivDate: convertDatetoBPBDate(curr.delivDate),
        timeStamp: new Date(),
        
      };

      console.log("ord",ord)
      console.log("update", updateDetails)

      console.log("ord", ord)

      if (ord["id"]) {
        console.log("trying update");
        updateDetails.id = ord["id"];
        updateDetails._version = ord["_version"];
        let ind = ordsToUpdate.findIndex(ord => ord.custName === curr.chosen && ord.delivDate === curr.delivDate)
        ordsToUpdate[ind].qty = ord.qty
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

