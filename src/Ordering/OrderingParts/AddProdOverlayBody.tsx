import React, {useState, useContext} from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";


import styled from "styled-components";
import { ToggleContext } from "../../Contexts/ToggleContexts";
import { addOrder } from "../../helpers/addOrder";

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightgray;
  padding: 10px 10px;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
`;

const Spacer = styled.div`
  padding: 5px 5px;
  margin: auto;
`;




export const AddProdOverlayBody: React.FC = (): JSX.Element => {

  const { database, setIsModified, currentOrder, setCurrentOrder, chosen, delivDate, route, ponote } = useContext(ToggleContext)

  const [pickedProd, setPickedProd] = useState('')
  const [qty, setQty] = useState(0)

  const products = database[0]
  const productList: { label: string, value: string }[] = products.map(prod => {
    return {label: prod.prodName, value: prod.prodName}})

    let curr = {curr: currentOrder, chosen: chosen, delivDate: delivDate, route: route, ponote: ponote }


    const makeChange = (e, simpleItem) => {

      if (e !== 0){
        setIsModified(true)
        console.log("simple",simpleItem)
        console.log("curr", curr)
        let newOrder = addOrder(database, curr, simpleItem, e)
        console.log("newOrder",newOrder)
        setCurrentOrder(newOrder)
     
      }
    }

  return (
    
        <BasicContainer>
          <Spacer>Add a Product</Spacer>
          <Spacer>
          <Dropdown value={pickedProd} options={productList} onChange={e => setPickedProd(e.value)} placeholder="Select a Product" />
          </Spacer>
          <Spacer>
          <InputNumber
            value={qty}
            size={3}
            buttonLayout="horizontal"
            onValueChange = {e => setQty(e.value)}
            showButtons
          />
          </Spacer>
          <Spacer>TOTAL: $22.90</Spacer>
          <Spacer>
          <Button label="ADD" icon="pi pi-plus" iconPos="right" onClick={e => makeChange(qty, pickedProd)} className="p-button-raised p-button-rounded p-button-success"/>
          </Spacer>
          
        </BasicContainer>
     
  );
};
