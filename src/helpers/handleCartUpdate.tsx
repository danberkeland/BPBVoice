import { Database } from "./getDeliveriesByDate";
import { getRate } from "./getDeliveriesByDate";
import { convertDatetoBPBDate } from "./getDeliveriesByDate";
import { graphqlOperation, API } from "aws-amplify";
import { updateOrder, createOrder } from "../graphql/mutations";
import { Order } from "../API";

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

      if (ord["id"]) {
        console.log("trying update");
        updateDetails.id = ord["id"];
        updateDetails._version = ord["_version"];
        try {
          await API.graphql(
            graphqlOperation(updateOrder, { input: { ...updateDetails } })
          );
          
          console.log(updateDetails.prodName, "Successful update");
        } catch (error) {
          console.log(updateDetails.prodName, "Failed Update");
        }
      } else {
        console.log("trying create");
        try {
          await API.graphql(
            graphqlOperation(createOrder, { input: { ...updateDetails } })
          );
          
          console.log(updateDetails.prodName, "Successful create");
        } catch (error) {
          console.log(updateDetails.prodName, "Failed create", error);
        }
      }
    }
  };

