import React from "react";

import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";


import styled from "styled-components";

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


type Props = {
    customerList: {
        label: string;
        value: string;
    }[],
    chosen: string,
    setChosen: React.Dispatch<React.SetStateAction<string>>,
}

export const AddProdOverlayBody: React.FC<Props> = ({ customerList, chosen, setChosen }): JSX.Element => {


  return (
    
        <BasicContainer>
          <Spacer>Add a Product</Spacer>
          <Spacer>
          <Dropdown value={chosen} options={customerList} onChange={e => setChosen(e.value)} placeholder="Select a Customer" />
          </Spacer>
          <Spacer>
          <InputNumber
            value={3}
            size={3}
            buttonLayout="horizontal"
            incrementButtonIcon='pi pi-plus'
            decrementButtonIcon='pi pi-minus'
            showButtons
          />
          </Spacer>
          <Spacer>TOTAL: $22.90</Spacer>
          <Spacer>
          <Button label="ADD" icon="pi pi-plus" iconPos="right" className="p-button-raised p-button-rounded p-button-success"/>
          </Spacer>
          
        </BasicContainer>
     
  );
};
