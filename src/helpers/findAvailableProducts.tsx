
import { cloneDeep } from "lodash";

import { Customer, Route, Standing, Dough, DoughComponent, AltPricing, InfoQBAuth, Order, Product } from "../API";

const { DateTime, Interval } = require("luxon");

 

export const findAvailableProducts = (
    products: Product[],
    chosen: string,
    delivDate: string,
    customers: Customer[]
   
): Product[] => {
    let availableProducts: Product[] = cloneDeep(products);

    try {
        let customProds: string[] =
            customers[customers.findIndex((custo) => chosen === custo.custName)]
                .customProd;
        for (let custo of customProds) {
            let ind = availableProducts.findIndex(
                (avail) => avail.prodName === custo
            );
            let prodToUpdate: boolean = cloneDeep(availableProducts[ind].defaultInclude);

            if (prodToUpdate === true) {
                availableProducts[ind].defaultInclude = false;
            } else {
                availableProducts[ind].defaultInclude = true;
            }
        }
    } catch {
        console.log("No chosen");
    }
    availableProducts = availableProducts.filter(
        (prod) => prod.defaultInclude === true
    );

    let today = DateTime.now().setZone("America/Los_Angeles");

    let ddate = DateTime.fromISO(delivDate).setZone("America/Los_Angeles");
   
    let diff = Math.ceil(Interval.fromDateTimes(today, ddate).length("days"))
    Number.isNaN(diff) ? diff=0 : 
    console.log("today",today)
   

    for (let avail of availableProducts) {
       
        if (Number(avail.leadTime) > Number(diff)) {
            avail.trueProdName = avail.prodName + " (IN PRODUCTION)";
        } else {
            avail.trueProdName = avail.prodName
        }

    }

    return availableProducts;
};
